import React from 'react'

import {projectsData} from './data/data.js'

import ProjectCard from './ProjectCard'

import cssLogo from './assets/css3.png'
import expressLogo from './assets/express.png'
import githubLogo from './assets/github.png'
import htmlLogo from './assets/html5.png'
import javascriptLogo from './assets/javascript.png'
import mongodbLogo from './assets/mongodb.png'
import nodeLogo from './assets/node-js.png'
import reactLogo from './assets/react.png'
import vscodeLogo from './assets/vscode.png'


const Main = (props) => {

  const { id, desktop_img, mobile_img, description, url, repo, display_date, in_progress, contributor, project_id } = props.projects
  const { skills, projects } = props

  
  return (
    <div className='main-container'>
      <div id='about' className="section-container about">
        <h1 className='name'>David Saperstein</h1>
        <h2>Full Stack Developer</h2>
        <p>Diving into the exciting world of development where we create things together and nobody knows why they work! I'm here to learn how many things I don't know with the motivation to learn them.  I'm a determined puzzle-solver that loves to find answers and ask more questions.</p>
        <p>When not coding, I can be found at your local game store playing Magic: the Gathering or some board games.  I have an endless list of fantasy novel recommendations and will tell you all of them if you ask.  If I'm not doing those things, I'm probably selling geek themed bathbombs at local conventions.</p>
      </div>

      <div id='skills' className='section-container skills'>
        <h1 className='headers'>&lt; Skills &gt;</h1>
        <div className='skills-container'>
          {skills.map(skill => {
            return <img src={skill.icon} alt={skill.skill}/>
          })}
        </div>

        <div className='sub-skills-container'>
          <div className='languages-container'>
            <h1 className='sub-headers'>Languages</h1>
            <div className='lists'>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
            </div>
          </div>

          <div className='frameworks-container'>
            <h1 className='sub-headers'>Frameworks</h1>
            <div className='lists'>
              <p>React.js</p>
              <p>Node.js</p>
            </div>
          </div>

          <div className='databases-container'>
            <h1 className='sub-headers'>Databases</h1>
            <div className='lists'>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      
      <div id='projects' className='section-container projects-section'>
        <h1 className='headers'>&lt; Projects &gt;</h1>
        <div className='projects-container'>
          {projects.length > 0 && projects?.map(project => {
            return (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                desktopImg={project.desktop_img}
                mobileImg={project.mobile_img}
                url={project.url}
                repo={project.repo}
              />
            )
          })}
        </div>
      </div>
        
      <div id='contact' className='section-container contact'>
        <h1 className='headers'>&lt; Contact &gt;</h1>
        <div className='contact-info'>
          <p>d.h.saperstein@gmail.com</p>
          <p>954-696-8620</p>
          <p>Salt Lake City, UT</p>
        </div>
      </div>
    </div>
  )
}

export default Main