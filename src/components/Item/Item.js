import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ( {nombre,img,desc,precio,categoria,id} ) => {

    return (
        <div className="col-3 m-3 ">

            <Card className="card bg-light text-white mt-2 m-5" style={{ width: '15rem' }}>

                <Card.Img variant="top" className='img' src={img} />
                <Card.Body>
                    <Card.Title>

                        <h5 className="textoCentrado">{nombre}</h5>
                        {/* <p className="parrafo">Descripción: {desc}</p> */}
                        <small className="parrafo">Precio: <b>${precio}</b></small>
                        <br/>
                        <small className="parrafo">Categoría: {categoria}</small>
                        <br/>
                        <Link className=" btn-primary btn boton" to={`/detail/${id}`}>Ver más</Link>
                    </Card.Title>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Item 