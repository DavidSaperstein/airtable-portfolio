import React from 'react'
import {Link} from 'react-scroll'

import me from './assets/Me.jpg'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='links-and-me'>
        <Link activeClass='active' to='about' spy={true} smooth={true}>
          <h2>About</h2>
        </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true}>
          <h2>Skills</h2>
        </Link>
        <img src={me} alt={'Me'} className='me'/>
        <Link activeClass='active' to='projects-section' spy={true} smooth={true}>
          <h2>Projects</h2>
        </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true}>
          <h2>Contact</h2>
        </Link>
      </div>
    </div>
  )
}

export default Header