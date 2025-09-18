'use client'

import { ProductItemList } from '@/components/home/product-item-list'
import BannerList from '@/components/home/banner-list'
import * as React from 'react'

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12">
        <BannerList/>
        <div className="col-span-12 bg-gray-100">
          <ProductItemList />
        </div>
      </div>
    </div>
  )
} 
