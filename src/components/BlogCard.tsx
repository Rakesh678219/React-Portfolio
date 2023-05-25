import React from 'react'
import Button from './Button'
import './BlogCard.css'
const BlogCard = (props: any) => {
     return (
          <div className="blog-card-container">
               <img width="100%" src={props.img} alt="" />
               <small>By <strong className="created-by">{props.createdBy}</strong> | {props.createdAt}</small>
               <h3 className="sub-heading">{props.title}</h3>
               <p className="text-content">{props.content}</p>
               <Button title={'Read more...'} />
          </div>
     )
}

export default BlogCard