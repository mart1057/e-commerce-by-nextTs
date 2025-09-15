'use client'

import { ProductItemList } from '@/components/home/product-item-list'
import * as React from 'react'

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-gray-100 mx-4">
        Home
        <ProductItemList />
      </div>
    </div>
  )
}
