import React from 'react'
import Button from './Button'
import './Card.css'

function URL(url: any) {
     if (url) {
          location.href = url;
     }
}


const Card = (props: any) => {
     return (
          <>
               <div className="card-container">
                    <h3>{props.title}</h3>
                    <img width="100%" src={props.img} alt="" />
                    <p>{props.content}</p>
                    <Button title={'open'} onClick={props.onClick} />
               </div>
          </>

     )
}

export default Card