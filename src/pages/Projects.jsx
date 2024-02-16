import StarsCanvas from '../models/StarsCanvas'
import { projects, experiences } from '../constants'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import '../index.css';
import CTA from '../components/CTA'

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
        <div>
          <div>
            <div className={`btn-back rounded-xl ${project.theme}`}/>
            <div className='lg:w-[400px] w-full' key={project.name}>
              <img
                src={project.iconUrl}
                alt="project name"
                className='w-1/2 h-1/2 object-contain'
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