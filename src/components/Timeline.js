import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaSuitcase } from 'react-icons/fa'
import  { BsPersonWorkspace } from 'react-icons/bs'
function Timeline() {
  return (
           <>
           <div className='workExprience-section'>
           <h3 className='workExprience-title'>Work expriece & Education</h3>
           
           <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: '#fff' }}
                    icon={<FaSuitcase />}
                >
                    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                    <h5 className="vertical-timeline-element-subtitle">Freelancer</h5>
                    
                    <ul className='timeline-list'>
                        <li className='rolesAndResponsibilities'>Up took a project to design a small API for a small restaurant that handles orders from customers and feeds them directly into the kitchen manager.</li>
                        <li className='rolesAndResponsibilities'>Used React.js, as front layer, Express.js and Node.js as the API layer, MongoDB to handle status updates and SQL to store completed customer order history.</li>
                    </ul>
                    <div className='timeline-p'>
                        <p className="vertical-timeline-element-para">
                        London, UK
                        </p>
                        <p className='dateFromTo'>Mar 2023 - present</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: '#fff' }}
                    icon={<BsPersonWorkspace />}    
                >
                    <h3 className="vertical-timeline-element-title">Tech Trainee</h3>
                    <h5 className="vertical-timeline-element-subtitle">LA Fosse Academy</h5>
                    <ul className='timeline-list'>
                        <li className='rolesAndResponsibilities'>3-month intensive in-person taught course covering significant aspects of software development and also giving commercial experience.</li>
                        <li className='rolesAndResponsibilities'> Skills taught were HTML, CSS, Javascript, React.js, Python, MongoDB and SQL</li>
                        <li className='rolesAndResponsibilities'>Improved my skills and my experience within the tech sector which I had been pursuing as my hobby
amassing 2 years experience in the field.</li>
                    </ul>
                    <div className='timeline-p'>
                        <p className="vertical-timeline-element-para">
                        London, UK
                        </p>
                        <p className='dateFromTo'>July 2022 - September 2022</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: '#fff' }}
                    icon={<FaSuitcase />}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer - Internship
</h3>
                    <h5 className="vertical-timeline-element-subtitle"> 3W Creators LLP</h5>
    
                    <ul className='timeline-list'>
                        <li className='rolesAndResponsibilities'>Up took a project to design a small API for a small restaurant that handles orders from customers and feeds them directly into the kitchen manager.</li>
                        <li className='rolesAndResponsibilities'>Used React.js, as front layer, Express.js and Node.js as the API layer, MongoDB to handle status updates and SQL to store completed customer order history.</li>
                    </ul>
                    <div className='timeline-p'>
                        <p className="vertical-timeline-element-para">
                        Vadodara, India
                        </p>
                        <p className='dateFromTo'>Nov 2021 - Mar 2022</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: '#fff' }}
                    icon={<FaSuitcase />}
                >
                    <h3 className="vertical-timeline-element-title">HR Head</h3>
                    <h5 className="vertical-timeline-element-subtitle">Gujarat University</h5>
                    <ul className='timeline-list'>
                        <li className='rolesAndResponsibilities'>To consult students regarding their post graduation academics and future learning routes such as Cyber Security, Data Science etc.</li>
                        <li className='rolesAndResponsibilities'>To connect, arrange interviews and manage placements for the students and conducted over 50 workshops with 85% employment turnover rate.</li>
                        <li className='rolesAndResponsibilities'>Researched and presented upcoming technologies to board members for inclusion in courses that increased course enlisting by 60%.</li>
                        <li className='rolesAndResponsibilities'>Improved admission process by creating in-house software to manage pipelines and leads that improved recruitment closing rate by 20%.</li>
                    </ul>
                    <div className='timeline-p'>
                        <p className="vertical-timeline-element-para">
                        Ahmedabad, India
                        </p>
                        <p className='dateFromTo'>May 2018 - Mar 2022</p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: '#fff' }}
                    icon={<FaSuitcase />}
                >
                    <h3 className="vertical-timeline-element-title">Senior Sales Executive</h3>
                    <h5 className="vertical-timeline-element-subtitle">Abellon Clean Energy</h5>
                    <ul className='timeline-list'>
                        <li className='rolesAndResponsibilities'>Led a team of 2 sales associates, providing monthly mentoring on strategies and changes in market trends.</li>
                        <li className='rolesAndResponsibilities'>Monitored team performance, identif ied shortcomings and proposed improvements that boosted KPIs by
25%. Managed and maintained documentation related to RFIs, RFQs and proposals.</li>
                        <li className='rolesAndResponsibilities'>Prepared and archived regular MIS reports for solar divisional products.</li>
                    </ul>
                    <div className='timeline-p'>
                        <p className="vertical-timeline-element-para">
                        Ahmedabad, India
                        </p>
                        <p className='dateFromTo'>Nov 2017 - May 2018</p>
                    </div>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: '#fff' }}
                    icon={<FaSuitcase />}
                >
                    <h3 className="vertical-timeline-element-title">Student Engagement and Communications Coordinator</h3>
                    <h5 className="vertical-timeline-element-subtitle">Xcellon Institute</h5>
                    <ul className='timeline-list'>
                        <li className='rolesAndResponsibilities'>Analysed customer needs by translating form data into excel spreadsheets and creating visuals to see trends.</li>
                        <li className='rolesAndResponsibilities'>Maintained and cultivated strong customer relationship and business strategies to elevate brand awareness
through means of organising seminars and ad campaigns on various social media handles.</li>
                        <li className='rolesAndResponsibilities'>Led a team of 2 sales assistants, mentoring on modern techniques to improve market capture..</li>
                    </ul>
                    <div className='timeline-p'>
                        <p className="vertical-timeline-element-para">
                        Ahmedabad, India
                        </p>
                        <p className='dateFromTo'>Mar 2015 - Nov 2017</p> 
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(242, 242, 242)', color: 'rgb(3, 3, 3)' }}
                    iconStyle={{ background: 'rgb(3, 3, 3)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Hospitality Management</h3>
                    <h5 className="vertical-timeline-element-subtitle">Maharaja Sayajirao University</h5>
                    <p className="vertical-timeline-element-para">
                    Vadodara, India
                    </p>
                    <p className='dateFromTo'>Sep 2011 - Sep 2014</p>
                    
                </VerticalTimelineElement>
  
            </VerticalTimeline>
            </div>
            <hr />
        </>
  )
}

export default Timeline

