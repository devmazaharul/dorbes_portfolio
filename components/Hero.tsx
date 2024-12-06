import Button from '@/utils/Button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";



export default function Hero() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6 ">
            <div className="md:col-span-1 card">
              <div>
              <Image src={'/unnamed.jpg'} alt='logo' width={500} height={500} className='rounded-full text-center mx-auto  w-[250px] h-[250px] object-cover shadow-md p-2 border-dashed border-primary border-2'/>
              </div>
                <div>
                    <div className='text-4xl font-semibold py-2'>Dorbesh Baba</div>
                    <div>
                        <p className='text-gray-600 leading-8 my-2'>I am a Web Designer based in san francisco.</p>
                    </div>
                    <div className='flexitem w-fit mx-auto text-2xl py-4 cursor-pointer'>
                 <Link href={'/#'} className='hover:text-blue-500'>   <FaFacebook/></Link>
                 <Link href={'/#'} className='hover:text-blue-500'>   <FaTwitter/></Link>
                 <Link href={'/#'} className='hover:text-blue-500'>   <FaFacebookMessenger/></Link>
                 
                    </div>
                </div>
            </div>
            <div className="md:col-span-2  ">
                <div className='card mb-4'>
                        <p className='text-xl text-gray-600'>Hello There!</p>
                        <div className='py-4'>
                            <p className='text-[35px] font-sans font-semibold leading-[50px]'>I’m Dorbesh Baba, a product designer crafting user-centric design with pixel-perfect precision.</p>
                        </div>
                        <div className='flexitembtn py-6'>
                            <p className='bg-primary w-[15px] h-[15px] rounded-full'></p>
                            <p className='text-gray-600'>Available for Freelancing
                            </p>
                        </div>
                        <Button variant={"primary-button"}> <div className='flexitembtn'>Download CV <HiOutlineDownload/></div></Button>
                </div>
           
             <div className='card font-extralight text-md py-4'>
                    <p >Working as a creative & outsource your fashion design project & get it quickly done and delivered remotely online.
                    </p>
                  
                </div>
            </div>
      </div>
    </div>
  )
}
