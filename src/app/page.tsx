import React from 'react'
import Hero from './components/hero'
import About from './components/about'
import Shop from './components/shop'
import Contact from './components/contact'


function Page() {
  return (
   <main className=''>
   <Hero/>
   <Shop/>
   <About/>
   <Contact/>

   </main>

  )
}

export default Page