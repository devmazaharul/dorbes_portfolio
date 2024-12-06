import { storiesItems } from '@/lib/data'
import Button from '@/utils/Button'
import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowRightAlt } from "react-icons/md";
 
export default function Stories() {
  return (
    <div>
        
        <div className='text-center'>
            <p className='text-xl text-gray-600'>Services</p>
            <h1 className='text-4xl font-semibold py-4'>Quality Services</h1>
        </div>

     <div>
        {storiesItems.map((item)=>(
               <div key={Math.random()} className='card md:flex  md:gap-6'>
                    <Image className='rounded-xl shadow-md' src={item.avatar} width={500} height={400} alt='stories image'/>
                    <div className='px-2'>
                        <p className='text-xl py-4 text-primary'>{item.date}</p>
                        <h1 className='text-4xl pb-8 font-semibold text-gray-800 leading-[50px]'>{item.title}</h1>
                        <Button variant='primary-button'><div className='flex items-center gap-1'>Read more <MdOutlineArrowRightAlt/></div></Button>
                    </div>
               </div>
        ))}
     </div>
      
    </div>
  )
}
