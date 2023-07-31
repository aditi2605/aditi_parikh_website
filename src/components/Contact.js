import React from 'react'
import girl from "../images/contact_img.svg"
// React Reveal
import Slide from 'react-reveal/Slide';

function Contact() {
  return (
            <>
                <Slide left>
                    <div className="contact">
                        <div className='footer'>   
                            <div className='backgroundImg'>
                                <img className='girlimg' src={girl} alt="girl waving her hand" />
                            </div>
                            <form className="contact-form">
                                <h2 className='contact-title'>Contact</h2>
                                <input type="text" id="name" name="name" placeholder="Name.."/>
                                <input type="text" id="email" name="email" placeholder="Email.."/>
                                <textarea id="message" name="message" placeholder="Message.."></textarea>
                                <div className='form-btn'>
                                    <input type="submit" value="Submit"/>
                                </div>
                                
                            </form>
                        </div>
                    </div> 
                </Slide>
            </>
    )
}

export default Contact
