

export const ItemCount = ({ max, cantidad, setCantidad, onAdd }) => {


  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }



  return (

    <div className="container">
      <span className="estiloTexto">Cantidad:</span>
      <button
        className={`btn btn-outline-${cantidad > 1 ? 'primary' : 'danger'}`}       
        disabled={cantidad === 1}
        onClick={handleRestar}
      >
        -
      </button>
      <span className="mx-3">{cantidad} {cantidad === 1 ? 'unidad' : 'unidades'}</span>
      <button
        className={cantidad < max ? 'btn btn-primary' : 'btn btn-danger' }
        disabled={cantidad === max}
        onClick={handleSumar}
      >
        +
      </button>
      <br />
      <button className="btn btn-success my-3" onClick={onAdd}>Agregar al carrito</button>


    </div>



  )
}