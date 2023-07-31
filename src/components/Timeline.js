import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSuitcase } from 'react-icons/fa'
import  { BsPersonWorkspace } from 'react-icons/bs'

function Timeline() {
  return (
           <>
           <ParallaxProvider>
            <div className='workExprience-section'>
                <h3 className='workExprience-title'>Work expriece</h3> 
                    <VerticalTimeline> 
                     <Parallax speed={5}>       
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'none', color: 'rgb(3, 3, 3)', boxShadow:'none', borderRadius:'30px' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                iconStyle={{ background: '#22223B', color: '#fff' }}
                                icon={<FaSuitcase />}
                            >
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h3 className="timeline-element-title">Full Stack Developer</h3>
                                            <h5 className="timeline-element-subtitle">Freelancing</h5>
                                            <p className="timeline-element-para">
                                                London,UK
                                            </p>
                                            <p className='dateFromTo'>March 2023 - Present</p> 
                                        </div>
                                        <div className="flip-card-back">
                                            <ul className='timeline-list'>
                                                <li className='rolesAndResponsibilities'>Developing, optimising, and maintaining the websites and applications utilising HTML, CSS, SQL. JavaScript, React and various APIs to meet my client’s needs and goals.</li>
                                                <li className='rolesAndResponsibilities'>Coding design mock ups into pixel perfect, cross browser compatible, search engine friendly websites.</li>
                                                <li className='rolesAndResponsibilities'>Managing the creative projects from concept to completion while managing outside vendors, diagnosing, troubleshooting, and resolving the issues with website, server and/or third-party integration.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        </Parallax>
                        <Parallax speed={-5}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'none', color: 'rgb(3, 3, 3)', boxShadow:'none' }}
                                iconStyle={{ background: '#22223B', color: '#fff' }}
                                icon={<BsPersonWorkspace />}    
                            >
                                 <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h3 className="timeline-element-title">Tech Trainee</h3>
                                            <h5 className="timeline-element-subtitle">LA Fosse Academy</h5>
                                            <p className="timeline-element-para">
                                                London,UK
                                            </p>
                                            <p className='dateFromTo'>July 2022 - September 2022</p> 
                                        </div>
                                        <div className="flip-card-back">
                                                <ul className='timeline-list'>
                                                    <li className='rolesAndResponsibilities'>3-month intensive in-person taught course covering significant aspects of software development and also giving commercial experience.</li>
                                                    <li className='rolesAndResponsibilities'> Skills taught were HTML, CSS, Javascript, React.js, Python, MongoDB and SQL</li>
                                                    <li className='rolesAndResponsibilities'>Improved my skills and my experience within the tech sector which I had been pursuing as my hobby amassing 2 years experience in the field.</li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                            </Parallax>
                            <Parallax speed={10}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'none', color: 'rgb(3, 3, 3)', boxShadow:'none' }}
                                iconStyle={{ background: '#22223B', color: '#fff' }}
                                icon={<FaSuitcase />}
                            >
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h3 className="timeline-element-title">Web Developer - Internship</h3>
                                            <h5 className="timeline-element-subtitle">3W Creators LLP</h5>
                                            <p className="timeline-element-para">
                                                London(Remote)
                                            </p>
                                            <p className='dateFromTo'>March 2022 - June 2022</p> 
                                        </div>
                                        <div className="flip-card-back">
                                                <ul className='timeline-list'>
                                                    <li className='rolesAndResponsibilities'>Developed a content management system for a media company that reduced maintenance costs by 20%</li>
                                                    <li className='rolesAndResponsibilities'>Completed 3 full web front ends.</li>
                                                    <li className='rolesAndResponsibilities'>Responsible for creating and updating wire frame designs from communication with clients.</li>
                                                    <li className='rolesAndResponsibilities'>Created responsive and functional UI using CSS Flexbox to allow viewers to access web pages irrespective of the resolution.</li>
                                                    <li className='rolesAndResponsibilities'>Worked closely with senior developers, designers and copywriters to create complete website front ends.</li>
                                                 </ul>
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                            </Parallax>
                            <Parallax speed={-10}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'none', color: 'rgb(3, 3, 3)', boxShadow:'none' }}
                                iconStyle={{ background: '#22223B', color: '#fff' }}
                                icon={<FaSuitcase />}
                            >
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h3 className="timeline-element-title">HR Head</h3>
                                            <h5 className="timeline-element-subtitle">Gujarat University</h5>
                                            <p className="timeline-element-para">
                                                Ahmedabad, India
                                            </p>
                                            <p className='dateFromTo'>May 2018 - Mar 2022</p> 
                                        </div>
                                        <div className="flip-card-back">
                                                    <ul className='timeline-list'>
                                                        <li className='rolesAndResponsibilities'>To assist and counsel the students regarding their post-graduation academics and future learning routes such as Cyber Security. </li>
                                                        <li className='rolesAndResponsibilities'>To connect, arrange interviews and manage placements for the students and conducted over 50 workshops with 85% employment turnover rate. </li>
                                                        <li className='rolesAndResponsibilities'>Researched and presented upcoming technologies to board members for inclusion in courses that increased course enlisting by 60%.</li>
                                                    </ul>
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                            </Parallax>
                            <Parallax speed={15}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: 'none', color: 'rgb(3, 3, 3)', boxShadow:'none' }}
                                iconStyle={{ background: '#22223B', color: '#fff' }}
                                icon={<FaSuitcase />}
                            >
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h3 className="timeline-element-title">Senior Sales Executive</h3>
                                            <h5 className="timeline-element-subtitle">Abellon Clean Energy</h5>
                                            <p className="timeline-element-para">
                                                Ahmedabad, India
                                            </p>
                                            <p className='dateFromTo'>Mar 2015 - Nov 2017</p> 
                                        </div>
                                        <div className="flip-card-back">
                                            <ul className='timeline-list'>
                                                <li className='rolesAndResponsibilities'>Attending and understanding sales inquiries and requirements, preparing quotation and proposals to clients. </li>
                                                <li className='rolesAndResponsibilities'>Monitored team performance, identified shortcomings and proposed improvements that boosted KPIs by 25%. Managed and maintained documentation related to RFIs, RFQs and proposals</li>
                                                <li className='rolesAndResponsibilities'>Prepared and archived regular MIS reports for solar divisional products.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                            </Parallax>
                            <Parallax speed={-15}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: 'none', color: 'rgb(3, 3, 3)', boxShadow:'none' }}
                                iconStyle={{ background: '#22223B', color: '#fff' }}
                                icon={<FaSuitcase />}
                            >
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h3 className="timeline-element-title">Student Engagement & Communications Coordinator</h3>
                                            <h5 className="timeline-element-subtitle">Xcellon Institute</h5>
                                            <p className="timeline-element-para">
                                                    Ahmedabad, India
                                            </p>
                                            <p className='dateFromTo'>Mar 2015 - Nov 2017</p> 
                                        </div>
                                        <div className="flip-card-back">
                                                <ul className='timeline-list'>
                                                            <li className='rolesAndResponsibilities'>Analysed customer needs by translating form data into excel spreadsheets and creating visuals to see trends.</li>
                                                            <li className='rolesAndResponsibilities'>Maintained and cultivated strong customer relationship and business strategies to elevate brand awareness
                                                    through means of organising seminars and ad campaigns on various social media handles.</li>
                                                            <li className='rolesAndResponsibilities'>Led a team of 2 sales assistants, mentoring on modern techniques to improve market capture..</li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                            </Parallax>
                </VerticalTimeline>
            </div>
            
            </ParallaxProvider>
        </>
  )
}

export default Timeline

