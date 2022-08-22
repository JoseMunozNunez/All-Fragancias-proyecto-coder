import './App.css';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from "./components/NavBar";
import TopBar from './components/TopBar';


function App() { 

  return (
    <div>
      <TopBar />
      <NavBar/>
      <ItemListConteiner greeting = 'Hola CoderHouse' />
      
    </div>
  );
}

export default App;
