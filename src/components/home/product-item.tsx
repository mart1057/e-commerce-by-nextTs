'use client'

import * as React from 'react'
import Image from 'next/image'
import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader
  // CardTitle
} from '@/components/ui/card'
import { RatingStars } from '@/components/home/rate-star'
// import { Label } from '@/components/ui/label'
import { Product } from '@/types/product'
type ProductItemProps = {
  p: Product
}
export function ProductItem({ p }: ProductItemProps) {
  const discountedPrice: number =
    p.discount > 0 ? Math.round((p.price * p.discount) / 100) : p.price

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-gray-100">
        <Card className="size-full">
          <CardHeader className="justify-center">
            {/* <CardTitle>Card Title</CardTitle> */}
            {/* <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction> */}
            <Image src={p.image} alt={p.name} />
          </CardHeader>
          <CardContent>
            <p className="font-bold text-l capitalize">{p.name}</p>
            <RatingStars value={p.rate} max={p.rate_total} />
            {p.discount > 0 ? (
              <p className="font-bold">
                <span className=" ">${discountedPrice}</span>
                <span className="line-through text-gray-400 pl-2">
                  ${p.price}
                </span>
              </p>
            ) : (
              <p className="">${p.price}</p>
            )}
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  )
}
