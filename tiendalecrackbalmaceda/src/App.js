import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Welcome to EightShop" />
    </div>
  );
}

export default App;
