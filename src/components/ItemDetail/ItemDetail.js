import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"



const ItemDetail = ({ img, nombre, desc, precio, categoria, stock, id }) => {

    const { agregarAlCarrito, isInCart } = useCartContext()
    
    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {
            id, nombre, desc, img, precio, stock, categoria, cantidad
        }

        agregarAlCarrito(item)
    }

    return (
        <div>
            <div className="text-center">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <img className="imgItem" src={img} alt={nombre} />
                    </div>
                    <div className="col-md-4 offset-md-m1 aling-self-center">
                        <p className="estiloTexto">Precio: <b>${precio}</b></p>

                        <hr />
                        <h5 className="subTitulo">{nombre}</h5>
                        <p className="estiloTexto">Descripción: {desc}</p>
                        <p className="estiloTexto">Categoría: {categoria}</p>
                        
                        {stock <= 10 && <h5>Últimas unidades disponibles!!!</h5>}

                        {
                            !isInCart(id)
                                ? <ItemCount
                                    max={stock}
                                    cantidad={cantidad}
                                    setCantidad={setCantidad}
                                    onAdd={handleAgregar} />

                                : <Link to="/cart" className="btn btn-success my-4">Finalizar compra</Link>    
                        }





                    </div>
                    
                </div>
                <button className="boton btn btn-primary my-5" onClick={handleVolver}>Volver </button>
            </div>
        </div>

    )
}

export default ItemDetail