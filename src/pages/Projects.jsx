import StarsCanvas from '../models/StarsCanvas'
import { projects, experiences } from '../constants'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import '../index.css';
import CTA from '../components/CTA'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const Projects = () => {
  return (
    <section className='max-container'>
    <StarsCanvas/>
    <h1 className='head-text'>
      My <span className='blue-gradient_text font-semibold drop-shadow'>
       Projects
      </span>
    </h1>
    <div className='flex flex-col gap-3 mt-5 text-blue-200'>
      <p>
       I have Worked on various projects, be 
       it <span className='blue-gradient_text font-semibold drop-shadow'>
          Freelancing
       </span>
       , personal learning or out of interest. Here are some of them.
       Many of them are open source and available on my github. 
      </p>
    </div>
    
    <div className='flex flex-wrap my-20 gap-16'>
      {projects.map((project) => (
        // eslint-disable-next-line react/jsx-key
        <div className='lg:w-[400px] w-full' key={project.name}>
          <div className='block-container w-12 h-12'>
            <div className={`btn-back rounded-xl ${project.theme}`}/>
            <div className='btn-front rounded-xl flex justify-center items-center' >
              <img
                src={project.iconUrl}
                alt="project name"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>

          <div className='flex flex-col'>
            <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
            <p className='mt-2 text-slate-400'>
              {project.description}
            </p>
            <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link
               to={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className='font-semibold text-blue-600'
              >
              Live Link
              </Link>
               <img
                src={arrow}
                alt="arrow"
                className='w-4 h-4 object-contain'
               />
            </div>
          </div>

        </div>
       ))}
    </div>
    
    <hr className='border-slate-200'/>
    <CTA/>
  </section>
  )
}

export default Projects