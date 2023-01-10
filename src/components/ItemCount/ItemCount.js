import { useState } from "react"
import { InputGroup } from "react-bootstrap"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
export const ItemCount = () => {
    let [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }

    return (

      <div className="container">

        <button className="btn btn-outline-primary" onClick={sumar}>Sumar</button>
        <p>{counter}</p>
        <button className="btn btn-outline-primary" onClick={restar}>Restar</button>
        <input></input>

      </div>
      
        

    )
}