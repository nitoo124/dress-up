
import React from 'react'
import Button from './button'

function Contact() {
  return (
    <div className=' lg:px-12 max-w-screen-2xl mx-auto  my-28 p-4    ' id='contact'>
        <div className=' shadow-3xl rounded-2xl '>

<div className='flex lg:flex-row  justify-between '>
            {/* form */}
        <section className=' bg-grandient from-slate-400 to-pink-600 w-full  rounded-2xl lg:rounded-l-2xl md:rounded-l-2xl md:rounded-r-none'>
            <div className=' p-10'>
           <h2 
          
           className=' text-pink-600 text-2xl lg:text-3xl md:text-3xl text-center lg:text-start md:text-start font-bold my-5'>Contact With Us!</h2>
           <form 
           
           className='   '>

            <div className=' mb-5'>
            <label className=' block text-sm font-bold '>Username:</label>
            <input className=' py-2 px-3 w-full border rounded-lg mt-2 bg-gray-100 b0 shadow-3xl' type="text" placeholder='Enter Your Name' />
             </div>

             <div className=' mb-5'>
            <label className=' block text-sm font-bold'>Email:</label>
            <input className='py-2 px-3 w-full border rounded-lg mt-2 bg-gray-100 b0 shadow-3xl' type="text" placeholder='Enter Your email' />
             </div>


             <div className=' mb-5'>
            <label className=' block text-sm font-bold'>Message:</label>
           <textarea className='py-2 px-3 w-full border rounded-lg mt-2 bg-gray-100 b0 shadow-3xl' placeholder='Write your message here'></textarea>
             </div>
           </form>
           <div 
          
           className=' text-center md:text-start'>
            <Button text= 'Sent'/>
           </div>
           </div>
        </section>
          
          

            </div>

        </div>
    </div>
  )
}

export default Contact