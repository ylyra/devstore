import { ProductProps } from '@/@types/product'
import { Product } from '@/components/product'
import { api } from '@/data/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'home',
}

async function getFeaturedProducts() {
  const response = await api('/api/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const products = await response.json()

  return products as ProductProps[]
}

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      {products.map((product, idx) => (
        <Product {...product} key={product.id} highlited={idx === 0} />
      ))}
    </div>
  )
}
