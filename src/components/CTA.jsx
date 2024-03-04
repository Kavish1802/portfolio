import { Link } from 'react-router-dom'
import Button from './Button'

const CTA = () => {
  const ContactMe = 'Contact Me'
  return (
   <section className='cta'>
      <p className='text-xl text-blue-200'>
        Interested in hiring me, or have a Project in mind?<br className='sm:block hidden'/> please feel free to contact me.
      </p>
        <Link to='/contact' >
         <Button text={ContactMe}/>
        </Link>
   </section>
  )
}

export default CTA
