import React from "react";

function Formulario({setRover}){

    const input = async () => {
        let input = document.getElementById("comando");
        let comando = input.value;
        input.value = "";
        const response = await fetch('http://localhost:8080/input/'+comando);
        const result = await response.json();

        setRover({
            coordenada: result.positionY.toString()+result.positionX.toString(),
            direction: result.direction
        });
    };

    return(
        <div>
            <input type="text" id="comando" placeholder="Ingrese su comando" />
            <button onClick={input}>Enviar comando</button>
        </div>
    )
}
export default Formulario;