import Button from '@/utils/Button';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";


export default function Contact() {
  return (
    <div className='card'>
       <div className="text-center mb-4">
        <p className="text-xl text-gray-600">Pricing</p>
        <h1 className="text-5xl font-semibold text-gray-800">
          Flexible Pricing Plan
        </h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

            <div className="md:col-span-1   ">
               <div className='border rounded-lg border-gray-200 py-2 px-4 my-2'>
               <div className='leading-10 py-2'>
                    <p className='text-primary text-lg py-2'><FaLocationDot/></p>
                    <p className='text-xl font-semibold text-gray-600'>our office:</p>
                    <p className='text-gray-500'>Gonobhavan, Bangladesh</p>
                </div>
                <div className='leading-10 py-2'>
                    <p className='text-primary text-lg py-2'><FaLocationDot/></p>
                    <p className='text-xl font-semibold text-gray-600'>our office:</p>
                    <p className='text-gray-500'>Gonobhavan, Bangladesh</p>
                </div>
                <div className='leading-10 py-2'>
                    <p className='text-primary text-lg py-2'><FaLocationDot/></p>
                    <p className='text-xl font-semibold text-gray-600'>our office:</p>
                    <p className='text-gray-500'>Gonobhavan, Bangladesh</p>
                </div>
               </div>
                
            </div>

            <div className='md:col-span-3'>
                    <div className='border rounded-lg p-6'>
                        <div className='flex items-center gap-3'>
                          <div className='w-full'>
                            <p className='py-2 text-gray-500'>Full Name</p>
                          <input type="text" placeholder='John Doe' className='py-3 w-full px-4 outline-none border rounded-md bg-transparent' />
                          </div>
                          <div  className='w-full'>
                            <p className='text-gray-500 py-2'>Email Address</p>
                          <input type="text" placeholder='hellow@gmail.com' className='py-3 w-full px-4 outline-none border rounded-md bg-transparent' />
                          </div>
                        </div>
                        <div className='my-4'>
                            <p className='text-gray-500 py-2'>Your Message</p>
                    <textarea className='w-full p-2 rounded-lg h-[250px] border outline-none' placeholder='Hellow im mazaharul...'></textarea>
                        </div>

                        <div className='my-3'>
                            <Button variant='primary-button'>Send Me Message</Button>
                        </div>

                    </div>
            </div>
      </div>
    </div>
  )
}
