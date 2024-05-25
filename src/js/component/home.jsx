import React, { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function TrafficLight() {
	const [color, setColor] = useState("red");
  
	const toggleColor = () => {
	  if (color === 'red') {
		setColor('yellow');
	  } else if (color === 'yellow') {
		setColor('green');
	  } else if (color === 'green') {
		setColor('red');
	  }
	};
  
	const addPurple = () => {
	  setColor('purple');
	};
  
	return (
		<div className={`center`}>	
		<div className={`black-line`} >
		/</div>
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
		<div 
		  className={`Light purple ${color === 'purple' ? 'glow' : ''}`} 
		  onClick={() => setColor('purple')}
		></div>
		<button className="btn btn-primary mt-3" onClick={toggleColor}>
		  Toggle Color
		</button>
		<button className="btn btn-secondary mt-3" onClick={addPurple}>
		  Add Purple
		</button>
	  </div>
	 </div>
	);
  }
  
  export default TrafficLight;
  