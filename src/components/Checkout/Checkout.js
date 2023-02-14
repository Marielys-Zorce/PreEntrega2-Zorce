import { addDoc } from "firebase/firestore"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection } from "firebase/firestore"
import { Link } from "react-router-dom"
import '../Checkout/checkout.css'


const Checkout = () => {
    const { cart, totalCart, emptyCart} = useCartContext()
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre:'',
        direccion:'',
        email:'',
        cel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //Validación

        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }
        if (values.direccion.length < 2) {
            alert("Dirección incorrecta")
            return
        }
        if (values.email.length < 5) {
            alert("Email incorrecto")
            return
        }
        if (values.cel.length < 2) {
            alert("Teléfono incorrecto")
            return
        }


        const order = {
            cliente: values, 
            items: cart,
            total: totalCart()
        }
        
        console.log (order)
        const orderRef = collection(db, 'orders')  
        
        addDoc(orderRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
            .catch((error)=> console.log(error))
    }

    if (orderId) {
        return (
            <div className="conatiner">
                <h2 className="titulo">Tu compra ha sido exitosa!!!</h2>
                <div className="container subTitulo my-8">Tu código de orden es:<b className="alert alert-success " role="alert">{orderId}</b></div>

                <Link to="/" className="boton btn btn-primary">Volver</Link>
            </div>

        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return(
        <div >
            <h2 className="titulo">Finalizar Compra</h2>
            

            <form className=" container my-5 formulario" onSubmit={handleSubmit}>
    
                <input onChange={handleInputChange} value={values.nombre} name='nombre' type="text" className="form-control my-2" placeholder="Nombre"/>
                <input onChange={handleInputChange} value={values.direccion} name='direccion' type="text" className="form-control my-2" placeholder="Dirección"/> 
                <input onChange={handleInputChange} value={values.email} name='email' type="email" className="form-control my-2" placeholder="Email"/>
                <input onChange={handleInputChange} value={values.cel} name='cel' type="phone" className="form-control my-2" placeholder="Teléfono"/>
                <button className="btn btn-primary">Enviar</button>
            
            </form>
        </div>
    )
}
 export default Checkout