import React from 'react'
import BlogCard from '../components/BlogCard'
import Card from '../components/Card'
import './Blog.css'
const Blog = () => {
     return (
          <>
               <div className='blog-page'>
                    <h1 className='heading'>From the blog</h1>
                    <ul className="auto-grid-blog">
                         <li> <BlogCard title={'Blog 1'} img={require('../images/test.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} createdBy={'rakesh peddamallu'} createdAt={'October 25, 2018'} /></li>
                         <li> <BlogCard title={'Blog 2'} img={require('../images/bg-7.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                         <li> <BlogCard title={'Blog 3'} img={require('../images/bg-11.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                         <li> <BlogCard title={'Blog 3'} img={require('../images/bg-11.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                         <li> <BlogCard title={'Blog 3'} img={require('../images/bg-11.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                         <li> <BlogCard title={'Blog 2'} img={require('../images/bg-7.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    </ul>
               </div>
          </>
     )
}

export default Blog