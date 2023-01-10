import Card from 'react-bootstrap/Card';

const Item = ( {nombre,img,desc,precio,id} ) => {

    return (
        <div className="col-3 m-3">

            <Card className="card bg-light text-white mt-2 m-5" style={{ width: '15rem' }}>

                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>

                        <h5 className="parrafo">{nombre}</h5>
                        {/* <p className="parrafo">Descripción: {desc}</p> */}
                        <p className="parrafo">Precio: <b>${precio}</b></p>
                        <button className="btn btn-outline-primary">Ver más</button>
                    </Card.Title>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Item 