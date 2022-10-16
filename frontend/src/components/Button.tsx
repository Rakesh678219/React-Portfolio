import React from 'react'
import './Button.css'
const Button = (props: any) => {
     return (
          <div className="wrap">
               <button onClick={() => props.onClick()} className="button">{props.title} </button>
          </div>
     )
}

export default Button