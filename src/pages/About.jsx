/* eslint-disable no-unused-vars */
import { Stars } from '@react-three/drei'
import React from 'react'
import StarsCanvas from '../models/StarsCanvas'
import { skills, experiences } from '../constants'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import '../index.css';
import { tesla } from '../assets/images'
import './About.css'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className='max-container'>
      <StarsCanvas/>
      <h1 className='head-text'>
        Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'>
          Kavish
        </span>
      </h1>
      <div className='flex flex-col gap-3 mt-5 text-blue-200'>
        <p>
          I am a software engineer, graduted in 2023 in ECE disciple from Birla Institute of Technology, Mesra. Currently working as a full stack developer,
          passionate about software engineering and always looking for new opportunities to learn and grow.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
         My Skills
        </h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className='block-container w-20 h-20'>
              {/* <div className='btn-back rounded-xl'/> */}
              <div className='flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>  
            </div>
          ))}
        </div>
      </div>

      
      <div className='py-16 flex flex-col'>
        <h3 className='subhead-text'>
          Work Experience
        </h3>
        <div className='flex flex-col gap-3 mt-5 text-blue-200'>
          <p>I have worked with two companies, leveling up my skills and teaming up with 
          smart people. Here's a rundown:</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                   <img 
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                    style={{backgroundColor: experience.iconBg}}
                   />
                </div>
              }
              contentStyle={{
                borderBottom:'8px',
                borderStyle:'solid',
                borderBottomColor: experience.iconBg,
                boxShadow:'none'
              }}
              iconStyle={{
                backgroundColor: experience.iconBg,
                boxShadow: 'none'
              }}
              >
                <div>
                  <h3 className='text-black text-xl font-popins font-semibold'>{experience.title}</h3>
                  <p className='text-black-500 font-base font-medium' style={{margin:0}}>{experience.company_name}</p>
                </div>
                
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point) => ( 
                    // eslint-disable-next-line react/jsx-key
                    <li  className='text-black-500/50 font-normal pl-1 text-sm'>{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
 
          {/* <a
                href={tesla}
                download="tesla"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
               <button className="btn btn-primary">Download CV</button>
          </a>
   */}
      </div>

        {/* <div className='parent'>
          <div className='c1'>
          Helloo
          </div>

          <div className='c2'>
          Helloo2
          </div>
        <div className='c3'>
        Helloo3
        </div>
      </div> */}

      </div>
      <hr className='border-slate-200'/>
      <CTA/>
    </section>
  )
}

export default About