import React from 'react'
import BlogCard from '../components/BlogCard'
import Card from '../components/Card'
import './Blog.css'
const Blog = () => {
     return (
          <>
               <div className='blog-page'>
                    <h1>From the blog</h1>
                    <ul className="auto-grid-blog">
                         <li> <BlogCard title={'Project1'} img={'/bg1.jpg'} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} createdBy={'rakesh peddamallu'} createdAt={'October 25, 2018'} /></li>
                         <li> <BlogCard title={'Project1'} img={'/bg1.jpg'} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>

                         <li> <BlogCard title={'Project1'} img={'/bg1.jpg'} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>

                    </ul>
               </div>
          </>
     )
}

export default Blog