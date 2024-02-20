import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox=({text, link, btnText})=>(
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn h-10 w-2'> 
      {btnText}
      {/* 
        image not visible idk why!
      <image src={arrow} className="w-4 h-4 object-contain" /> */}
    </Link>
  </div>
)

const renderContent =  {
     1:(
        <div>
          <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
              Hi, I'm <span className="font-semibold"> Kavish </span> 
              <br/>
              I'm a Software Engineer
          </h1>
        </div>
      ),
     2:(
        <InfoBox 
         text="Know More About Me."
         link="/about"
         btnText="About Me"
         />
      ),
    3:(
      <InfoBox 
        text="Checkout my Prjects!"
        link="/projects"
        btnText="Projects"
      />
      ),
     4: (
      <InfoBox 
        text="Want to get in touch? Let's talk!"
        link="/contact"
        btnText="Contact Me"
      />
      )
  }

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage]||null;
}

HomeInfo.propTypes = {
  currentStage: PropTypes.number.isRequired,
};

export default HomeInfo
