import React, { useState } from 'react'
import './exercise.css';


export default function Exercise7() {
  return (
    <div><Form/></div>
  )
}



function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
        alert('Hello, ' + firstName + ' ' + lastName );
  }
  
return (
  <div>
    <form class="form">
    <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='First Name'  /> <br />
    <br />
    <input onChange={(e) => setLastName(e.target.value)}type="text" placeholder='Last Name'  /> <br/>
    <br/>
    <button type="submit" onClick={handleSubmit}> GREET ME</button>
    </form>
  </div>
  )
}