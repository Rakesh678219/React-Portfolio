import React from 'react'
import { useNavigate } from 'react-router-dom'
import LongButton from '../components/LongButton'
import './ErrorPage.css'
const ErrorPage = () => {
     const navigate = useNavigate()
     return (
          <>
               <div className="error-container">
                    <div className="error-gif">
                         <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
                    </div>
                    <div className="error-content">
                         <h1 className="error-main-heading">This page is gone.</h1>
                         <p>...maybe the page you're looking for is not found or never existed.</p>

                         <LongButton title={"Back to home"} onClick={() => navigate("/")}>

                         </LongButton>
                    </div>
               </div>
          </>

     )
}

export default ErrorPage