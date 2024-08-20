import React from 'react';

function Rover({ direction }){
    let rotation = 90 * direction
    return (
        <img src="descarga.png" alt="rover" style={{ 
            transform: `rotate(${rotation}deg)`,
            height: '30px',
            width: '30px'
        }}  />
    );
};

export default Rover;
