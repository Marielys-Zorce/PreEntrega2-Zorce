import foto from "../ItemListContainer/IMG3.jpg"
import Card from 'react-bootstrap/Card';
export const ItemListContainer = (torta) => {
    return (
       
        <Card className="card bg-dark text-white mt-2 m-5" style={{ width: '15rem' }}>
            <Card.Img variant="top" src={foto} />
            <Card.Body>
                <Card.Title>
                    <h5>Descripcion: {torta.Descripcion}</h5>
                    <p className="parrafo">Precio: {torta.Precio}</p>
                  

                </Card.Title>


            </Card.Body>
        </Card>

    )
}