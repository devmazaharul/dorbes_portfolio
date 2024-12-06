import { planProp } from '@/types/Siteprop'
import Button from '@/utils/Button'
import React from 'react'
import { FaBasketShopping } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function PlanCard({planInfo}:{planInfo:planProp}) {
    const {desc,title,price,items}=planInfo





  return (
    <>
   <div className='border rounded-lg py-3 px-4'>
             <div className='border p-4 rounded-xl  '>
                <p className='text-xl font-semibold'>{title}</p>
                <p className='text-gray-600'>{desc}</p>
               <div className=' flex items-center py-3'>
               <h1 className='text-3xl font-semibold text-primary'>{price}</h1>
               <p className='text-xl'>/Hour</p>
               </div>
            </div>
            <div className='py-4 leading-10 text-gray-700'>

                {items.map((item,i)=>(
                    <div key={i} className='flex items-center gap-2'>
                    <IoIosArrowRoundForward/>
                    <p>{item}</p>
               </div>
                ))}

          
                

            </div>

            <div>
                    <Button variant='primary-button'><div className='flex items-center gap-1'>Order now <FaBasketShopping/></div></Button>
                </div>
          </div>
    </>
  )
}
