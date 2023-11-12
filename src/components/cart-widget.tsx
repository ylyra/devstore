'use client'
import { useCart } from '@/contexts/cart-context'
import { ShoppingBag } from 'lucide-react'

export function CartWidget() {
  const { items } = useCart()

  const totalItems = items.length
  // const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <button className="flex items-center gap-2">
      <ShoppingBag className="h-4 w-4" />

      <span className="text-sm">({totalItems})</span>
    </button>
  )
}
