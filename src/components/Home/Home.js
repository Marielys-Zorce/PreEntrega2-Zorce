

const Home = () => {

    return (

    <>
        <section>
            <h1 className="titulo">Los más Destacados</h1>
            <div className="container centrar">
                <div className="row row-cols-1 row-cols-md-2 g-4 imgIndex">
                    <div className="col">
                        <div>
                            <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664666695/pasteler%C3%ADa/tortaglaseada-chocolate_rclbox.jpg" className="card-img-top" alt="torta glaseada chocolate"/> 
                                <div className="card-body">
                                    <h5 className="card-title subTitulo">Torta Elinor </h5>
                                    <p className="card-text textoJustificado">Disfruta del más rico chocolate, crema batida y chispas de
                                        chocolate semi amargo 15, 20 y 30p.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664667016/pasteler%C3%ADa/selva-negra_jxrj1d.webp" className="card-img-top" alt="torta selva negra"/>
                                <div className="card-body">
                                    <h5 className="card-title subTitulo">Torta Charlotte</h5>
                                    <p className="card-text textoJustificado">Espectacular combinación del chocolate,crema batida y fresas 15,
                                        20 y 30p.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664667169/pasteler%C3%ADa/cheescak-individual_fscldz.jpg" className="card-img-top" alt="cheescak individual"/>
                                <div className="card-body">
                                    <h5 className="card-title subTitulo">Cheesecake Tradicional</h5>
                                    <p className="card-text textoJustificado">Cheesecake relleno con frutos rojos 15, 20 y 30p.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <img src="https://res.cloudinary.com/dninjpxlv/image/upload/v1664666701/pasteler%C3%ADa/tortachocolate1_ejxonh.webp" className="card-img-top" alt="torta de chocolate"/>
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
        

        <section className="primeraSeccion">
        <div>
          <h2>Fina Pastelería </h2>
          <p>"La combinación perfecta entre deliciosos sabores y detalles perfectos"</p>
        </div>

      </section>
      </>

    )
}



export default Home