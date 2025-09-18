'use client'

import * as React from 'react'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { ProductItem } from '@/components/home/product-item'
import { products } from '@/data/products'

export function ProductItemList() {
  return (
    <div>
      <div>NEW ARRIVALS</div>
      <div className="overflow-x-auto bg-gray-100 p-4 snap-x snap-mandatory md:snap-none">
        <div className="grid grid-flow-col auto-cols-[50%] md:grid-cols-4 md:auto-cols-auto gap-4">
          {products.map((p) => (
            <div key={p.id} className="snap-start">
              <ProductItem p={p} />
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
    /*<div className="grid grid-cols-12 bg-gray-100 gap-4">
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
    </div>*/
  )
}
