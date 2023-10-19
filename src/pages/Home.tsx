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
          <Button title={'Hire me'}></Button>
        </div>
      </div>
      <div className="about-me-page">
        <div className="split-div split-div1"></div>
        <div className="split-div split-div2">
          <div className="profile">
            <h1 className="name">About me</h1>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '10px',
              }}
            >
              <img
                style={{
                  borderRadius: '10px',
                  marginTop: '50px',
                  marginRight: '50px',
                }}
                width={'30%'}
                src="https://media.licdn.com/dms/image/D5603AQHMVff0bRQrbg/profile-displayphoto-shrink_800_800/0/1681009155987?e=1703116800&v=beta&t=DaWGykViNobcM6M-1QZSgyGE1-4wuKCJUP0cn3sXEuE"
                alt=""
              />
              <p className="profession" style={{ marginTop: '50px' }}>
                As a software engineer with 2 years of experience in Juniper
                Networks, I have a keen eye for design and a strong
                understanding of user experience. I have worked on a variety of
                projects, from designing and implementing new features to
                troubleshooting and resolving issues. In my role as a frontend
                engineer, I am responsible for designing and implementing user
                interfaces that are intuitive, visually appealing, and easy to
                use. I work closely with the design team to ensure that the user
                experience is consistent across all platforms and devices. Some
                of the projects I have worked on include: Developing a new user
                interface for a network management tool that is intuitive and
                easy to navigate. Creating a new design for a mobile app that is
                visually appealing and easy to use on smaller screens. Fixing
                bugs and issues in existing software that are affecting the user
                experience. Conducting user research to gather feedback and
                insights on how to improve the user experience. Overall, my
                experience as a frontend engineer has taught me the importance
                of user experience and the value of designing intuitive and
                visually appealing interfaces. I am excited to continue working
                on projects that challenge me and push me to deliver
                high-quality work.
              </p>
            </div>

            <h1 className="name">Interests</h1>
            <p className="interest">
              Travel: Whether it's hiking in the mountains, exploring a new
              city, or simply visiting a foreign country, travel is a great way
              to broaden your horizons and experience new cultures. Cooking:
              Whether it's baking a new dish, experimenting with a new recipe,
              or simply trying something new, cooking is a passionate pursuit
              that allows you to express your creativity and share your love of
              food. Art: Whether it's painting, drawing, or simply watching an
              art exhibition, art is a creative outlet that allows you to
              express your imagination and share your love of art. Sports:
              Whether it's playing a sport you're passionate about, watching a
              game, or simply trying something new, sports is a great way to
              stay active and healthy, and to connect with others who share your
              interests. Education: Whether it's attending a university,
              pursuing a degree, or simply learning something new, education is
              a crucial aspect of life that allows you to grow and develop your
              skills and knowledge. Technology: Whether it's using a new gadget,
              programming a new device, or simply staying up-to-date with the
              latest trends, technology is a constantly evolving field that
              allows you to stay connected and informed. Health and Wellness:
              Whether it's going for a walk, meditating, or simply eating a
              healthy diet, health and wellness is a vital aspect of life that
              allows you to maintain a healthy body and mind. Personal Growth:
              Whether it's starting a new hobby, learning a new skill, or simply
              taking a break from work, personal growth is a crucial aspect of
              life that allows you to become a better version of yourself.
              Charity: Whether it's giving back to a charity organization,
              volunteering, or simply donating to a worthy cause, charity is a
              great way to make a positive impact on the world and inspire
              others to do the same. Creativity: Whether it's writing a book,
              creating a new product, or simply expressing your creativity
              through art or writing, creativity is a key aspect of life that
              allows you to express your unique talents and ideas.
            </p>
            <h1 className="name">Professional Skills</h1>
            <p className="profession-skills">
              HTML/CSS: Proficient in creating and designing web pages using
              HTML and CSS. JavaScript: Experienced in writing and debugging
              JavaScript code for interactive web pages. React: Knowledgeable in
              using React.js to build complex user interfaces. Bootstrap:
              Familiar with the popular front-end framework for building
              responsive and mobile-first websites. Responsive Design: Skilled
              in creating responsive web designs that work well on different
              devices and screen sizes. User Interface Design: Experienced in
              designing user interfaces that are intuitive, easy to use, and
              visually appealing. Accessibility: Knowledgeable in creating
              accessible web designs that are usable by people with
              disabilities. Performance Optimization: Skilled in optimizing web
              pages for speed and performance to ensure a smooth user
              experience. Cross-Browser Compatibility: Proficient in testing web
              pages across different browsers to ensure compatibility and ensure
              a consistent user experience. Git: Familiar with Git version
              control system for collaborating with other developers and
              managing code changes.
            </p>
            <p className="values">[Your Values]</p>
            <p className="commitments">[Your Commitments]</p>
            <p className="strengths">
              Creative problem-solving skills Excellent communication and
              collaboration abilities Strong analytical and critical thinking
              skills Excellent time management skills Ability to work
              independently and in a team environment Excellent attention to
              detail and accuracy Strong leadership and teamwork abilities
              Excellent time management skills Ability to work under pressure
              and meet tight deadlines Excellent time management skills and
              ability to prioritize tasks.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
