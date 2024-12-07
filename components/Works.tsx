
import React from 'react'
import Workslist from './sub/Workslist'

export default function Works() {
  return (
    <div className='card'>
        <div className='md:w-[50%] text-center mx-auto py-4'>
            <h1 className='text-4xl pb-4 font-semibold '>Works & Projects</h1>
            <p className='text-gray-600'>Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.</p>
        </div>

        <div>
      <Workslist/>

        </div>
    </div>
  )
}
