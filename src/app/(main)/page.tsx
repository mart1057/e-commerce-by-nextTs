'use client'

import BannerList from '@/components/home/banner-list'
import * as React from 'react'

export default function Home() {
  return (
  <div className="grid grid-cols-12">
    <BannerList/>
    {/* <div className="col-span-4 bg-gray-100">Home</div> */}
  </div>
  )
} 
