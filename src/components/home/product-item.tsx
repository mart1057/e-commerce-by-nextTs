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
import { Label } from '@/components/ui/label'
import shirt1 from '@/components/home/images/shirt1.png'

export function ProductItem() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-gray-100">
        <Card className='size-full'>
          <CardHeader className='justify-center'>
            {/* <CardTitle>Card Title</CardTitle> */}
            {/* <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction> */}
            <Image src={shirt1} alt="T-shirt product" />
          </CardHeader>
          <CardContent>
            <p className='font-bold text-xl'>T-SHIRT WITH TAPE DETAILS</p>
            <Label htmlFor="star">ดาว ดาว ดาว ดาว ดาว</Label>
            <p className='font-bold text-xl'>$120</p>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  )
}
