import React from 'react'
// react Icons
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { BiLogoReact,BiLogoVuejs } from 'react-icons/bi';
import { FaPython, FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiExpress } from 'react-icons/si'
// import Skills from './Skills';

function TechStack() {
  return (
        <>
        <div className='skill-hexa-card'>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                            <span className='icons'>< AiFillHtml5/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>HTML5</p> 
                            <p className='hexa-flip-card-back-p'>2 Yr<br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                        <span className='icons'><IoLogoCss3/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>CSS3</p> 
                            <p className='hexa-flip-card-back-p'>2 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                            <span className='icons'><IoLogoJavascript/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>JS</p> 
                            <p className='hexa-flip-card-back-p'>2 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                            <span className='icons'><SiExpress/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>Ex.JS</p> 
                            <p className='hexa-flip-card-back-p'>1 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                        <span className='icons'><FaNodeJs/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>NodeJS</p> 
                            <p className='hexa-flip-card-back-p'>1 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skill-hexa-card'>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                            <span className='icons'><BiLogoReact/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>React</p> 
                            <p className='hexa-flip-card-back-p'>2 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                            <span className='icons'><BiLogoVuejs/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>VueJS</p> 
                            <p className='hexa-flip-card-back-p'>1 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                            <span className='icons'>< FaPython/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>Python</p> 
                            <p className='hexa-flip-card-back-p'>1 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                            <span className='icons'>< SiMongodb/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>Mongo<br />DB</p> 
                            <p className='hexa-flip-card-back-p'>1 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
                <div className="hexa-flip-card">
                    <div className="hexa-flip-card-inner">
                        <div className="hexa-flip-card-front">
                        <span className='icons'><SiMysql/></span>
                        </div>
                        <div className="hexa-flip-card-back">
                            <p className='hexa-flip-card-back-p'>MySQL</p> 
                            <p className='hexa-flip-card-back-p'>1 Yr <br/> Exp</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default TechStack
