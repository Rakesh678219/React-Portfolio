import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import './Home.css'
const Home = () => {
     let navigate = useNavigate()
     return (
          <>
               <div className='home-page'>
                    {/* <div className='my-details'>
                         <h1>Hello, I’m Rakesh Peddamallu</h1>
                         <p>
                              Professional web developer based in Bangalore
                         </p>
                         <Button onClick={() => navigate("/contact")} title={'Hire me'}  ></Button>
                    </div> */}
               </div>
               <div className='about-me-page'>

                    <div className='split-div split-div1'>

                    </div>
                    <div className='split-div split-div2'>
                         <h1>
                              Heading
                         </h1>
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias nihil, nobis odit, obcaecati dolorum nulla totam temporibus soluta dolorem quo. Ipsam facilis et cupiditate corrupti sit impedit aperiam pariatur minus! Dolore libero nisi minima porro obcaecati, maiores exercitationem nostrum facilis est voluptatem magni sint? Perferendis, et. Provident, ad, facere deleniti dolore consequatur quis exercitationem accusamus earum, ipsam magni error labore ratione omnis minus! Corrupti tempore optio esse, nesciunt iste laboriosam ad ipsa voluptatibus in distinctio unde quasi facere commodi? Laborum, praesentium ratione provident repudiandae optio ad ut, reprehenderit in iure ducimus impedit. Aut inventore a error quasi minima quod quisquam odit veritatis! Maxime consequatur illum repellat harum molestiae atque excepturi rem quo. Magnam optio repellat ex voluptatibus itaque quibusdam sapiente cum, aperiam tempore nisi officiis? Aut maxime dicta officiis distinctio ducimus ipsum consequuntur explicabo facere, cupiditate sed, voluptatum assumenda amet iste debitis fugiat? Voluptates tenetur totam tempora iure tempore porro sed dolore atque numquam quaerat quibusdam beatae rem laudantium harum molestias sequi suscipit, voluptatem voluptatum distinctio. Aliquam odit numquam unde, enim recusandae, voluptatum, iure quos nostrum error vel libero laudantium! Nisi, corporis laudantium quia sunt beatae dolorum! Vitae, nesciunt? Adipisci, repellendus enim saepe inventore exercitationem mollitia optio dolores laboriosam impedit iste excepturi quasi in quidem sapiente, accusantium harum suscipit architecto, nihil voluptatibus qui sequi minus. Praesentium exercitationem eum mollitia nostrum deleniti omnis rerum modi consectetur. Optio sequi inventore minus velit repellendus delectus officiis iste commodi recusandae fuga magnam dicta aliquam voluptatem, quos in fugit dolor maxime hic sit ipsum! Quibusdam ipsum aliquid repudiandae iusto, fuga quos minus in maxime harum veniam alias aut, dolorem vero laborum ducimus quo. Provident ex aspernatur quae fugit odio error doloribus, ea distinctio dolor. Maiores exercitationem, quasi quam molestias mollitia consequuntur at molestiae dicta asperiores dolores. Voluptatibus, maxime possimus quo modi iste asperiores aspernatur.
                         </p>
                    </div>


               </div>
          </>
     )
}

export default Home