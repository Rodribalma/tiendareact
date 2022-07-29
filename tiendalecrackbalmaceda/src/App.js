import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  /*TODO:cambiar carrito por context*/
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => setCarrito([...carrito, producto]);

  return (
    <BrowserRouter>
      <NavBar cantidadProductos={carrito.length} />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer agregarCarrito={agregarCarrito} />}
        />
         <Route
          exact
          path="/categoria/:idCategoria"
          element={<ItemListContainer agregarCarrito={agregarCarrito} />}
        />
         {/*<Route
          exact
          path="/item/:iditem"
            element={<ItemDetailContainer agregarCarrito={agregarCarrito} />}
        />
         <Route
          exact
          path="/carrito"
          element={<ItemDetailContainer agregarCarrito={agregarCarrito} />}
        />*/}
         <Route
          exact
          path="/checkout"
          element={<ItemListContainer agregarCarrito={agregarCarrito} />}
        />
         <Route
          exact
          path="/notfound"
          element={<NotFound />}
        />
          {/*TODO: agregar componete para carrito , checkout y notfound */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
