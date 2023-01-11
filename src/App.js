import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (

    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={ <ItemListContainer />  } />
        <Route path="/nosotros" element={ <Nosotros />} />
        <Route path="/productos/:categoriaId" element={ <ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
        <Route path="*" element={ <Navigate to = {"/"} /> } />
      </Routes>
       

    </BrowserRouter>
    
  );
}

export default App;
