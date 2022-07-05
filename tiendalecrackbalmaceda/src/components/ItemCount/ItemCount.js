import { useState } from "react"

const Contador = () =>{
    const [contador,setContador]= useState(0);
    
    const sumar = () => setContador(contador + 1);

    const restar = () => setContador(contador - 1);

    return(
        <div>
            <h2>Contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{Contador} </h3>


        </div>
    )
}

export default Contador;