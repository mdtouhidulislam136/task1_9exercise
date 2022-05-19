import React, { useEffect, useState } from 'react'
import './exercise.css';


export default function Exercise9() {
  return (
    <div> <User/> </div>
  )
}


function User() {
const [users, setUsers] = useState([]);

useEffect( () => {
  fetch('https://random-data-api.com/api/users/random_user?size=10')
  .then(res => res.json())
  .then(data => setUsers(data))
},[]);

  return (
    <div>
      <h2>Users details with fetch API</h2>
      {
        users.map(users => <UsersDetails  fname={users.first_name} lname={users.last_name} email={users.email} city={users.address.city}></UsersDetails>)
      }
    </div>
    )
}

function UsersDetails (props) {
  return (
    <div className="users">
      <h3>Name: {props.fname} {props.lname} </h3>
      <h4> Email:  {props.email} </h4>
      <h4> City: {props.city}</h4>
    </div>
    )
}