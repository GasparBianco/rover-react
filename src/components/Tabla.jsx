import React from 'react';
import Celda from './Celda';

function Tabla({obstaculos, objetivo, rover, setNivel, nivel}){
    const crearTabla = () => {
        let tabla = [];
        for (let i = 0; i < 10; i++) {
            let fila = [];
            for (let j = 0; j < 10; j++) {
                const id =  `${i}${j}`

                if (obstaculos.includes(id)){
                    fila.push(<Celda nivel={nivel} setNivel={setNivel} key={id} id={id} tipo="OBSTACULO" rover={id === rover.coordenada ? rover : null} />);
                }else if (id === objetivo){
                    fila.push(<Celda nivel={nivel} setNivel={setNivel} key={id} id={id} tipo="OBJETIVO" rover={id === rover.coordenada ? rover : null}/>);
                }else {
                    fila.push(<Celda nivel={nivel} setNivel={setNivel} key={id} id={id} rover={id === rover.coordenada ? rover : null}/>);
                }
            }
            tabla.push(<tr key={i}>{fila}</tr>);
        }
        return tabla;
    };

    return (
        <table>
            <tbody>
                {crearTabla()}
            </tbody>
        </table>
    );
};

export default Tabla;
