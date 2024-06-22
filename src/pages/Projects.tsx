import React from 'react'
import Card from '../components/Card' // Assuming Card component structure
import './Projects.css' // CSS for Projects component

const handleClick = (url: any) => {
  window.location.href = url // Function for handling click and navigating to URLs
}

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="header">
        <h1 className="heading">Projects</h1>
        {/* Dropdown for selecting project category */}
        <div className="dropdown-container">
          <select className="custom-dropdown">
            <option value="all">All Projects</option>
            <option value="html">HTML Projects</option>
            <option value="css">CSS Projects</option>
            <option value="js">JavaScript Projects</option>
            <option value="react">React Projects</option>
          </select>
        </div>
      </div>
      <ul className="auto-grid">
        <li
          onClick={() =>
            handleClick('https://sleepy-fjord-15164.herokuapp.com/')
          }
        >
          <Card
            title={'Weather App'}
            img={require('../images/weather-app-project.png')}
            content={
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'
            }
          />
        </li>
        <li
          onClick={() =>
            handleClick('https://codesandbox.io/s/basic-parallax-2gh2de/')
          }
        >
          <Card
            title={'Basic Parallax'}
            img={require('../images/parallax-project.png')}
            content={
              'In this Project, parallax concept is applied. Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling.'
            }
          />
        </li>
        <li
          onClick={() =>
            handleClick('https://codesandbox.io/s/flexbox-elzbbh/')
          }
        >
          <Card
            title={'Flexbox'}
            img={require('../images/flexbox-project.png')}
            content={
              'Flexbox is a one-dimensional layout system that we can use to create a row or a column axis layout. It makes our life easier to design and build responsive web pages without having to use tricky hacks and a lot of float and position properties in our CSS code.'
            }
          />
        </li>
        <li
          onClick={() =>
            handleClick('https://codesandbox.io/s/neon-button-x722my/')
          }
        >
          <Card
            title={'Neon Button'}
            img={require('../images/neonbutton-project.png')}
            content={
              'In this, a glowing neon button is created with pure HTML and CSS.'
            }
          />
        </li>
        <li
          onClick={() =>
            handleClick(
              'https://codesandbox.io/s/expanding-cards-effect-spb4gw/'
            )
          }
        >
          <Card
            title={'Expanding Cards'}
            img={require('../images/expanding-cards-project.png')}
            content={
              'In this, an expanding cards effect is created. When we click a certain card, it expands and minimizes the other cards.'
            }
          />
        </li>
        <li
          onClick={() =>
            handleClick('https://codesandbox.io/s/responsive-navbar-2jd01e/')
          }
        >
          <Card
            title={'Responsive Navbar'}
            img={require('../images/responsive-navbar-project.png')}
            content={
              'Building a responsive navigation bar is an essential part of improving your user experience and web design skills. In this project, a responsive navigation bar is built using only HTML and CSS and a little bit of JavaScript.'
            }
          />
        </li>
        <li>
          <Card
            title={'Project7'}
            img={require('../images/bg-11.jpg')}
            content={
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit fugiat iste repellendus nesciunt culpa veritatis earum maxime, eum assumenda quisquam. ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, harum! Odit, assumenda maxime ab eaque inventore cupiditate non nam recusandae eligendi blanditiis aliquam officia architecto?'
            }
          />
        </li>
        {/* Add more projects as needed */}
      </ul>
    </div>
  )
}

export default Projects
