import React from 'react';
import './exercise.css';

const nameOfAnimal = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
export default function Exercise6() {
 
  return (
    <div >
      <Animallist nameOfAnimal={nameOfAnimal} />
    </div>
  );
}


function Animallist (props) {
 const animals = props.nameOfAnimal;
 const listOfAnimal = animals.map(animals => <ul>{animals}</ul>)
return(
  <div className="list-Animal">
   <table>
   <td>
     {listOfAnimal}
   </td>
   </table>
  </div>
)
}