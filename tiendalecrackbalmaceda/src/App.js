import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import CartProvider from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          {/* TODO: Last component */}
          <Route
            exact
            path="/categoria/:idCategoria"
            element={<ItemListContainer />} /> 
            <Route exact path="/cart" element={<Cart />} />;
            +          <Route exact path="/checkout" element={<Checkout />} />
            +          <Route path="*" element={<NotFound />} />
          {/*TODO: agregar componete para carrito , checkout y notfound */}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
