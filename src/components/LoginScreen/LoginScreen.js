import {  useState } from "react"
import { useLoginContext } from "../../context/LoginContext"
import { Link } from 'react-router-dom'

const LoginScreen = () => {

    const { login, user, loading } = useLoginContext() 

    const [values, setValues] = useState({
        email: '',
        password: ''

    })


    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)

    }

    return (
        <div className="loginScreen">
            <div className="login">
                <h2>Login</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input onChange={handleInputChange} value={values.email} name='email' type='email' className="form-control my-2" placeholder="Correo" />
                    <input onChange={handleInputChange} value={values.password} name='password' type='password' className="form-control my-2" placeholder="Contraseña" />


                    <button className="btn btn-primary" disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</button>

                    {user.error && <p className='error' >{user.error}</p>}
                      
                </form>
                <Link to="/register">Registrarme</Link>
            </div>
        </div>
    )

}

export default LoginScreen