/* eslint-disable no-unused-vars */
import { Stars } from '@react-three/drei'
import React from 'react'
import StarsCanvas from '../models/StarsCanvas'

const About = () => {
  return (
    <section className='max-container'>
      <StarsCanvas/>
      <h1 className='head-text'>
        Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'>
          Kavish
        </span>
      </h1>
      <div className='flex flex-col gap-3 mt-5 text-slate-500'>
        <p>
          I am a software engineer, currently working at WiseTech Global as a full stack developer,
          passionate about software engineering and always looking for new opportunities to learn and grow.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
         My Skills
        </h3>

        <div className='flex flex-col gap-3 mt-5 text-slate-500'>
          <p>
            I have experience in working with the following technologies:
          </p>
          <ul className='list-disc list-inside'>
            <li>React</li>
            <li>C++</li>
            <li>Java</li>
            <li>SpringBoot</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About