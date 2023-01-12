import { useState } from "react"


export const ItemCount = ({ max }) => {
  const [cantidad, setCantidad] = useState(1)

  const sumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }
  const restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  return (

    <div className="container">
      <span className="estiloTexto">Cantidad:</span>
      <button className="btn btn-outline-primary" onClick={restar}>-</button>
      <span className="mx-3">{cantidad}</span>
      <button className="btn btn-outline-primary" onClick={sumar}>+</button>
      <br />
      <button className="btn btn-success my-3">Agregar al carrito</button>


    </div>



  )
}