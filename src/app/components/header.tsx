'use client'
import {Link, Element} from 'react-scroll'
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";





function Header() {

  let [togleMenu, settogleMenu] = useState(false)

  const navbar= [
    {link : 'home', path: 'home'},
    {link : 'about', path: 'about'},
    {link : 'shop', path: 'shop'},
    {link : 'contact', path: 'contact'}
  ]

  const ToggleMenu = ()=>{

    settogleMenu(!togleMenu) 
    
}
  return (
    <header className="  mx-auto shadow-3xl sticky top-0 left-0 z-50 bg-white">
      
      <div className=" flex justify-between p-5 ">
       
       {/* mobile menuicon */}
       <button className=' lg:hidden md:hidden ' onClick={ToggleMenu}>{togleMenu? <MdClose size={30}/> : <MdMenu size={30}/> }</button>
   


        {/* logo */}
        <div className=" text-3xl font-bold ml-10">
          <Link  className=' cursor-pointer' activeClass='active' spy={true} key={'home'} to={'home'} smooth={true} offset={-80} ><h1 className=" text-black"><span className=" text-pink-600">N</span>itoo</h1></Link>
        </div>

        {/* navbar */}
        <nav className=" md:block hidden">
          <ul className=" flex gap-12  text-xl font-semibold">
            {
              navbar.map(({link, path})=><Link  className=' cursor-pointer' activeClass='active' spy={true} key={link} to={path} smooth={true} offset={-80} ><li className=" hover:text-pink-600 ">{link}</li></Link>)
            }
          </ul>
        </nav>

      <FaShoppingCart className="  text-3xl md:mr-10"/>
      </div>

      {/* Mobile Menu */}
      <div className=' fixed left-0 bg-white text-center w-full'>
      <nav className={` md:hidden block py-8  ${togleMenu? 'block' : 'hidden'} ` }>
          <ul className=" flex flex-col gap-12  text-xl font-semibold">
            {
              navbar.map(({link, path})=><Link  className=' cursor-pointer' activeClass='active' spy={true} key={link} to={path} smooth={true} offset={-80}  ><li className=" hover:text-pink-600 ">{link}</li></Link>)
            }
          </ul>
        </nav> 

      </div>



     
  
    </header>
  )
}

export default Header