import Button from '@/utils/Button';
import Link from 'next/link';
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

import { FaRegHandshake } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <div className='flex items-center py-4  justify-between'>

        <div >
            <h1 className='text-2xl font-bold'>Dorbesh</h1>
        </div>

        <div className='hidden font-extralight capitalize  items-center gap-4 md:flex'>
            <Link className='hover:text-primary' href={'/about'}>about</Link>
            <Link className='hover:text-primary' href={'/services'}>services</Link>
            <Link className='hover:text-primary' href={'/works'}>works</Link>
            <Link className='hover:text-primary' href={'/pricing'}>pricing</Link>
            <Link className='hover:text-primary' href={'/blog'}>blog</Link>
            <Link className='hover:text-primary' href={'/contact'}>contact</Link>
        </div>

       <div>
         {/* mobile menu */}
       <div className='md:hidden'>
         <IoMenuSharp className='text-3xl'/>
        </div>

 {/* laptopm menu */}
        <div className='md:block hidden'>
             <Button variant="secoundary-button"><div className='flex items-center gap-1'>Hire Me <FaRegHandshake/></div> </Button>
        </div>
       </div>

      </div>
    </div>
  )
}
