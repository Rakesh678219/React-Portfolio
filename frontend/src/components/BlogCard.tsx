import React from 'react'
import Button from './Button'
import './BlogCard.css'
import LongButton from './LongButton'
const BlogCard = (props: any) => {
     return (
          <div className="blog-card-container">
               <img src={props.img} alt="" loading="lazy" />
               <small>By <strong className="created-by">{props.createdBy}</strong> | {props.createdAt}</small>
               <h3 className="sub-heading">{props.title}</h3>
               <p className="text-content">{props.content}</p>
               <LongButton title={'Read More'} />
          </div>
     )
}

export default BlogCard