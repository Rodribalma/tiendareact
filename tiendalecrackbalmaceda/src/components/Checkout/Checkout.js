import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate, NavLink } from "react-router-dom";
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
  AvatarGroup,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { doc, collection, getFirestore, writeBatch } from "firebase/firestore";

const Checkout = () => {
  const { cart, calcularTotal, calcularCantidadDeProductos, vaciarCarrito } =
    useContext(CartContext);

  const navigate = useNavigate();

  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [guardando, setGuardando] = useState(false);

  const getError = () => {
    if (buyer.name === "") return "nombre";
    if (buyer.email === "") return "email";
    if (buyer.phone === "") return "teléfono";
    if (cart.length === 0) return "carrito";
  };

  const onFinish = async () => {
    setError(false);
    if (
      buyer.name === "" ||
      buyer.email === "" ||
      buyer.phone === "" ||
      cart.length === 0
    ) {
      setError(getError());
      return;
    }

    setGuardando(true);
    const newOrder = {
      items: cart,
      total: calcularTotal(),
      buyer,
    };

    const db = getFirestore();
    const batch = writeBatch(db);

    const collectionRef = doc(collection(db, "Ordenes"));
    batch.set(collectionRef, newOrder);

    cart.forEach((item) => {
      const ordenStockRef = doc(db, "Productos", item.id);
      batch.update(ordenStockRef, { stock: item.stock - item.cantidad });
    });

    batch.commit().then((response) => console.log("response", response));

    setSuccess(true);
    setGuardando(false);
  };

  const handleDialogClose = () => {
    vaciarCarrito();
    setSuccess(false);
    navigate("/");
  };

  return guardando ? (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <CircularProgress size={50} />
    </Grid>
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

        {cart.length === 0 ? (
          <Grid
            item
            xs={12}
            md={8}
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="body2" gutterBottom>
              Tu carrito esta vacío
            </Typography>
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            md={8}
            container
            direction="row"
            justifyContent="flex-start"
            spacing="15"
            alignItems="center"
          >
            <Grid item xs={8} md={4}>
              <AvatarGroup max={4} total={cart.length}>
                {cart.map((item) => (
                  <Avatar key={item.id} alt={item.titulo} src={item.imagen} />
                ))}
              </AvatarGroup>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body1"
                align="center"
                sx={{ whiteSpace: "pre-line", ml: 5 }}
              >
                {`Cantidad de productos: ${calcularCantidadDeProductos()} - Total: $ ${calcularTotal()}`}
              </Typography>
            </Grid>
          </Grid>
        )}

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
            value={buyer.name}
            onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
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
            value={buyer.email}
            onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
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
            value={buyer.phone}
            onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
          />
        </Grid>
        <Grid
          item
          xs={8}
          container
          direction="row"
          justifyContent="space-evenly"
        >
          <Grid item xs={12} md={4} align="center">
            <NavLink to="/cart" style={{ textDecoration: "none" }}>
              <Button size="large" variant="outlined">
                Volver al carrito
              </Button>
            </NavLink>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={onFinish}
            >
              Finalizar
            </Button>
          </Grid>
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
            confirmación.
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
