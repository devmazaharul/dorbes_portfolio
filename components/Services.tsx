import React from 'react'
import CardComponents from './sub/CardComponents'

export default function Services() {
  return (
    <div className='card'>

        <div className='text-center'>
            <p className='text-xl text-gray-600'>Services</p>
            <h1 className='text-4xl font-semibold py-4'>Quality Services</h1>
        </div>

            <div className='grid grid-cols-1 md:grid-cols-3 py-8  gap-4'>
                <CardComponents avatar={0} title='Brand Identity Design' desc='Dorbesh gives you the blocks & kits you need to create a true website within minutes.'/>
                <CardComponents avatar={1} title='Website Design' desc='Dorbesh gives you the blocks & kits you need to create a true website within minutes..'/>
                <CardComponents avatar={2} title='Application Design' desc='Dorbesh gives you the blocks & kits you need to create a true website within minutes.'/>
            </div>
      
    </div>
  )
}
