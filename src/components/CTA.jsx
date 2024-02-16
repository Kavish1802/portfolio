import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
   <section className='cta'>
      <p className='text-xl text-blue-200'>
        Interested in hiring me, or have a Project in mind?<br className='sm:block hidden'/> please feel free to contact me.
      </p>
      <Link to='/contact' className='btn'>
        Contact Me
      </Link>
   </section>
  )
}

export default CTA
