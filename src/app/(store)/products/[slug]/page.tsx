import { ProductProps } from '@/@types/product'
import { AddToCartButton } from '@/components/add-to-cart-button'
import { api } from '@/data/api'
import { cva } from '@/lib/cva.config'
import { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { safeParse, string } from 'valibot'

const size_button = cva({
  base: 'flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold',
})

type Props = {
  params: {
    slug: string
  }
}

async function getProduct(slug: string) {
  try {
    const response = await api(`/api/products/${slug}`, {
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    })

    const product = await response.json()

    return product as ProductProps
  } catch (error) {
    redirect('/')
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

// export async function generateStaticParams() {
//   return []
// }

export default async function Page({ params }: Props) {
  const slug = safeParse(string(), params.slug)

  if (!slug.success) {
    redirect('/')
  }

  const product = await getProduct(slug.output)
  const product_price = product.price
  const product_installment_price = product_price / 12

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image src={product.image} alt="" width={1000} height={1000} />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <strong className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product_price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
            })}
          </strong>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de{' '}
            {product_installment_price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button type="button" className={size_button()}>
              P
            </button>
            <button type="button" className={size_button()}>
              M
            </button>
            <button type="button" className={size_button()}>
              G
            </button>
            <button type="button" className={size_button()}>
              GG
            </button>
          </div>
        </div>

        <AddToCartButton productID={product.id} />
      </div>
    </div>
  )
}
