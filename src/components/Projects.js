import React from 'react'
// import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {   FaReact, FaNodeJs  } from 'react-icons/fa'
import { SiJavascript, SiMongodb } from 'react-icons/si'

function Projects() {
  return (
           <>
           <div className='projects'>
           <h3 className='projectsanddevelopment'>Projects & Development</h3>
           <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: 'rgb(94,210,243)' }}
                    icon={<FaReact />}
                >
                    <div className='container'>
                    <div className='project-leng' role='button'><span className='project-leng-span'>React</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>ExpressJs</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>NodeJs</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>PostreSQL</span></div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Voyage</h3>
                    <p>A website created from my hobby of travelling. This is my current running project encompassing user registration, wish-list destinations on dashboard and search ability for locations with a response of key facts and things-to-do.</p>
                    <a className='demo-links' href='https://voyaga-react.netlify.app/'>Demo</a>
                    <a className='demo-links' href='https://github.com/aditi2605/voyage-react/'>Source Code</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: 'rgb(255,255,0)' }}
                    icon={<SiJavascript />}
                >
                    <div className='container'>
                    <div className='project-leng' role='button'><span className='project-leng-span'>HTML</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>CSS</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>Javascript</span></div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Juggenaut Bistro</h3>
                    <p>
                    Sprouted from my idea of having a fusion bistro for Indian street-food and the
UK cafe culture. The logo and design have come from the same fundamental idea, created using Photoshop and images are used from a stock source.
                    </p>
                    <a className='demo-links' href='https://voyaga-react.netlify.app/'>Demo</a>
                    <a className='demo-links' href='https://github.com/aditi2605/Projects/tree/main/Juggernaut-Cafe'>Source Code</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: 'rgb(50,205,50)' }}
                    icon={<SiMongodb />}
                >
                    <div className='container'>
                     <div className='project-leng' role='button'><span className='project-leng-span'>HTML</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>CSS</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>Javascript</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>ExpressJs</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>MongoDB</span></div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Sayit
</h3>
                    <p>
                    Created an anonymous forums for users to express their thoughts. The functionality had likes, react via emoticons and comment features such that users can interact with posts.
                    </p>
                    <a className='demo-links' href='https://github.com/aditi2605/SayIt'>Source Code</a>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: 'rgb(50,205,50)' }}
                    icon={<FaNodeJs />}
                >
                    <div className='container'>
                   <div className='project-leng' role='button'><span className='project-leng-span'>React</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>ExpressJs</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>NodeJs</span></div>
                    <div className='project-leng' role='button'><span className='project-leng-span'>MongoDB</span></div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Recipe Diary</h3>
                    <p>
                    This is a RESTful web-app providing recipe management for users. With CRUD endpoints to recipes, along with user authentication and personalised dashboard, managing your favorite recipes in one place has made it more convenient.
                    </p>
                    <a className='demo-links' href='https://recipe-applicationv1.netlify.app/'>Demo</a>
                    <a className='demo-links' href='https://github.com/aditi2605/Recipe-App'>Source Code</a>
                </VerticalTimelineElement>
                
               
  
            </VerticalTimeline>
            </div>
            <hr />
        </>
  )
}

export default Projects
