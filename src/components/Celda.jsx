import React from 'react';
import Rover from './Rover.jsx'
import { useEffect } from 'react';

function Celda({ id, tipo, rover, setNivel, nivel }){
    useEffect(() => {
        if (tipo === "OBSTACULO" && rover !== null) {
            setNivel(1);
        } else if (tipo === "OBJETIVO" && rover !== null) {
            setNivel(nivel + 1);
        }
    }, [rover]);
    return (
        <td id={id} className={tipo}>
            {rover !== null ? <Rover direction={rover.direction} /> : null}
        </td>
    );
};

export default Celda;
