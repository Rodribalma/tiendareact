import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/cartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Grid container spacing="20" sx={{ mb: 3 }}>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route
                exact
                path="/categoria/:idCategoria"
                element={<ItemListContainer />}
              />
              <Route
                exact
                path="/item/:idItem"
                element={<ItemDetailContainer />}
              />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Grid>
        </Grid>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
