import { Product } from '@/types/product'
import shirt1 from '@/components/home/images/shirt1.png'
import shirt2 from '@/components/home/images/shirt2.png'
import shirt3 from '@/components/home/images/shirt3.png'
import jean1 from '@/components/home/images/jean1.png'

export const products: Product[] = [
  {
    id: 1,
    name: 't-shirt with tape details',
    price: 120,
    discount: 0,
    image: shirt1,
    rate: 4.5,
    rate_total: 5
  },
  {
    id: 2,
    name: 'skinny fit jeans',
    price: 260,
    discount: 20,
    image: jean1,
    rate: 3.5,
    rate_total: 5
  },
  {
    id: 3,
    name: 'checkered shirt',
    price: 180,
    discount: 0,
    image: shirt2,
    rate: 4.5,
    rate_total: 5
  },
  {
    id: 4,
    name: 'sleeve striped t-shirt',
    price: 160,
    discount: 30,
    image: shirt3,
    rate: 4.5,
    rate_total: 5
  }
]
