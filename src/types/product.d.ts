import type { StaticImageData } from 'next/image'
import { string } from 'zod'

type CartState = {
  items: Product[]
}

type Product = {
  id: number | string
  name: string
  price: number
  discount: number
  image: string | StaticImageData
  rate: number
  rate_total: number
  quantity: number
}
