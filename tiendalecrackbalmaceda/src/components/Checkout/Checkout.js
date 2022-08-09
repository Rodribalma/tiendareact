import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Divider,
  TextField,
  Button,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import {
  doc,
  addDoc,
  collection,
  getFirestore,
  updateDoc,
  writeBatch,
} from "firebase/firestore";

const Checkout = () => {
  const { cart, calcularTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [newOrderId, setNewOrderId] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const getError = () => {
    console.log(cart);
    if (!name) return "nombre";
    if (!email) return "email";
    if (!phone) return "teléfono";
    if (cart.length === 0) return "carrito";
  };

  const onFinish = async () => {
    setError(false);
    if (!name || !email || !phone || calcularTotal() === 0) {
      setError(getError());
      return;
    }

    setGuardando(true);
    const newOrder = {
      items: cart,
      total: calcularTotal(),
      buyer: { name, email, phone },
    };

    const db = getFirestore();
    const batch = writeBatch(db);

    const collectionRef = collection(db, "orders");
    batch.set(collectionRef, newOrder);

    cart.forEach((item) => {
      const orderStockRef = doc(db, "items", item.id);
      batch.update(orderStockRef, { stock: item.stock - item.cantidad });
    });

    await batch.commit();

    // setNewOrderId(id);
    // setSuccess(true);
    setGuardando(false);
  };

  const handleDialogClose = () => {
    setSuccess(false);
    navigate("/");
  };

  return guardando ? (
    "guardando..."
  ) : (
    <>
      <Grid
        container
        alignItems="center"
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 7 }}
        justifyContent="center"
      >
        <Grid
          item
          xs={12}
          md={8}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h5" gutterBottom>
            Finaliza tu compra
          </Typography>
        </Grid>
        {error && (
          <Grid
            item
            xs={12}
            md={8}
            container
            direction="column"
            alignItems="stretch"
          >
            <Alert severity="error">
              La orden esta incompleta falta el {error}
            </Alert>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={8}
          container
          direction="column"
          alignItems="stretch"
        >
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          container
          direction="column"
          alignItems="stretch"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          container
          direction="column"
          alignItems="stretch"
        >
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <Divider />
        </Grid>
        <Grid item xs={8} container justifyContent="center">
          <Button size="large" color="primary" onClick={onFinish}>
            Finalizar
          </Button>
        </Grid>
      </Grid>

      <Dialog
        open={success}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Felicitaciones!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Orden creada con éxito, proximamente le llegará un email de
            confirmación. Por más detalles, éste es el numero de confirmación de
            su orden: {newOrderId}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Checkout;