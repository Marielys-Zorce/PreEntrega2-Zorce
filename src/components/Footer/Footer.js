
import  mediospago  from '../Footer/mediospago.jpg'
import '../Footer/Footer.css'

function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="textoChico ">
                    <img className="imgPago" src={mediospago} alt={mediospago} aria-hidden=" true" /> 
                    <p className='textoChico'>&copy 2022 Pastelería Dulce Marie; Términos Política de Privacidad</p>
                </div>
                <div className="imgRedes">
                    <a href="https://www.instagram.com/"><img className='imgRedes' src="./img/instagram.png" alt="instagram" /></a>
                    <a href="https://www.Facebook.com/"><img className='imgRedes' src="./img/Facebook.png" alt="facebook" /></a>
                    <a href="https://www.twitter.com/"><img className='imgRedes' src="./img/twitter.png" alt="twitter" /></a>
                </div>

            </footer>

        </>
    )
}

export default Footer