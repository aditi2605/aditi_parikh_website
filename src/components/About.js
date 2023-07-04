import React from 'react'
import myImg from '../images/myimg.jpg'
// import { Link } from 'react-router-dom'
// import resume from '../../src/Aditi_Parikh_-_Full_Stack_Developer.pdf'
import {TbBrandHipchat} from 'react-icons/tb'

function About() {
 

  return (
    <>
        <div className='section-1 fadeInUp-animation'>
            <div className='hero-main'>
                <h1 className='hero-heading'> <span className="wave">👋</span> I'am Aditi Parikh. </h1>
                <span className='hero-subtitle'>Front-end Developer</span>
                <p className='hero-para'>1.5+ years of exprience in Web-Development. My mission is to design and develop a website's that help you and your business growth.</p>
                <button className='hero-btn' onClick={() => window.location = 'mailto:aditi.parikh0526@gmail.com'}><span className='chat-icon'><TbBrandHipchat/></span>Let's Connect</button>
                {/* <Link to='' className='hero-btn' onClick={() => window.location = 'mailto:aditi.parikh0526@gmail.com'}><span className='chat-icon'><TbBrandHipchat/></span>Let's Connect</Link> */}
                {/* <button className='hero-btn' onClick={() => window.location = 'mailto:aditi.parikh0526@gmail.com'} ><Link to='' ><span className='chat-icon'><TbBrandHipchat/></span></Link>Let's Connect</button> */}
            </div>
            <div className='hero-Img'>
                <img className='main-img' src={myImg} alt='myImg' />
            </div>   
        </div>
         <hr />

        </>
  )
}

export default About

