import React, { useState } from 'react'
import './exercise.css';



export default function Exercise4() {

  return (
    <Counter/>
  )
}


function Counter () {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    const newCount = count +1;
    setCount(newCount);
  }
  return(
    <div className="counter">
    <h2>Button has been clicked: {count} times</h2>
    <button onClick={incrementCount}>Click Me!</button>

    </div>
  )
}