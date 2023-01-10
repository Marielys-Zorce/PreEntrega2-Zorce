import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div>
       <NavBar />
       <ItemListContainer />  
       <ItemDetailContainer itemId={'001'} />
       
    </div>
  );
}

export default App;
