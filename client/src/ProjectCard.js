import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='projects'>
      <a href={props.url} target="_blank" rel='noreferrer'>
        <h2>{props.title}</h2>
      </a>
      <a 
        className='screenshot-container' 
        href={props.url} 
        target="_blank" 
        rel='noreferrer'
        style={{background: `url(${props.desktopImg ? props.desktopImg : props.mobileImg})`}}
      />
      <div className="project-skills-container">
        {props.skills?.map(skill => (
          <img
            className="project-skill-icon"
            src={skill.icon}
            title={skill.skill}
            alt={skill.skill}
          />
        ))}
      </div>
      <p>{props.description}</p>
    </div>
  )
}

export default ProjectCard