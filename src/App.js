
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
        <NavBar/>
        <ItemListContainer greeting="Biemvenidos"/>
        <ItemCount stock={5} initial={1} onAdd={0}/>
    </>
  );
}

export default App;
