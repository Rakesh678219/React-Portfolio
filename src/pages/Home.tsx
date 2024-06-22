import React from 'react'
import Button from '../components/Button'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="home-page">
        <div className="my-details">
          <h1>Hello, I’m Rakesh Peddamallu</h1>
          <p>Web developer based in Bangalore</p>
          <div className="button-container">
            <Button title="Hire me"></Button>
          </div>
        </div>
      </div>

      <div className="about-me-page">
        <div className="split-div">
          {/* <div className="split-div1"></div> */}
          <div className="split-div2">
            <div className="profile">
              <h1 className="name">About Me</h1>
              <p className="profession">
                As a software engineer with 1.5 years of experience in Juniper
                Networks, I have a keen eye for design and a strong
                understanding of user experience. I have worked on a variety of
                projects, from designing and implementing new features to
                troubleshooting and resolving issues. In my role as a frontend
                engineer, I am responsible for designing and implementing user
                interfaces that are intuitive, visually appealing, and easy to
                use. I work closely with the design team to ensure that the user
                experience is consistent across all platforms and devices.
              </p>

              <h1 className="name">Interests</h1>
              <p className="interest">
                Travel, Cooking, Art, Sports, Education, Technology, Health and
                Wellness, Personal Growth, Charity, Creativity.
              </p>

              <h1 className="name">Professional Skills</h1>
              <p className="profession-skills">
                HTML/CSS, JavaScript, React, Bootstrap, Responsive Design, User
                Interface Design, Accessibility, Performance Optimization,
                Cross-Browser Compatibility, Git.
              </p>

              <p className="values">[Your Values]</p>
              <p className="commitments">[Your Commitments]</p>
              <p className="strengths">
                Creative problem-solving skills, Excellent communication and
                collaboration abilities, Strong analytical and critical thinking
                skills, Excellent time management skills, Ability to work
                independently and in a team environment, Excellent attention to
                detail and accuracy, Strong leadership and teamwork abilities,
                Ability to work under pressure and meet tight deadlines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bubbles animation */}
      {/* <div className="bubbles">
        <img src="https://via.placeholder.com/50" alt="bubble" />
        <img src="https://via.placeholder.com/50" alt="bubble" />
        <img src="https://via.placeholder.com/50" alt="bubble" />
        <img src="https://via.placeholder.com/50" alt="bubble" />
        <img src="https://via.placeholder.com/50" alt="bubble" />
        <img src="https://via.placeholder.com/50" alt="bubble" />
        <img src="https://via.placeholder.com/50" alt="bubble" />
      </div> */}
    </>
  )
}

export default Home
