import { parse, string } from 'valibot'
import data from '../data.json'

type Props = {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: Props) {
  try {
    console.log('called it')
    const slug = parse(string(), params.slug)

    const product = data.products.find((product) => product.slug === slug)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (!product) {
      return Response.json({ error: 'Product not found' }, { status: 404 })
    }

    return Response.json(product)
  } catch (error) {
    return Response.json({ error }, { status: 400 })
  }
}
