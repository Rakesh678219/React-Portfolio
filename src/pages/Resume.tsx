import React from 'react'
import './Resume.css'
const Resume = () => {
     return (
          <>
               <div >
                    <h1 className='heading'>Check My Resume </h1>
                    <div className='resume-page'>
                         <div className="outline">
                              {/* <div className="top">
                                   <div className="name">
                                        <div className="nametxt">Rakesh Peddamallu</div>
                                   </div>
                                   <div className="occupation">WEB GRAPHIC DESIGNER</div>
                              </div> */}
                              <div className="main">
                                   <div className="left">
                                        <div className="myPhoto" />
                                        <div className="lbox personal">
                                             <h4>PERSONAL</h4>
                                             <ul className="list">
                                                  <li>
                                                       <span className="listL">Name</span>
                                                       <span className="listR">Rakesh Peddamallu</span>
                                                  </li>
                                                  <li>
                                                       <span className="listL">Birthday</span>
                                                       <span className="listR">5th of December</span>
                                                  </li>
                                                  <li>
                                                       <span className="listL">Nationality</span>
                                                       <span className="listR">Indian</span>
                                                  </li>
                                                  <li>
                                                       <span className="listL">Languages</span>
                                                       <span className="listR">English, Telugu</span>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="lbox contact">
                                             <h4>CONTACT</h4>
                                             <ul className="list">
                                                  <li>
                                                       <span className="listL mobile">Mobile</span>
                                                       <span className="listR">6303665574</span>
                                                  </li>
                                                  <li>
                                                       <span className="listL home">Home</span>
                                                       <span className="listR">002-1234***</span>
                                                  </li>
                                                  <li>
                                                       <span className="listL email">Email</span>
                                                       <span className="listR">rose.bid@rose****</span>
                                                  </li>
                                                  <li>
                                                       <span className="listL skype">Skype</span>
                                                       <span className="listR">ddea*****</span>
                                                  </li>
                                                  <li>
                                                       <span className="listL add">Address</span>
                                                       <span className="listR">Pulivendula Town , Andhra Pradesh</span>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="lbox links">
                                             <h4>LINKS</h4>
                                             <ul className="list">
                                                  <li>
                                                       <a href="#">
                                                            <span className="linkL fb">www.facebook.com</span>
                                                            <span className="linkR">/dearblythe</span>
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <span className="linkL tw">twitter.com</span>
                                                            <span className="linkR">/dearblythe</span>
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <span className="linkL ig">www.instagram.com</span>
                                                            <span className="linkR">/dearblythe</span>
                                                       </a>
                                                  </li>
                                                  <li>
                                                       <a href="#">
                                                            <span className="linkL google">www.google.com</span>
                                                            <span className="linkR">/dearblythe</span>
                                                       </a>
                                                  </li>
                                                  {/* <li>
                                                       <a href="#">
                                                            <span className="linkL pin">www.pinterest.com</span>
                                                            <span className="linkR">/dearblythe</span>
                                                       </a>
                                                  </li> */}
                                             </ul>
                                        </div>
                                   </div>
                                   {/*     Right */}
                                   <div className="right">
                                        {/*       PROFILE */}
                                        <div className="profile">
                                             <h4>PROFILE</h4>
                                             <div className="content">
                                                  vit untiatqui ut faccabo repudis apernate la cusam quate simus maionse
                                                  quatur sunt ad qui natet quunt am hicae maxim rem voluptatur
                                             </div>
                                             <div className="subtitle">SPECIALTIES</div>
                                             <div className="chart">
                                                  <div className="pie pie_1">
                                                       <span className="square square1" />
                                                       <span className="square square0" />
                                                       <span className="pie_txt">Interaction Design</span>
                                                  </div>
                                                  <div className="pie pie_2">
                                                       <span className="square square1" />
                                                       <span className="pie_txt">Visual Design</span>
                                                  </div>
                                                  <div className="pie pie_3">
                                                       <span className="square square1" />
                                                       <span className="square square2" />
                                                       <span className="pie_txt">Heuristic Design</span>
                                                  </div>
                                                  <div className="pie pie_4">
                                                       <span className="square square1" />
                                                       <span className="square square3" />
                                                       <span className="pie_txt">
                                                            A/B <br />
                                                            Testing
                                                       </span>
                                                  </div>
                                                  <div className="pie pie_5">
                                                       <span className="square square1" />
                                                       <span className="square square4" />
                                                       <span className="pie_txt">Design Strategy</span>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* WORK */}
                                        <div className="work">
                                             <h4>WORK</h4>
                                             <div className="even">
                                                  <div className="year">2017</div>
                                                  <div className="arr" />
                                                  <div className="data">
                                                       <h6>
                                                            <div className="point" />
                                                            DESIGN DIRECTOR
                                                       </h6>
                                                       <p>
                                                            faccabo repudis apernate la cusam quate simus maionse quatur sunt
                                                            ad qui natet quunt am hicae maxim rem voluptatur
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="even">
                                                  <div className="year">2012</div>
                                                  <div className="arr" />
                                                  <div className="data">
                                                       <h6>
                                                            <div className="point" />
                                                            SENIOR DESIGNER
                                                       </h6>
                                                       <p>
                                                            vit untiatqui ut faccabo repudis apernate la cusam quate simus
                                                            maionse quatur sunt ad qui natet quunt am hicae maxim rem
                                                            voluptatur Lor
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="even">
                                                  <div className="year">2010</div>
                                                  <div className="arr" />
                                                  <div className="data">
                                                       <h6>
                                                            <div className="point" />
                                                            DESIGNER
                                                       </h6>
                                                       <p>
                                                            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
                                                            velit auctor aliquet.Aenean sollicitudin, lorem qzuis bibendum
                                                            auctor
                                                       </p>
                                                  </div>
                                             </div>
                                             <div className="histogram">
                                                  <span className="linechart chart_1" />
                                                  <span className="linechart chart_2" />
                                                  <span className="linechart chart_3" />
                                                  <span className="linechart chart_4" />
                                                  <span className="linechart chart_5" />
                                             </div>
                                             <div className="junior">
                                                  <div className="jtop">Junior Art Director:</div>
                                                  <div className="jbottom">
                                                       This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
                                                       velit auctor aliquet. Aenean sollicitudin, lorem qzuis bibendum
                                                       auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                                                       Duisodio
                                                  </div>
                                             </div>
                                             <div className="bar_box">
                                                  <div className="bar" />
                                             </div>
                                             <div className="bar_txt">50 / 80</div>
                                             <div className="dot_box">
                                                  <div className="dot dot_1" />
                                                  <div className="dot dot_2" />
                                                  <div className="dot dot_3" />
                                                  <div className="dot dot_4" />
                                                  <div className="dot dot_5" />
                                             </div>
                                        </div>
                                        {/* SOFTWARW */}
                                        <div className="softwarw">
                                             <h4>SOFTWARW</h4>
                                             <div className="soft_left">
                                                  <div className="skill skill_1">
                                                       <div className="softName">Adobe Photoshop</div>
                                                       <div className="softBar_bg">
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar" />
                                                            <div className="softBar" />
                                                       </div>
                                                  </div>
                                                  <div className="skill skill_3">
                                                       <div className="softName">Adobe Illustrator</div>
                                                       <div className="softBar_bg">
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar" />
                                                            <div className="softBar" />
                                                       </div>
                                                  </div>
                                                  <div className="skill skill_5">
                                                       <div className="softName">Adobe Flash</div>
                                                       <div className="softBar_bg">
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar" />
                                                       </div>
                                                  </div>
                                                  <div className="skill skill_7">
                                                       <div className="softName">Adobe Fireworks</div>
                                                       <div className="softBar_bg">
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar" />
                                                       </div>
                                                  </div>
                                             </div>
                                             {/*          */}
                                             <div className="soft_right">
                                                  <div className="skill skill_2">
                                                       <div className="softName">Adobe Dreamweaver</div>
                                                       <div className="softBar_bg">
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar" />
                                                       </div>
                                                  </div>
                                                  <div className="skill skill_4">
                                                       <div className="softName">HTML5</div>
                                                       <div className="softBar_bg">
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar" />
                                                       </div>
                                                  </div>
                                                  <div className="skill skill_6">
                                                       <div className="softName">CSS3</div>
                                                       <div className="softBar_bg">
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar black" />
                                                            <div className="softBar" />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        {/* HOBBIES */}
                                        <div className="hobbies">
                                             <h4>HOBBIES</h4>
                                             <div className="hobb hobb_2">
                                                  <div className="hobb_icon" />
                                                  <div className="hobb_txt">MOVIES</div>
                                             </div>
                                             <div className="hobb hobb_3">
                                                  <div className="hobb_icon" />
                                                  <div className="hobb_txt">TV SERIES</div>
                                             </div>
                                             <div className="hobb hobb_4">
                                                  <div className="hobb_icon" />
                                                  <div className="hobb_txt">READING</div>
                                             </div>
                                             <div className="hobb hobb_6">
                                                  <div className="hobb_icon" />
                                                  <div className="hobb_txt">GAMING</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="bottom" />
                         </div>

                    </div>
               </div>
          </>
     )
}

export default Resume