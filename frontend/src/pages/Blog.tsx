import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Card from '../components/Card'
import './Blog.css'
const Blog = () => {
     const text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil harum corporis eius nesciunt labore pariatur non velit sequi. Maxime quo quis dolorum exercitationem architecto consequatur accusantium assumenda? Quae, quam necessitatibus?'

     const navigate = useNavigate();
     return (
          <>
               <div className="progress-indicator-2"></div>
               <div className='blog-page'>
                    <h1 className='heading'>FROM THE BLOG</h1>
                    <ul className="auto-grid-blog">
                         <li> <BlogCard title={'Blog 1'} img={require('../images/test.jpg')} content={text} createdBy={'rakesh peddamallu'} createdAt={'October 25, 2018'} onClick={() => navigate("/blog/1")} /></li>
                         <li> <BlogCard title={'Blog 2'} img={require('../images/bg-7.jpg')} content={text} onClick={() => navigate("/blog/1")} /></li>
                         <li> <BlogCard title={'Blog 3'} img={require('../images/bg-11.jpg')} content={text} onClick={() => navigate("/blog/2")} /></li>
                         <li> <BlogCard title={'Blog 4'} img={require('../images/bg-3.jpg')} content={text} onClick={() => navigate("/blog/3")} /></li>
                         <li> <BlogCard title={'Blog 5'} img={require('../images/bg-5.jpg')} content={text} onClick={() => navigate("/blog/4")} /></li>
                         <li> <BlogCard title={'Blog 6'} img={require('../images/bg-7.jpg')} content={text} onClick={() => navigate("/blog/5")} /></li>
                    </ul>
               </div>
          </>
     )
}

export default Blog