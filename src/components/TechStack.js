import React, { useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Controller } from 'swiper/modules';

//imported images
import { Swiper, SwiperSlide } from "swiper/react";
import htmlImg from '../images/html.png'
import cssImg from '../images/css.png'
import jsImg from '../images/js.png'
import nodeImg from '../images/nodejs.png'
import expressImg from '../images/express-logo.jpg'
import pythonImg from '../images/python.png'
import reactImg from '../images/react.png'
import Bootstrap  from '../images/bootstrap.png'
import MongoDB from '../images/mongoDB.png'
import Sql from '../images/sql.png'


function TechStack(popularRef) {
    const [controller, setController] = useState(null);
  return (
    <>
      <h3 className='skill-title'>Skills </h3> 
        <div className='skill-section'>
            <div popularRef={popularRef} className='skills'>
                <Swiper 
                        effect={"cards"}
                        grabCursor={true}
                        // modules={[EffectCards]}
                        className="mySwiper"
                        modules={[Controller, EffectCards]}
                        // onSwiper={setFirstSwiper}
                        controller={{ control: controller }}
                >
                    <SwiperSlide className='swiper-slide-active'>
                            <img className='htmlImg' src={htmlImg} alt='' />
                             {/* value={card.skills)  */}
                            {/* onChange={handleSwipeCard}  */}
                    </SwiperSlide> 
                    <SwiperSlide>
                            <img className='cssImg' src={cssImg} alt='' /> 
                            {/* value={card.skills}
                            onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                            <img className='jsImg' src={jsImg} alt='' /> 
                            {/* value={card.skills}
                            onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                            <img className='nodejsImg' src={nodeImg} alt='' />
                            {/* value={card.skills}
                            onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                            <img className='expressImg' src={expressImg} alt='' />
                            {/* value={card.skills}
                            onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                            <img className='pythonImg' src={pythonImg} alt='' />
                            {/* value={card.skills}
                            onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='reactImg' src={reactImg} alt='' />
                        {/* value={card.skills}
                        onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='bootstrapImg' src={Bootstrap} alt='' />
                        {/* value={card.skills}
                        onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='bootstrapImg' src={MongoDB} alt='' />
                        {/* value={card.skills}
                        onChange={handleSwipeCard} */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='bootstrapImg' src={Sql} alt='' />
                        {/* value={card.skills}
                        onChange={handleSwipeCard} */}
                    </SwiperSlide>
                        
                </Swiper>
            </div>
            <div popularRef={popularRef} className='skills-dec'>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    // modules={[EffectCards]}
                    className="mySwiper"
                    modules={[Controller]}
                    onSwiper={setController}
                    
                >
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                            <hr />
                            <h3 className='r-main-tilte'>HTML5</h3>
                            <p className='r-main-para'>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web.</p>
                            <hr /> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                             <h3 className='r-main-tilte'>CSS3</h3>
                            <p className='r-main-para'>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
                            </p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                            <h3 className='r-main-tilte'>Javascript</h3>
                             <p className='r-main-para'>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                            <h3 className='r-main-tilte'>NodeJS</h3>
                            <p className='r-main-para'>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.</p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                             <h3 className='r-main-tilte'>ExpressJS</h3>
                            <p className='r-main-para'>Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                             <h3 className='r-main-tilte'>Python</h3>
                            <p className='r-main-para'>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. Python is dynamically typed and garbage-collected.</p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                             <h3 className='r-main-tilte'>ReactJS</h3>
                            <p className='r-main-para'>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. </p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                             <h3 className='r-main-tilte'>Bootstrap</h3>
                            <p className='r-main-para'>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                             <h3 className='r-main-tilte'>MongoDB</h3>
                            <p className='r-main-para'>MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. </p> 
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='r-swiperSlide'>
                        <div className='r-main'>
                             <h3 className='r-main-tilte'>MySQL</h3>
                            <p className='r-main-para'>MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language.</p> 
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
           
        </div>
        <hr />
    </>
  )
}

export default TechStack
