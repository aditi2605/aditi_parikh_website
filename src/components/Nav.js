import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// React Components
import About from './About';
// import Skills from './Skills';
import TechStack from './TechStack';
import Projects from './Projects';
import Timeline from './Timeline';
import Hobby from './Hobby';
import ScrollToTopBtn from './ScrollToTopBtn';
import Languages from './Languages';
import resume from '../../src/Aditi_Parikh_-_Full_Stack_Developer.pdf'
// React-Icons
import { FaBars } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiDownload } from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'

       
function Nav() {

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    

  return (
        <> 
            <header>
                <nav className="navbar">
                    <div className="navContainer">
                        <div className="brandLogo">
                            <h2>Aditi Parikh</h2>
                        </div>
                        <div className='responsiveBar' onClick={handleShowNavbar}>
                            <FaBars />
                        </div>
                                        
                    </div>
                    <div className={`navElements ${showNavbar && 'active'}`}>
                        <ul>
                            <li ><Link to='' onClick={() => window.location = 'mailto:aditi.parikh0526@gmail.com'}><span className='mail-icon'><FiMail /></span></Link></li>   
                            <li><Link  to={resume} download="resume" target="_blank" rel="noreferrer"><span className='download-icon'><FiDownload/></span></Link></li>
                            <li><Link to='https://www.linkedin.com/in/aditi-parikh05/'> <span className='linkedin-icon'><FaLinkedinIn /></span></Link></li>
                            <li><Link to='https://github.com/aditi2605'>
                            <span className='github-icon'><AiFillGithub /></span></Link></li>
                        </ul>
                    </div>
                </nav>
                </header>
              
                 {/* scroll bottom to top btn */}
                 <ScrollToTopBtn />
            {/* other section */}
                <About />
                <Timeline />
                {/* <Skills /> */}
                <TechStack />
                <Projects />
                <Languages />
                <Hobby />
                  
        </>
    )
}

export default Nav
