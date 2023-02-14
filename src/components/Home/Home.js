import '../Home/Home.css'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {

    return (

        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCaorusel"
                        src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664666891/pasteler%C3%ADa/dulces-variados_uyqs3m.jpg"
                        alt="dulces variados"
                    />
                    <Carousel.Caption>
                        <h3 className='tituloBanner'>"Deliciosos postres, elige el que mas te guste"</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCaorusel "
                        src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664666499/pasteler%C3%ADa/BANNER_ncymuq.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgCaorusel"
                        src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664666949/pasteler%C3%ADa/tarta-pastel-arandanos_pbrfoq.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <section>
                <h1 className="titulo">Los más Destacados</h1>
                <div className="container centrar">
                    <div className="row row-cols-1 row-cols-md-2 g-4 imgIndex">
                        <div className="col">
                            <div>
                                <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664666695/pasteler%C3%ADa/tortaglaseada-chocolate_rclbox.jpg" className="card-img-top" alt="torta glaseada chocolate" />
                                <div className="card-body">
                                    <h5 className="card-title subTitulo">Torta Elinor </h5>
                                    <p className="card-text textoJustificado">Disfruta del más rico chocolate, crema batida y chispas de
                                        chocolate semi amargo 15, 20 y 30p.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664667016/pasteler%C3%ADa/selva-negra_jxrj1d.webp" className="card-img-top" alt="torta selva negra" />
                                <div className="card-body">
                                    <h5 className="card-title subTitulo">Torta Charlotte</h5>
                                    <p className="card-text textoJustificado">Espectacular combinación del chocolate,crema batida y fresas 15,
                                        20 y 30p.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664667169/pasteler%C3%ADa/cheescak-individual_fscldz.jpg" className="card-img-top" alt="cheescak individual" />
                                <div className="card-body">
                                    <h5 className="card-title subTitulo">Cheesecake Tradicional</h5>
                                    <p className="card-text textoJustificado">Cheesecake relleno con frutos rojos 15, 20 y 30p.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664666701/pasteler%C3%ADa/tortachocolate1_ejxonh.webp" className="card-img-top" alt="torta de chocolate" />
                                <div className="card-body">
                                    <h5 className="card-title subTitulo">Torta Marquesa</h5>
                                    <p className="card-text textoJustificado">Deliciosa torta de galletas rellena con chocolate y manjar 15,
                                        20 y 30p. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className='estiloFuente'>
                <div>
                    <h2 className='tituloGrande'>Fina Pastelería </h2>
                    <p className='estiloParrafo'>"La combinación perfecta entre deliciosos sabores y detalles perfectos"</p>
                </div>

            </section>


            <h2 className="tituloGrande">Historias de éxito de nuestra tienda Online</h2>

            <section className="segundaSeccion">
                <span className="enLinea">"La calidad de las tortas son insuperables y el servico perfecto".</span>
                <span className="enLinea">"Bellas y sabrosas, tal cual se ven en las fotos. Todo un acierto!"</span>
                <span className="enLinea">"Super deliciosas el envío rápido y todo bien presentado!"</span>
                <span className="enLinea">"Excelentes y deliciosos productos el servcio es de primera lìnea!"</span>
            </section>

            <section className="terceraSeccion">
                <h2 className='tituloGrande'>Únete a nuestra comunidad</h2>
                <p className='estiloParrafo'>Suscríbete a nuestro boletín para recibir ofertas especiales y obtener acceso anticipado exclusivo a
                    nuevos productos.</p>
                <p className='estiloParrafo'>10% en tu primera compra</p>

                <form action="#" method="get">
                    <span>
                        <input className="input" type="email" name="email" placeholder="nombre@ejemplo.com" required />
                        <input className="boton" type="submit" value="Suscribirse" />
                    </span>
                </form>

            </section>










        </>

    )
}



export default Home