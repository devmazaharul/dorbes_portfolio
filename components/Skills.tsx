import React from 'react'
import Skillscard from './sub/Skillscard'

export default function Skills() {
  return (
    <div>
      <div className='text-center'>
        <p className='text-xl text-gray-600'>Pro skills</p>
        <h1 className='text-4xl font-semibold py-3'>Let’s Explore My Skills</h1>
      </div>
      <div className='grid grid-cols-2 py-6 md:grid-cols-4 gap-4'>
            <Skillscard avatar={1} name='Figma' parcent={99}/>
            <Skillscard avatar={2} name='Tailwand' parcent={93}/>
            <Skillscard avatar={3} name='Photoshop' parcent={53}/>
            <Skillscard avatar={4} name='WordPress' parcent={74}/>
            <Skillscard avatar={5} name='Angular' parcent={95}/>
            <Skillscard avatar={6} name='Webflow' parcent={96}/>
            <Skillscard avatar={7} name='Python' parcent={52}/>
            <Skillscard avatar={8} name='Sketch' parcent={84}/>
      </div>
    </div>
  )
}
