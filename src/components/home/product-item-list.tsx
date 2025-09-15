'use client'

import * as React from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import shirt1 from '@/components/home/images/shirt1.png'
import shirt2 from '@/components/home/images/shirt2.png'
import shirt3 from '@/components/home/images/shirt2.png'
import jean1 from '@/components/home/images/jean1.png'
import { ProductItem } from '@/components/home/product-item'

export function ProductItemList() {
  return (
    <div className="grid grid-cols-12 bg-gray-100 gap-4">
      <div className="col-span-6 md:col-span-3">
        <ProductItem />
      </div>
      <div className="col-span-6 md:col-span-3">
        <ProductItem />
      </div>
      <div className="col-span-6 md:col-span-3">
        <ProductItem />
      </div>
      <div className="col-span-6 md:col-span-3">
        <ProductItem />
      </div>
    </div>
    // <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100">
    //     <ProductItem />
    //     <ProductItem />
    //     <ProductItem />
    //     <ProductItem />
    // </div>
  )
}
