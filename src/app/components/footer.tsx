import React from 'react'
import Link from 'next/link'
import  { FaArrowRight } from "react-icons/fa6"; 
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";








function Footer() {
  return (
   <footer className=' shadow-3xl'>

    {/*  */}
    <div className=' grid  md:grid-cols-3 justify-center  md:justify-between  p-10  '>
        {/* Logo */}
    <div className=' md:ml-5 mt-10'>
      <Link href='/'><h2 className=' text-4xl font-bold '><span className=' text-pink-600'>N</span>itoo.</h2></Link>
    </div>

    {/* links */}
    <div className=''>
        <h2 className='text-xl font-semibold text-pink-600 mb-5 ml-2 mt-10'>Links</h2>
    <div className=' flex gap-2 mt-3 text-sm'>
     <FaArrowRight className=' text-[12px] mt-1'/> <Link href='/'>Home</Link>
    </div>
    <div className=' flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/> <Link href='/'>About</Link>
    </div>
    <div className=' flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/> <Link href='/'>Shops</Link>
    </div>
    <div className=' flex gap-2 mt-3'>
     <FaArrowRight className='text-[12px] mt-1'/> <Link href='/'>Contact</Link>
    </div>
    </div>

    {/* Question */}
    <div className='mt-10'>
    <h2 className='text-xl font-semibold text-pink-600 mb-5 ml-2'>Have a Question?</h2>

    <div className=' flex gap-2 my-3'>
     <IoLocationOutline className='text-xl '/> <p>Karachi, Pakistan</p>
    </div>
    <div className=' flex gap-2 my-3'>
     <FaPhoneAlt className='text-[15px] mt-1'/> <p>12345678910</p>
    </div>
    <div className=' flex gap-2 my-3'>
     <MdEmail className='text-xl mt-1 '/> <p>example@gmail.com</p>
    </div>
    </div>
    </div>

    {/* social medial icons */}
    <div className='  flex justify-center gap-8 text-3xl mt-5 pb-10 font-bold'>

    <FaFacebook  className=' hover:text-pink-600 hover:animate-bounce' />
    <FaInstagram className=' hover:text-pink-600 hover:animate-bounce' />
    <FaWhatsapp className=' hover:text-pink-600 hover:animate-bounce' />
    </div>
    {/* Copyright Text */}
    <div className='mt-3 text-center  text-sm'>
        <p className=' pb-5'>Copyright © created by Nitoo Kumari</p>
        </div>
   </footer>
  )
}

export default Footer