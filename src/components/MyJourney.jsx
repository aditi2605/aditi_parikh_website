import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Full-Stack Engineer',
    company: 'Anima People',
    period: 'Nov 2024 - Present',
    points: [
      'Spearheaded MVP using Next.js, Node.js, Prisma, PostgreSQL, and Tailwind.',
      'Built secure RBAC dashboard with MFA, reducing unauthorised access by 30%.',
      'Integrated ML models via AWS Lambda, boosting data efficiency by 25%.',
      'Demoed product to investors, collected feedback to refine features.',
      'Maintained code integrity with Git & QA collaboration (35% fewer errors).',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
  {
    title: 'Administrator',
    company: 'Kings College Hospital NHS Trust',
    period: 'Nov 2023 - Nov 2024',
    points: [
      'Created system improving operational filing speed by 50%.',
      'Automated report lifecycle tool, reduced postal errors by 70%.',
      'Maintained accurate contact database for streamlined communication.',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
  {
    title: 'Freelance Full Stack Developer',
    company: 'Self-employed',
    period: 'Mar 2023 - Nov 2023',
    points: [
      'Built full websites using React, Node, and APIs.',
      'Converted mockups to responsive web apps.',
      'Handled full-stack projects from brief to deployment.',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
  {
    title: 'Web Developer Intern',
    company: '3W Creators LLP',
    period: 'Mar 2022 - Jun 2022',
    points: [
      'Developed CMS reducing maintenance cost by 20%.',
      'Built 3 full UI front-ends.',
      'Delivered wireframes and responsive designs using CSS Flexbox.',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
  {
    title: 'Tech Trainee',
    company: 'La Fosse Academy',
    period: 'Jul 2022 - Sep 2022',
    points: [
      'Completed intensive bootcamp (HTML, CSS, JS, React, Python, Mongo, SQL).',
      'Built real-world projects & strengthened tech stack.',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
  {
    title: 'HR Head',
    company: 'Gujarat University',
    period: 'May 2018 - Mar 2022',
    points: [
      'Counselled students on post-grad and tech careers.',
      'Managed 50+ workshops with 85% placement success.',
      'Proposed new tech courses, increasing enrolment by 60%.',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
  {
    title: 'Senior Sales Executive',
    company: 'Abellon Clean Energy',
    period: 'Nov 2017 - May 2018',
    points: [
      'Prepared solar energy proposals and documents.',
      'Improved sales KPI by 25% via strategy updates.',
      'Created MIS reports for solar division.',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
  {
    title: 'Student Coordinator',
    company: 'Xcellon Institute',
    period: 'Mar 2015 - Nov 2017',
    points: [
      'Organised seminars, improved lead generation.',
      'Mentored junior team, improved sales strategy.',
    ],
    color: 'bg-[#f5ebe0] text-indigo-900',
  },
];

export default function MyJourney() {
  return (
    <section id="journey" className="bg-[#1e1b4b] text-[#f5ebe0] py-20 relative px-4 sm:px-8">
        {/* Top wave transition */}
                  <div className="absolute bg-[#1e1b4b] bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-10">
                    <svg
                      className="relative block w-[calc(100%+1.3px)] h-[80px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 120"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M985.66,92.83C906.67,72,823.78,28.91,739.84,26.7c-92.23-2.36-174.29,43.53-263.66,49.09C360.64,81.91,272.37,41.85,182,26.8C121.14,17,61.24,23.76,0,34.22V120H1200V95.73C1132.61,103.17,1054.46,108.74,985.66,92.83Z"
                        fill="#f5ebe0"
                      />
                    </svg>
                  </div>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My Professional <span className="text-yellow-400">Journey</span> </h2>

      <div className="relative max-w-5xl mx-auto mb-8">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-yellow z-0"></div>

        <div className="space-y-20 relative z-10">
          {experiences.map((exp, i) => {
            const alignRight = i % 2 === 0;

            return (
              <div className="relative">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: alignRight ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative w-full md:w-1/2 ${alignRight ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}
                >
                  {/* Card */}
                  <div className={`rounded-xl p-6 border-2 border-yellow-500 shadow-lg ${exp.color}`}>
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{exp.emoji}</div>
                      <h3 className="font-bold text-lg">{exp.title}</h3>
                      <p className="text-sm">{exp.company}</p>
                      <p className="text-xs">{exp.period}</p>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {exp.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Centered Dot */}
                <span className="absolute left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-[#f5ebe0] border-2 border-yellow-500 z-20" />
              </div>

                          );
                        })}
                      </div>
                    </div>
                  </section>
            );
}