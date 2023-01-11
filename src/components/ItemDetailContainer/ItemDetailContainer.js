import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pedirItemPorId } from "../../helpers/pedirDatos"
import ItemDetail from "../ItemDetail/ItemDetail"


 const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)
    const {itemId} = useParams()


    useEffect(() => {
        setError(null)
        pedirItemPorId(itemId)
            .then((data) => {
                setItem(data)
            })
            .catch((err) => {
                setError(err.error)
                
            })
            
    }, [itemId])


    return (
        <div className="container my-5">
            {
                error
                    ? error
                    : item && <ItemDetail {...item}/>

            }
            
    
        </div>

    )
}

export default ItemDetailContainer 