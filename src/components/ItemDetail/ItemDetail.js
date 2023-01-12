import { useNavigate } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"


const ItemDetail = ({ img, nombre, desc, precio, categoria, stock, id }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
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
                        <ItemCount max={stock} />



                    </div>
                    <hr />
                </div>
                <button className="boton btn btn-primary" onClick={handleVolver}>Volver </button>
            </div>
        </div>

    )
}

export default ItemDetail