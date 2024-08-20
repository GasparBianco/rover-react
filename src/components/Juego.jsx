import React, { useState, useEffect } from "react";
import Tabla from "./Tabla";
import Formulario from "./Formulario";

function Juego(){
    const [nivel, setNivel] = useState(1)
    const [mapa, setMapa] = useState(
        {
            obstaculos:  generarObstaculos(),
            objetivo: generarCoordenadaAlAzar()
        }
    )
    const [rover, setRover] = useState({
        coordenada: "00",
        direction: 0
    })

    async function fetchData(){
        const response = await fetch('http://localhost:8080/getPosition');
        const result = await response.json();
        setRover({
            coordenada: result.positionY.toString()+result.positionX.toString(),
            direction: result.direction
        });
    };
    function reiniciarMapa(){
        let mapa = {
            obstaculos: generarObstaculos(),
            objetivo: generarCoordenadaAlAzar()
        }
        setMapa(mapa)
    }

    function generarObstaculos(){
        let obstaculosLista = [];
        for ( let i = 0; i <= nivel; i++){
            obstaculosLista.push(generarCoordenadaAlAzar())
        }
        return obstaculosLista;
    }
    
    function generarCoordenadaAlAzar(){
        return Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString()
    }

    useEffect(() => {
        fetchData();
    }, []); 

    useEffect(() => {
        reiniciarMapa()
    },[nivel])

    return(
        <div>
            <Tabla obstaculos={mapa.obstaculos} objetivo={mapa.objetivo} rover={rover} nivel={nivel} setNivel={setNivel}></Tabla>
            <Formulario setRover={setRover}></Formulario>
        </div>
    )
}
export default Juego;