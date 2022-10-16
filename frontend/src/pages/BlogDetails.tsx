import React from 'react'

import { useLocation, useParams } from 'react-router-dom'
const BlogDetails = () => {
     const { id } = useParams();
     const { state } = useLocation();
     const { title } = state;
     return (
          <div>
               <h3>title : {title}</h3>
               <h3>Blog Details for : {id}</h3>

          </div>
     )
}

export default BlogDetails