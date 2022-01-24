import React from 'react'

import cv from './assets/curriculum-vitae.png'
import linkedinLogo from './assets/linkedin.png'
import githubLogo from './assets/github.png'
import resume from './assets/resume.pdf'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sidebar-logos-container'>
        <a href='https://www.linkedin.com/in/david-saperstein-89422165/' target='_blank' rel='noreferrer'>
          <img src={linkedinLogo} alt={'linkedinLogo'} className='sidebar-logos'/>
        </a>
        <a href='https://github.com/DavidSaperstein' target='_blank' rel='noreferrer'>
          <img src={githubLogo} alt={'githubLogo'} className='sidebar-logos'/>
        </a>
        <a download href={resume}>
          <img src={cv} alt={'cv'} className='sidebar-logos'/>
        </a>
      </div>
    </div>
  )
}

export default Footer