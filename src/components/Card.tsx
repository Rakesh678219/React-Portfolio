import React from 'react'
import Button from './Button'
import './Card.css'

function URL(url: any) {
  if (url) {
    location.href = url
  }
}

const Card = (props: any) => {
  return (
    <>
      <div className="card-container">
        <h3 className="sub-heading">{props.title}</h3>
        <img
          style={{ borderRadius: '10px' }}
          width="100%"
          height="143px"
          src={props.img}
          alt=""
        />
        <p className="text-content">
          {props.content.substring(0, 120) + '...'}
        </p>
        <Button title={'open'} onClick={props.onClick} />
      </div>
    </>
  )
}

export default Card
