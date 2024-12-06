import React from 'react'
import { CiBookmark } from "react-icons/ci";

export default function Status() {
  return (
    <div className='grid md:grid-cols-2 gap-4'>
      <div className='card'>
            <h1 className='text-2xl font-extralight text-gray-800 py-4'>Experience</h1>
            {/* signle card items */}
            <div className='flexitem border-b my-4 py-2 border-b-gray-300'>
                <div>
                    <CiBookmark className='text-xl text-primary'/>
                </div>
                <div className='leading-9'>
                    <p className='text-gray-500'>2021 - Present</p>
                    <p className='text-2xl font-extralight'>Themeforest Market</p>
                    <p className='text-gray-500'>Web Designer </p>
                </div>
            </div>
            {/* signle card items */}
            <div className='flexitem border-b my-4 py-2 border-b-gray-300'>
                <div>
                    <CiBookmark className='text-xl text-primary'/>
                </div>
                <div className='leading-9'>
                    <p className='text-gray-500'>2021 - Present</p>
                    <p className='text-2xl font-extralight'>Envato Theme Developer</p>
                    <p className='text-gray-500'>Web  Development</p>
                </div>
            </div>
            {/* signle card items */}
            <div className='flexitem  my-4 py-2 '>
                <div>
                    <CiBookmark className='text-xl text-primary'/>
                </div>
                <div className='leading-9'>
                    <p className='text-gray-500'>2021 - Present</p>
                    <p className='text-2xl font-extralight'>Marketing Expert GRP  </p>
                    <p className='text-gray-500'>Web Developer & Business Partner</p>
                </div>
            </div>
   
      </div>

      {/* education section */}
      <div className='card'>
            <h1 className='text-2xl font-extralight text-gray-800 py-4'>Education</h1>
            {/* signle card items */}
            <div className='flexitem border-b my-4 py-2 border-b-gray-300'>
                <div>
                    <CiBookmark className='text-xl text-primary'/>
                </div>
                <div className='leading-9'>
                    <p className='text-gray-500'>2021 - Present</p>
                    <p className='text-2xl font-extralight'>Themeforest Market</p>
                    <p className='text-gray-500'>Web Designer </p>
                </div>
            </div>
            {/* signle card items */}
            <div className='flexitem border-b my-4 py-2 border-b-gray-300'>
                <div>
                    <CiBookmark className='text-xl text-primary'/>
                </div>
                <div className='leading-9'>
                    <p className='text-gray-500'>2021 - Present</p>
                    <p className='text-2xl font-extralight'>Envato Theme Developer</p>
                    <p className='text-gray-500'>Web  Development</p>
                </div>
            </div>
            {/* signle card items */}
            <div className='flexitem my-4 py-2 '>
                <div>
                    <CiBookmark className='text-xl text-primary'/>
                </div>
                <div className='leading-9'>
                    <p className='text-gray-500'>2021 - Present</p>
                    <p className='text-2xl font-extralight'>Marketing Expert GRP  </p>
                    <p className='text-gray-500'>Web Developer & Business Partner</p>
                </div>
            </div>
   
      </div>
    </div>
  )
}
