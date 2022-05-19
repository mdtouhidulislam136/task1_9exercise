import React from 'react'
import data from '../data.json'
import './exercise.css';


export default function Exercise8() {
  return (
    <div>
      <Data/>
    </div>
  )
}


function Data () {
return (
  <div className=" data">
      {
        data.map(data => {
          return (
            <div className="text-data">
              <h1>{data.setup}</h1>
              <h5>{data.punchline}</h5>
            </div>
          )
        })
      }
  </div>
)
  
}
