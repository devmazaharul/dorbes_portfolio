import { testimonialData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";


export default function Testinomials() {
  return (
    <div className='card'>
         <div className="text-center ">
        <p className="text-xl text-gray-600">Testinomials</p>
        <h1 className="text-3xl font-semibold text-gray-800">
        What clients say!
        </h1>
      </div>

      {/* userFeedback */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
            {testimonialData.map((item)=>{
                return <div key={Math.random()} className='rounded-lg p-6 cursor-pointer border border-gray-200'>
                        <Image src={item.avatar} width={400} height={400} alt='testimonial_image' className='w-[90px] mb-4 h-[90px] p-1 rounded-full border border-dashed border-primary'/>
                        <p className='text-gray-600 leading-8'>{item.desc}</p>
                        <div className="py-6">
                            <h1 className='text-2xl font-semibold text-gray-800 py-2'>{item.name}</h1>
                            <p className='text-gray-600'>{item.title}</p>
                        </div>
                </div>
            })}
      </div>


                <div className='w-fit  mx-auto'>
                   <div className='flex items-center gap-4'>
                   <button className=''><FaArrowLeft className=' text-primary text-4xl border  hover:bg-primary hover:text-white rounded-full p-2'/></button>
                   <button><FaLongArrowAltRight className='text-primary text-4xl border hover:text-white hover:bg-primary rounded-full p-2'/></button>
                   </div>
                </div>

      
    </div>
  )
}
