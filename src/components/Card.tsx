import React from 'react'
import Button from './Button'
import './Card.css'
const Card = (props: any) => {
     return (
          <>
               <div className="card-container">
                    <h1>{props.title}</h1>
                    <img width="100%" src={props.img} alt="" />
                    <p>{props.content}</p>
                    <Button title={'open'} />
               </div>
          </>

     )
}

export default Card