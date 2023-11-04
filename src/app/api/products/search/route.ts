import type { NextRequest } from 'next/server'
import { parse, string } from 'valibot'
import data from '../data.json'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl

    const query = parse(string(), searchParams.get('q'))

    const products = data.products.filter((product) => {
      return product.title
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase())
    })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return Response.json(products)
  } catch (error) {
    return Response.json({ error }, { status: 400 })
  }
}
