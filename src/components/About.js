import React from 'react'
import myImg from '../images/myImg.jpg'
import { Link } from 'react-router-dom'
import {TbBrandHipchat} from 'react-icons/tb'
import TechStack from './TechStack'

function About() {
 
  return (
      <>
        <div className='section-1 fadeInUp-animation'>
                <div className='hero-main'>
                    <h1 className='hero-heading'> <span className="wave">👋</span> I' am Aditi. </h1>
                    <p className='hero-para'>I’am a Full-Stack Developer who is passionate about technology, learning new things and creating truly beautiful Websites and Softwares.</p>
                    <Link to='' className='hero-btn' onClick={() => window.location = 'mailto:aditi.parikh0526@gmail.com'}><span className='chat-icon'><TbBrandHipchat/></span>Let's Connect</Link>
                    <TechStack />        
                </div>
                <div className='hero-Img'>
                  <img className='main-img' src={myImg} alt='myImg' />
                </div> 
        </div>
      </>
  )
}

export default About

