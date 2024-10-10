'use client'
import React from 'react'

function Button(props:{text:any}) {
  return (
   <button className=' py-2 px-3 bg-gradient-to-br from-slate-600 to-pink-600 rounded-xl font-semibold hover:text-white'>{props.text}</button>

  )
}

export default Button