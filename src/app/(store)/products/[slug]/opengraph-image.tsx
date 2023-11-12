/* eslint-disable @next/next/no-img-element */
import { ProductProps } from '@/@types/product'
import { api } from '@/data/api'
import { env } from '@/env'
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

type Props = {
  params: {
    slug: string
  }
}

async function getProduct(slug: string) {
  const response = await api(`/api/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product as ProductProps
}

export const runtime = 'edge'

// Image metadata
export const alt = ''
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function OgImage({ params }: Props) {
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.VERCEL_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
        }}
        tw="w-full h-full flex flex-col"
      >
        <img src={productImageURL} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}
