import React from 'react'
import Card from '../components/Card'
import './Projects.css'
const hadleClick = (url: any) => {
     location.href = url;
}
const Projects = () => {
     const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil labore omnis alias nulla laboriosam aspernatur quas non saepe quia similique!'
     return (
          <>
               <h1 className='heading'>PROJECTS</h1>
               <ul className="auto-grid">
                    <li onClick={() => hadleClick('https://sleepy-fjord-15164.herokuapp.com/')} > <Card title={'Weather App'} img={require('../images/weather-app-project.png')} content={text} /></li>
                    <li> <Card title={'Project2'} img={require('../images/bg-3.jpg')} content={text} /></li>
                    <li> <Card title={'Project3'} img={require('../images/bg-4.jpg')} content={text} /></li>
                    <li> <Card title={'Project4'} img={require('../images/bg-10.jpg')} content={text} /></li>
                    <li> <Card title={'Project5'} img={require('../images/bg-5.jpg')} content={text} /></li>
                    <li> <Card title={'Project6'} img={require('../images/bg-7.jpg')} content={text} /></li>
                    <li> <Card title={'Project7'} img={require('../images/bg-11.jpg')} content={text} /></li>
               </ul>
          </>
     )
}

export default Projects