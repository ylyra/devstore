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
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Product
          description="Moletom com capuz e bolso canguru"
          featured
          id="9f549384-7341-4d7e-8cc2-470c24c62200"
          image="/moletom-ia-p-devs.png"
          price={99}
          slug="moletom-ia-p-devs"
          title="Moletom IA P/Devs"
        />
        <Product
          description="Moletom com capuz e bolso canguru"
          featured
          id="9f549384-7341-4d7e-8cc2-470c24c62200"
          image="/moletom-ia-p-devs.png"
          price={99}
          slug="moletom-ia-p-devs"
          title="Moletom IA P/Devs"
        />
        <Product
          description="Moletom com capuz e bolso canguru"
          featured
          id="9f549384-7341-4d7e-8cc2-470c24c62200"
          image="/moletom-ia-p-devs.png"
          price={99}
          slug="moletom-ia-p-devs"
          title="Moletom IA P/Devs"
        />
      </div>
    </div>
  )
}
