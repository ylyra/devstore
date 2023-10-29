import { ProductProps } from '@/@types/product'
import { api } from '@/data/api'
import { cva } from '@/lib/cva.config'
import Image from 'next/image'
import Link from 'next/link'

const product_card = cva({
  base: 'group rounded-lg bg-zinc-900 overflow-hidden border border-zinc-800 flex items-end justify-center relative',
  variants: {
    highlited: {
      true: 'col-span-6 row-span-6',
      false: 'col-span-3 row-span-3',
    },
  },
})
const product_image = cva({
  base: 'group-hover:scale-105 transition-transform duration-300',
})
const product_pricing_card = cva({
  base: 'absolute flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5',
  variants: {
    highlited: {
      true: 'bottom-28 right-28',
      false: 'bottom-10 right-10',
    },
  },
})
const product_title = cva({
  base: 'text-sm truncate',
})
const product_price = cva({
  base: 'flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold',
})

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
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className={product_card({
            highlited: idx === 0,
          })}
        >
          <Image
            src={product.image}
            alt=""
            width={920}
            height={920}
            className={product_image()}
          />

          <div
            className={product_pricing_card({
              highlited: idx === 0,
            })}
          >
            <span className={product_title()}>{product.title}</span>
            <strong className={product_price()}>
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
              })}
            </strong>
          </div>
        </Link>
      ))}
    </div>
  )
}
