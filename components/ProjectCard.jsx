import React from 'react'
import Paragraph from "./Paragraph"
function ProjectCard({link,type,image, description}) {
  return (
    <>
   <div className="project-card">
    <div className="project-image">
        <img src={image} alt="" />
    </div>
    <div className="project-description">
       <h3 className="project-link">Project Link: <a href={link}>Watch </a> </h3>
        <p className="project-description">
        Project Type: {type} <br />
        Project Description : {description}
        </p>

    
    </div>
   </div>
    </>
  )
}

export default ProjectCard