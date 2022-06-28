import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Contador from "./componets/ItemCount/ItemCount";

const App =() => {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Tienda LeCrack" />
      <hr />
      <Contador />
    </>
  );
}

export default App
