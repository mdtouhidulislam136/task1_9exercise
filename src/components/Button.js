import React from 'react';


export default function Button(props) {

  return (
    <div>
        <button className="button" onClick={() => {alert(props.output)}}>{props.button}</button>
    </div>
  )
}
