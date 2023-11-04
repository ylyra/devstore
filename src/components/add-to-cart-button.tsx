'use client'

import { useCart } from '@/contexts/cart-context'
import { useCallback } from 'react'

type Props = {
  productID: string
}

export function AddToCartButton({ productID }: Props) {
  const { addToCart } = useCart()

  const handleAddToCart = useCallback(() => {
    addToCart(productID)
  }, [addToCart, productID])

  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white transition-colors duration-300 hover:bg-emerald-700"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
