import React from 'react'

import { TbWorld } from "react-icons/tb";
import { SiVorondesign } from "react-icons/si";
import { FaAppStoreIos } from "react-icons/fa";


export default function CardComponents({title,desc,avatar}:{title:string,desc:string,avatar:number}) {
  return (
    <div className='border hover:border-primary duration-300 ease-in-out  p-4 rounded-md'>
       <div className='text-center text-primary py-3 '>
       {avatar==0?<TbWorld className='text-4xl'/>:avatar==1?<SiVorondesign className='text-4xl'/>:<FaAppStoreIos className='text-4xl'/>}
       </div>
        <p className='text-gray-700 font-semibold text-2xl py-3'>{title}</p>
            <p className='text-gray-600 leading-8'>
                {desc}
            </p>
    </div>
  )
}
