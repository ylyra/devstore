import data from '../data.json'

export async function GET() {
  const featured = data.products.filter((product) => product.featured)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return Response.json(featured)
}
