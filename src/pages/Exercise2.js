import React from 'react';
import './exercise.css';


export default function Exercise2() {

  const handleClick = () => {
    alert('clicked!');
  }
  
  return (
   <div className="button">
      <button onClick={handleClick}>Click me</button>
   </div>
  )
}




