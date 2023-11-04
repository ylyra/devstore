import { ProductProps } from '@/@types/product'
import { Product } from '@/components/product'
import { api } from '@/data/api'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

type Props = {
  searchParams: {
    q?: string
  }
}

export const metadata: Metadata = {
  title: 'search',
}

async function getSearcedProducts(query: string) {
  try {
    const response = await api(`/api/products/search?q=${query}`, {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    })

    const products = await response.json()

    return products as ProductProps[]
  } catch (error) {
    return []
  }
}

export default async function Home({ searchParams }: Props) {
  const query = searchParams.q

  if (!query) {
    redirect('/')
  }

  const products = await getSearcedProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
