import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Contador from "./components/ItemCount/ItemCount";

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

export default App;
