import Client from '@/components/Client'
import Hero from '@/components/Hero'
import Plan from '@/components/Plan'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Status from '@/components/Status'
import Stories from '@/components/Stories'
import Testinomials from '@/components/Testinomials'
import Works from '@/components/Works'
import React from 'react'

export default function page() {
  return (
  <>
    <div className='container'>
     <Hero/>
    </div>
    <div className='container'>
     <Services/>
    </div>
    <div className='container'>
     <Status/>
    </div>
    <div className='container'>
     <Skills/>
    </div>
 
    <div className='container'>
     <Works/>
    </div>
    <div className='container'>
     <Plan/>
    </div>
    <div className='container'>
     <Testinomials/>
    </div>
    <div className='container'>
     <Client/>
    </div>
    <div className='container'>
     <Stories/>
    </div>
  
  </>
  )
}
