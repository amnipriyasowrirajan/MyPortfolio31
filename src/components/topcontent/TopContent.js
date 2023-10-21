import React from 'react'
import './TopContent.css'
import { Link } from 'react-scroll'
import resume from  '../../assets/images/amni.pdf'

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent_container'>
            <h1>Hi,I am Amnipriya Sowrirajan</h1>
            <h3>Full-stack Web Developer</h3>
            <a href={resume} download="Resume">
               <button className='topcontent_downloadbutton'>Download Resume</button> 
            </a>
            <Link to='projects' smooth={true} duration={500}>
                <button className='topContent_workbutton'>My Work</button>
            </Link>

        </div>
      
    </div>
  )
}

export default TopContent
