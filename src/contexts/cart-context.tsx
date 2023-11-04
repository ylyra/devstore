'use client'
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = useCallback((productId: string) => {
    setCartItems((items) => {
      const itemIndex = items.findIndex((item) => item.productId === productId)

      if (itemIndex >= 0) {
        const newItems = [...items]
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          quantity: newItems[itemIndex].quantity + 1,
        }
        return newItems
      }

      return [...items, { productId, quantity: 1 }]
    })
  }, [])

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
