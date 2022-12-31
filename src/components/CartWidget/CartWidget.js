import carrito from "../CartWidget/compra.png";

export const CartWidget = () => {

    return (
        <div className="carrito">
            <span><p>0</p></span>
            <img src={carrito} width="15%" height="30" alt="" />
        </div>
    )
}