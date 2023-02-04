import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = () => {
    
    const { cart, emptyCart, totalCart, removerItem } = useContext(CartContext)
    
    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr/>
                <p>Anda a comprar algo</p>
                <Link to="/" className="btn btn-primary" >Volver</Link>
            </div>
        )
    }

    return (
        <div >
            <h2 className="titulo">Tu Compra</h2>
            <hr/>

            {
                cart.map(item => (
                    <div className="container" key={item.id}>
                        <h4 className="estiloTexto">{item.nombre}</h4>
                        <img className="imgCart" src={item.img} alt={item.nombre} />
                        <p className="col">Cantidad: {item.cantidad}</p>
                        <p className="col">Precio: ${item.precio * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn btn-outline-danger"> <FaTrashAlt /> </button>
                        <hr/> 
                    </div>
                ))
            }

            <h4 className=" container ">Total: <b>${totalCart()}</b></h4>

            <button className="  btn btn-danger mx-3 my-3 " onClick={emptyCart}>Vaciar Carrito</button>
            <Link className=" btn btn-success mx-2" to="/checkout">Finalizar Comprar</Link>

        </div>
    )
}

export default Cart