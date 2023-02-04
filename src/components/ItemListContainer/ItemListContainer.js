import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/config"


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)
    const { categoriaId } = useParams()

    console.log(productos)

    useEffect(() => {
        setLoading(true)

        //1.- Referencia
        const productsRef = collection(db, "productos")
        const q = categoriaId
                     ? query(productsRef, where("categoria", "==", categoriaId))
                     : productsRef
        //2.- Petición asincrónica
        getDocs(q)
            .then((resp) => {

                setProductos(resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                    
            }))
        })
            
            .finally(() => {
                setLoading(false)
            })

        // pedirDatos()
        //     .then((res) => {
        //         if (categoriaId) {
        //             setProductos(res.filter(prod => prod.categoria === categoriaId))
        //         } else {
        //             setProductos(res)
        //         }

        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [categoriaId])


    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    :<ItemList productos={productos} />

            }


        </div>

    )
}

