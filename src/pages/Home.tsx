import React from 'react'
import Button from '../components/Button'
import './Home.css'
const Home = () => {
     return (
          <>
               <div className='home-page'>
                    <div className='my-details'>
                         <h1>Hello, I’m Rakesh Peddamallu</h1>
                         <p>
                              Professional web developer based in Bangalore
                         </p>
                         <Button title={'Hire me'}></Button>
                    </div>
               </div>
               <div className='about-me-page'>

                    <div className='split-div split-div1'>

                    </div>
                    <div className='split-div split-div2'>
                         <h1>
                              About me
                         </h1>
                         <p>
                              Over the last 7 years, I've managed to grow from an amateur videographer filming weddings of my relatives to an acknowledged professional cooperating with world brands and fashion icons. Coca-Cola, Zadig & Voltaire, Tiffany & Co - these are just a few of those I have worked with.

                              Yet, event videography was embedded in my heart. Seeing and capturing true emotions at the most important people's occasions is what makes me truly love this profession.

                              I always strive to think outside the box. Looking at everyday things from a new perspective helps me find beauty even in the most ordinary things. Browse through my projects to understand what I'm talking about.
                         </p>
                    </div>


               </div>
          </>
     )
}

export default Home