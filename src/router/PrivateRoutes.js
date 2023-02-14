import NavBar from '../components/Navbar/NavBar';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import Nosotros from '../components/Nosotros/Nosotros';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from '../components/Checkout/Checkout';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';

const PrivateRoutes = () => {
    return (
        <>
            <NavBar />

            <Routes>
                {/* <Route path="/" element={<ItemListContainer />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/productos/:categoriaId" element={<ItemListContainer />} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>

            <Footer /> 
        </>
    )

}

export default PrivateRoutes