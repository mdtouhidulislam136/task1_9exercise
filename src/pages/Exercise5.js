import React from 'react'
import './exercise.css';


export default function Exercise5() {
  const nameOfAnimal = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  return (
    <div className="list-Animal">
      {
        nameOfAnimal.map(nameOfAnimal => <ul><li>{nameOfAnimal}</li></ul>)
      }
    </div>
  )
}


