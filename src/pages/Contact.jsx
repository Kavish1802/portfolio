// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import emailjs from '@emailjs/browser'
import StarsCanvas from '../models/StarsCanvas';

const Contact = () => {
  const formRef=useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
 
     
  const handleChange = (e) => { 
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleFocus = (e) => {
    e.target.classList.add('focused');
  }
  const handleBlur = (e) => {
    e.target.classList.remove('focused');
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   emailjs.send(
  //    import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //    import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //    {
  //      from_name:form.name,
  //      to_name:"Kavish",
  //      from_email:form.email,
  //      to_email:'kavishgupta2011@gmail.com',
  //      message:form.message  
  //    },
  //    import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //   ).then(()=>{
  //     setIsLoading(false);
  //     setForm({name: '', email: '', message: ''});
  //   }).catch((error)=>{
  //     setIsLoading(false);
  //     console.log(error);
  //   })
  // }

  const submitForm=async () =>{
    if(form.email.length>0 && form.name.length>0 && form.message.length>0){
      setIsLoading(true);
      axios
        .post("https://formspree.io/f/mqkrldkn", form)
        .then((response)=>{
           alert('Message sent successfully'); 
           console.log(response);
           setIsLoading(false);
        })
        .catch((error)=>{
          alert('Message not sent, Error : '+error);
        })
    }
    else{
      alert('Please fill all the fields');
    }
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {/* <StarsCanvas/> */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
         <h1 className='head-text'>Get In Touch</h1>
        <h3 className='flex flex-col gap-3 mt-2 text-blue-200'>
           I am open to new opportunities and meeting new people. Feel free to reach out to me. 
           <a className='blue-gradient_text' href="mailto:kavishgupta2011@gmail.com"> kavishgupta2011@gmail.com</a>
        </h3>
         <form
          onSubmit={(e)=>{
            e.preventDefault();
            submitForm(e);
          }

          } 
          className='w-full flex flex-col gap-7 mt-14 '>
           <label className='text-blue-500 font-semibold'>
              Name
              <input 
                type='text' 
                className='input' 
                name="name"
                  placeholder="Enter your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
           </label>
           <label className='text-blue-400 font-semibold'>
              Email
              <input  
                className='input'
                rows={4} 
                name="email"
                placeholder="Enter your email address"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
           </label>
           <label className='text-blue-300 font-semibold'>
              Your Message
              <textarea
                type='text' 
                className="textarea"
                name="message"
                placeholder="Enter your message"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                />
           </label>
           <Button
            type="submit"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className='btn width-full' 
            text={isLoading? 'Sending...':'Send Message'}
            > 
            
           </Button> 
           
         </form>
      </div>
    </section>
  )
}

export default Contact