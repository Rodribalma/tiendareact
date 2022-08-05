import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import CartProvider from "./context/cartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          {/*<Route
          exact
          path="/item/:iditem"
            element={<ItemDetailContainer />}
        />
         <Route
          exact
          path="/carrito"
          element={<ItemDetailContainer />}
        />*/}
          <Route exact path="/checkout" element={<ItemListContainer />} />
          <Route exact path="/notfound" element={<NotFound />} />
          {/*TODO: agregar componete para carrito , checkout y notfound */}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
