import React from 'react'
import './Resume.css'
const Resume = () => {
     return (
          <>
               <div >
                    <h1 className='heading'>Check My Resume </h1>
                    <div className='resume-page'>
                         <>
                              <meta charSet="UTF-8" />
                              <meta
                                   name="viewport"
                                   content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                              />
                              <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                              <title>Responsive CV Beugin Morgane </title>
                              <link
                                   rel="stylesheet"
                                   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
                                   integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
                                   crossOrigin="anonymous"
                                   referrerPolicy="no-referrer"
                              />
                              <link rel="stylesheet" type="text/css" href="style.css" />
                              <link rel="stylesheet" type="text/css" href="css/data.css" />
                              <div className="container">
                                   <div className="left_Side">
                                        <div className="profileText">
                                             <div className="imgBx">
                                                  <img
                                                       className="photo"
                                                       src="https://media-exp1.licdn.com/dms/image/C5603AQHmODX27aRpeg/profile-displayphoto-shrink_800_800/0/1657626686762?e=1669852800&v=beta&t=u-wfRdF_0AqFA2CBolQhUhE6KOWkJOrUf89V1eiYTyg"
                                                  />
                                             </div>
                                             <br />
                                             <h2>
                                                  Rakesh Peddamallu <br />
                                                  <span>Software Engineer</span>{" "}
                                             </h2>
                                        </div>
                                        <div className="contactInfo">
                                             <h3 className="title">Contact Info</h3>
                                             <ul>
                                                  <li>
                                                       <span className="icon">
                                                            <i className="fa fa-phone" aria-hidden="true" />
                                                       </span>
                                                       <span className="text">
                                                            <a href="tel:6303665574">6303665574</a>
                                                       </span>
                                                  </li>
                                                  <li>
                                                       <span className="icon">
                                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                                       </span>
                                                       <span className="text">
                                                            <a href="mailto: rpeddamallu@juniper.net">
                                                                 rpeddamallu@juniper.net
                                                            </a>
                                                       </span>
                                                  </li>
                                                  <li>
                                                       <span className="icon">
                                                            <i className="fa fa-map-marker" aria-hidden="true" />
                                                       </span>
                                                       <span className="text">Bangalore, India</span>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="contactInfo education">
                                             <h3 className="title">Education</h3>
                                             <ul>
                                                  <li>
                                                       <h5>2021 - 2023</h5>
                                                       <br />
                                                       <h4>Web Bachelor CDUI</h4>
                                                       <h4>Lycée Saint Vincent de Paul, Le Havre</h4>
                                                       <br />
                                                  </li>
                                                  <li>
                                                       <h5>2018 - 2021</h5>
                                                       <br />
                                                       <h4>Baccalauréat Photographie</h4>
                                                       <h4>Lycée Saint Vincent de Paul, Le Havre</h4>
                                                       <br />
                                                  </li>
                                                  <li>
                                                       <h5>2016</h5>
                                                       <br />
                                                       <h4>Brevet des Collèges </h4>
                                                       <h4>Collège Théophile Gautier</h4>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="right_Side">
                                        <div className="about">
                                             <h2 className="title2">Experiences</h2>
                                             <div className="box">
                                                  <div className="year_company">
                                                       <h5>Present</h5>
                                                  </div>
                                                  <div className="text">
                                                       <h4>Desjardins - Hôtesse de caisse</h4>
                                                       <p>Encaissement, Mise en rayon, Emballage, Étiquetage. </p>
                                                       <br />
                                                  </div>
                                             </div>
                                             <div className="box">
                                                  <div className="year_company">
                                                       <h5>2021 </h5>
                                                  </div>
                                                  <div className="text">
                                                       <h4>Wow Concept Studio - Stage</h4>
                                                       <p>Prises de vues commerciales, Retouches de photos.</p>
                                                       <br />
                                                  </div>
                                             </div>
                                             <div className="box">
                                                  <div className="year_company">
                                                       <h5>2020</h5>
                                                  </div>
                                                  <div className="text">
                                                       <h4>Studio Ellipse - Stage</h4>
                                                       <p>Réalisation de photographies, Assitante shooting vidéo.</p>
                                                       <br />
                                                  </div>
                                             </div>
                                             <div className="box">
                                                  <div className="year_company">
                                                       <h5>2019</h5>
                                                  </div>
                                                  <div className="text">
                                                       <h4>Dominique Côté Photographie - Stage</h4>
                                                       <p>
                                                            Assistante studio, Shooting photo, Tenue d'un stand
                                                            photographique.
                                                       </p>
                                                       <br />
                                                  </div>
                                             </div>
                                             <div className="box">
                                                  <div className="year_company">
                                                       <h5>2016</h5>
                                                  </div>
                                                  <div className="box">
                                                       <div className="text">
                                                            <h4>Boulangerie Rolleville -</h4>
                                                            <p>Tenue d'une caisse, Mise en rayon, Encaissement.</p>
                                                            <br />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="about skills">
                                                  <h2 className="title2">Compétences</h2>
                                                  <div className="box">
                                                       <h4>Photoshop</h4>
                                                       <div className="percent">
                                                            <div className="htmlws30" />
                                                       </div>
                                                  </div>
                                                  <div className="box">
                                                       <h4>Lightroom</h4>
                                                       <div className="percent">
                                                            <div className="cssws45" />
                                                       </div>
                                                  </div>
                                                  <div className="box">
                                                       <h4>Indesign</h4>
                                                       <div className="percent">
                                                            <div className="jsws70" />
                                                       </div>
                                                  </div>
                                                  <div className="box">
                                                       <h4>Illustrator</h4>
                                                       <div className="percent">
                                                            <div className="phws40" />
                                                       </div>
                                                  </div>
                                                  <div className="box">
                                                       <h4>After Effect</h4>
                                                       <div className="percent">
                                                            <div className="ilws60" />
                                                       </div>
                                                  </div>
                                                  <div className="box">
                                                       <h4>Premiere Pro</h4>
                                                       <div className="percent">
                                                            <div className="adw70" />
                                                       </div>
                                                  </div>
                                                  <div className="box">
                                                       <h4>Vs code</h4>
                                                       <div className="percent">
                                                            <div className="adw80" />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="about interest">
                                                  <h2 className="title2">Loisirs</h2>
                                                  <ul>
                                                       <li>
                                                            <img
                                                                 className="imagebillard"
                                                                 src="https://zupimages.net/up/21/49/b1y7.png"
                                                                 alt="Billardimage"
                                                            />
                                                            Billard
                                                       </li>
                                                       <li>
                                                            <img
                                                                 className="horseimage"
                                                                 src="https://zupimages.net/up/21/49/4waa.png"
                                                                 alt="horseimage"
                                                            />{" "}
                                                            Equitation{" "}
                                                       </li>
                                                       <li>
                                                            <i className="fa fa-paw" aria-hidden="true" /> Animaux
                                                       </li>
                                                       <li>
                                                            <i className="fa fa-camera" aria-hidden="true" /> Photographie
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </>


                    </div>
               </div>
          </>
     )
}

export default Resume