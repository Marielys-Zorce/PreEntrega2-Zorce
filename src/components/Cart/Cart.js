import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import '../Cart/Cart.css'

const Cart = () => {

    const { cart, emptyCart, totalCart, removerItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2>
                <hr />
                <p>Anda a comprar algo</p>
                <Link to="/" className="btn btn-primary" >Volver</Link>
            </div>
        )
    }

    return (
        <>

            <div>
                <h2 className="titulo">Tu Compra</h2>
                

                <div className="container cartContainer">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-10">
                            <table className="table">
                                <thead>
                                    <tr>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col">Productos</th>
                                        <th scope="col" >Precio</th>
                                        <th scope="col" >Cantidad</th>
                                        <th scope="col" >Total</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>




                                    {
                                        cart.map(item => (



                                                <tr className="container" key={item.id}>
                                                    <td className="imgCart"><img className="imgTable" src={item.img} alt={item.nombre}/></td>
                                                    <td className="estiloTexto">{item.nombre}</td> 
                                                    <td className="col"> {item.precio}</td>
                                                    <td className="col"> {item.cantidad}</td>
                                                    <td className="col">${item.precio * item.cantidad}</td>
                                                    <button onClick={() => removerItem(item.id)} className="btn btn-outline-danger"> <FaTrashAlt /> </button>
                                                </tr>

                                )
                                )
                                    }
                              <th scope="col" colSpan={5} className="text-end">
                                <h4 className=" container ">Total: <b>${totalCart()}</b></h4>

                                <button className="btn btn-danger mx-3" onClick={emptyCart}>Vaciar Carrito</button>
                                <Link className="btn btn-primary btn-success" to="/checkout">Finalizar Comprar</Link>
                                </th>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div> 

        </>
    )



}



export default Cart