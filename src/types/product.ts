import type { StaticImageData } from 'next/image'

export type Product = {
  id: number
  name: string
  price: number
  discount: number
  image: string | StaticImageData
  rate: number
  rate_total: number
}
