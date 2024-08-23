import React, { useState } from 'react';

//crea tu primer componente
function TrafficLight() {
  const [color, setColor] = useState("red");
  const [mostrarPurpura, setMostrarPurpura] = useState(false);

  const cambiarColor = () => {
    if (color === 'red') {
      setColor('yellow');
    } else if (color === 'yellow') {
      setColor('green');
    } else if (color === 'green') {
      setColor('red');
    } else if (color === 'purple') {
      setColor('red');
    }
  };

  const agregarPurpura = () => {
    setMostrarPurpura(true);
    setColor('purple');
  };

  return (
    <div className={`center`}>
      <div className={`black-line`}>
      </div>
      <div className="trafficlight d-flex flex-column align-items-center mt-5">
        <div 
          className={`Light red ${color === 'red' ? 'glow' : ''}`} 
          onClick={() => setColor('red')}
        ></div>
        <div 
          className={`Light yellow ${color === 'yellow' ? 'glow' : ''}`} 
          onClick={() => setColor('yellow')}
        ></div>
        <div 
          className={`Light green ${color === 'green' ? 'glow' : ''}`} 
          onClick={() => setColor('green')}
        ></div>
        {mostrarPurpura && (
          <div 
            className={`Light purple ${color === 'purple' ? 'glow' : ''}`} 
            onClick={() => setColor('purple')}
          ></div>
        )}
        <button className="btn btn-primary mt-3" onClick={cambiarColor}>
          Cambiar Color
        </button>
        <button className="btn btn-secondary mt-3" onClick={agregarPurpura}>
          Agregar Púrpura
        </button>
      </div>
    </div>
  );
}

export default TrafficLight;
