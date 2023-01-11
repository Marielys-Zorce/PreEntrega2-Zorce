import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (categoriaId) {
                    setProductos(res.filter(prod => prod.categoria === categoriaId))
                }else {
                    setProductos(res)
                }
              
            })
            .catch((err) => {
                console.log(err)
            })
    }, [categoriaId])


    return (
        <div>
            <ItemList productos={productos}/>
    
        </div>

    )
}

