import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({img,nombre,desc,precio,id}) => {

    return (
        <div>
            
            <h5 className="parrafo">{nombre}</h5>
            <p className="parrafo">Descripción: {desc}</p>
            <p className="parrafo">Precio: <b>${precio}</b></p>
            
            <ItemCount stock={10} />
        </div>
    )
}

export default ItemDetail