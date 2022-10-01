import React from 'react'
import Card from '../components/Card'
import './Projects.css'
const hadleClick = (url: any) => {
     location.href = url;
}
const Projects = () => {
     return (
          <>
               <h1 className='heading'>Projects</h1>
               <ul className="auto-grid">
                    <li onClick={() => hadleClick('https://sleepy-fjord-15164.herokuapp.com/')} > <Card title={'Weather App'} img={'/weather-app-project.png'} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project2'} img={require('../images/bg-3.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project3'} img={require('../images/bg-4.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project4'} img={require('../images/bg-10.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project5'} img={require('../images/bg-11.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project5'} img={require('../images/bg-11.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
                    <li> <Card title={'Project5'} img={require('../images/bg-11.jpg')} content={'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'} /></li>
               </ul>
          </>
     )
}

export default Projects