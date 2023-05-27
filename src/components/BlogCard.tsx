import React from 'react'
import Button from './Button'
import './BlogCard.css'
const BlogCard = (props: any) => {
     return (
          <div className="blog-card-container">
               <img width="100%" src={props.img} alt="" />
               <small style={{color:"white"}}>By <strong className="created-by">{props.createdBy}</strong> | {props.createdAt}</small>
               <h3 className="sub-heading">{props.title}</h3>
               <p className="text-content">{props.content.substring(0, 200)+'...'}</p>
               <Button title={'Read more...'} />
          </div>
     )
}

export default BlogCard