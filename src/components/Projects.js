import React, { useState } from 'react';
// react icons
import {AiFillGithub} from 'react-icons/ai';
import {FiExternalLink} from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Controller } from 'swiper/modules';

//imported images
import { Swiper, SwiperSlide } from "swiper/react";
import RecipeImg from '../images/Recipeapp.png'
import VoyageImg from '../images/Voyage.png'
import JuggernutImg from '../images/Juggernut.png'
import SayitImg from '../images/SayitImg.webp'
import HabitualImg from '../images/Habitual.png'

// React Reveal
import Slide from 'react-reveal/Slide';

// React Icons
import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs'


function Projects(popularRef) {
    const [controller, setController] = useState(null);


  return (
    <>
    <h3 className='skill-title'>Some Things I’ve Built </h3>
      <div className='project-section'>  
        <Slide left duration={1000}>
            <div popularRef={popularRef} className='projects'> 
                        <Swiper 
                                effect={"cards"}
                                grabCursor={true}
                                // modules={[EffectCards]}
                                className="swiperImg"
                                modules={[Controller, EffectCards]}
                                // onSwiper={setFirstSwiper}
                                controller={{ control: controller }}
                        >
                        <SwiperSlide className='swiper-slide-active'>
                                <img className='Img1' src={RecipeImg} alt='' />
                                {/* value={card.skills)  */}
                                {/* onChange={handleSwipeCard}  */}
                        </SwiperSlide> 
                        <SwiperSlide>
                                <img className='Img2' src={VoyageImg} alt='' /> 
                                {/* value={card.skills}
                                onChange={handleSwipeCard} */}
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className='Img3' src={JuggernutImg} alt='' /> 
                                {/* value={card.skills}
                                onChange={handleSwipeCard} */}
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className='Img4' src={SayitImg} alt='' />
                                {/* value={card.skills}
                                onChange={handleSwipeCard} */}
                        </SwiperSlide>
                        <SwiperSlide>
                                <img className='Img5' src={HabitualImg} alt='' />
                                {/* value={card.skills}
                                onChange={handleSwipeCard} */}
                        </SwiperSlide>        
                    </Swiper>
                    <div className='swiper-arrows'>
                        <span className='left-arrow'><BsArrowLeftCircle /></span>
                        <span className='right-arrow'><BsArrowRightCircle /></span>
                    </div>  
            </div>
        </Slide>
           {/* Right Swiper */}
           <Slide right duration={1000}>
                <div popularRef={popularRef} className='skills-dec'>
    
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        // modules={[EffectCards]}
                        className="swiperDec"
                        modules={[EffectCards,Controller]}
                        onSwiper={setController}
                        
                    >
                        <SwiperSlide className='r-swiperSlide'>
                            <div className='r-main'>
                                
                                <h4 className='r-main-tilte'>Recipe Diary</h4>
                                <p className='r-main-para'>This is a RESTful web-app providing recipe management for users. With CRUD endpoints to recipes, along with user authentication and personalised dashboard, managing your favorite recipes in one place has made it more convenient.</p>
                                <a className='demo-links' href='https://recipe-applicationv1.netlify.app/'><FiExternalLink/></a>
                                <a className='demo-links' href='https://github.com/aditi2605/Recipe-App'><AiFillGithub /></a> 
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='r-swiperSlide'>
                            <div className='r-main'>
                                <h4 className='r-main-tilte'>Voyage</h4>
                                <p className='r-main-para'>A website created from my hobby of travelling. This is my current running project encompassing user registration, wish-list destinations on dashboard and search ability for locations with a response of key facts and things-to-do.</p>
                                <a className='demo-links' href='https://voyaga-react.netlify.app/'><FiExternalLink/></a>
                                <a className='demo-links' href='https://github.com/aditi2605/voyage-react/'><AiFillGithub /></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='r-swiperSlide'>
                            <div className='r-main'>
                                <h4 className='r-main-tilte'>Juggenaut Bistro</h4>
                                <p className='r-main-para'>Sprouted from my idea of having a fusion bistro for Indian street-food and the UK cafe culture. The logo and design have come from the same fundamental idea, created using Photoshop and images are used from a stock source.</p> 
                                <a className='demo-links' href='https://voyaga-react.netlify.app/'><FiExternalLink/></a>
                                <a className='demo-links' href='https://github.com/aditi2605/Projects/tree/main/Juggernaut-Cafe'><AiFillGithub /></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='r-swiperSlide'>
                            <div className='r-main'>
                                <h4 className='r-main-tilte'>Sayit</h4>
                                <p className='r-main-para'>Created an anonymous forums for users to express their thoughts. The functionality had likes, react via emoticons and comment features such that users can interact with posts.</p> 
                                <a className='demo-links' href='https://github.com/aditi2605/SayIt'><AiFillGithub /></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='r-swiperSlide'>
                            <div className='r-main'>
                                <h4 className='r-main-tilte'>Habitual</h4>
                                <p className='r-main-para'>This is a RESTful web-app providing recipe management for users. With CRUD endpoints to recipes, along with user authentication and personalised dashboard, managing your favorite recipes in one place has made it more convenient.</p> 
                                <a className='demo-links' href='https://fabulous-mandazi-cf3f12.netlify.app/'><FiExternalLink/></a>
                                <a className='demo-links' href='https://github.com/aditi2605/lap2_project'><AiFillGithub /></a>
                            </div>
                        </SwiperSlide>
                
                    </Swiper>
                    <div className='swiper-arrows'>
                        <span className='left-arrow'><BsArrowLeftCircle /></span>
                        <span className='right-arrow'><BsArrowRightCircle /></span>
                    </div>
                </div>
             </Slide>
        </div>
    </>
  )
}

export default Projects









