import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// React Components
import About from './About';
import MyJourney from './MyJourney';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import Lamp from '../images/Picture1.png'
import resume from '../../src/Aditi_Parikh_-_Full_Stack_Developer.pdf'
// React-Icons
// import { FaBars } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiDownload } from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import { BsFillSunFill, BsMoonFill} from 'react-icons/bs'



       
function Nav() {

       // dark/light theme mode btn
       const [icon, setIcon] = useState(false);
   
       const changeTheme = () => {
           if (icon === false){
               setIcon(true); 
               document.body.style.backgroundColor = "white"; 
               document.body.style.color = "#22223B";
             
           } else {
               setIcon(false);
               document.body.style.backgroundColor = "#22223B";
               document.body.style.color = "#f8f8ff";  
           }
       }


    // show social icons onscrollY 400
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect (() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowNavbar(true)
            } else {
                setShowNavbar(false)
            }
            
        });
    },[]);

  
 


  return (
        <> 
            <nav className='navbar' >
                <div className="navContainer">
                    <div className="brandLogo">
                        <img className='wallhanging' src={Lamp} alt='lamp' />
                    </div>
                    <div className={'theme-mode-section'}>
                        <div className='theme' onClick={changeTheme} >
                            {icon ? <BsMoonFill />: <BsFillSunFill />}
                        </div>
                    </div>                    
                </div>
                <div className='navElements'>
                    {   showNavbar && (
                        <ul>
                            <li ><Link to='' onClick={() => window.location = 'mailto:aditi.parikh0526@gmail.com'}><span className='mail-icon'><FiMail /><span class="tooltiptext">Email</span></span></Link></li>   
                            <li><Link  to={resume} download="resume" target="_blank" rel="noreferrer"><span className='download-icon'><FiDownload/><span class="tooltiptext">CV</span></span></Link></li>
                            <li><Link to='https://www.linkedin.com/in/aditi-parikh05/'> <span className='linkedin-icon'><FaLinkedinIn /><span class="tooltiptext">Linkedin</span></span></Link></li>
                            <li><Link to='https://github.com/aditi2605'>
                            <span className='github-icon'><AiFillGithub /><span class="tooltiptext">Github</span></span></Link></li>
                        </ul>
                    )}
                </div>
            </nav> 

            {/* other section */}
            <About />
            <MyJourney />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Nav