import React from 'react'
import './LongButton.css'
const LongButton = (props: any) => {
     return (
          <div className="long-btn">
               <button onClick={() => props.onClick()}>{props.title}</button>
          </div>
     )
}

export default LongButton