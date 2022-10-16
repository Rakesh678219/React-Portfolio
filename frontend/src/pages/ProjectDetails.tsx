import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {

     const { id } = useParams();
     return (
          <div>
               <h1>ProjectDetails for : {id}</h1>
          </div>
     )
}

export default ProjectDetails