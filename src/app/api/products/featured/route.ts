import data from '../data.json'

export function GET() {
  const featured = data.products.filter((product) => product.featured)

  return Response.json(featured)
}
