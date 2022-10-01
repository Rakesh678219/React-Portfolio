import React from 'react'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 43ca7bf (moved all to frontend folder)
import Card from '../components/Card'
import './Projects.css'
const hadleClick = (url: any) => {
     location.href = url;
}
const Projects = () => {
<<<<<<< HEAD
     const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil labore omnis alias nulla laboriosam aspernatur quas non saepe quia similique!'
     const navigate = useNavigate()
     return (
          <>
               <h1 className='heading'>PROJECTS</h1>
               <ul className="auto-grid">
                    {/* 'https://sleepy-fjord-15164.herokuapp.com/' */}
                    <li> <Card title={'Weather App'} img={require('../images/weather-app-project.png')} content={text} onClick={() => navigate("/projects/1")} /></li>
                    <li> <Card title={'Project2'} img={require('../images/bg-3.jpg')} content={text} onClick={() => navigate("/projects/2")} /></li>
                    <li> <Card title={'Project3'} img={require('../images/bg-4.jpg')} content={text} onClick={() => navigate("/projects/3")} /></li>
                    <li> <Card title={'Project4'} img={require('../images/bg-10.jpg')} content={text} onClick={() => navigate("/projects/4")} /></li>
                    <li> <Card title={'Project5'} img={require('../images/bg-5.jpg')} content={text} onClick={() => navigate("/projects/5")} /></li>
                    <li> <Card title={'Project6'} img={require('../images/bg-7.jpg')} content={text} onClick={() => navigate("/projects/6")} /></li>
                    <li> <Card title={'Project7'} img={require('../images/bg-11.jpg')} content={text} onClick={() => navigate("/projects/7")} /></li>
=======
     return (
          <>
               <h1 className='heading'>Projects</h1>
               <ul className="auto-grid">
                    <li onClick={() => hadleClick('https://sleepy-fjord-15164.herokuapp.com/')} > <Card title={'Weather App'} img={require('../images/weather-app-project.png')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project2'} img={require('../images/bg-3.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project3'} img={require('../images/bg-4.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project4'} img={require('../images/bg-10.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project5'} img={require('../images/bg-5.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project6'} img={require('../images/bg-7.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project7'} img={require('../images/bg-11.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
>>>>>>> 43ca7bf (moved all to frontend folder)
               </ul>
          </>
     )
}

export default Projects