import { Header } from '@/components/header'
import { CartProvider } from '@/contexts/cart-context'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: Required<PropsWithChildren>) {
  return (
    <CartProvider>
      <main className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </main>
    </CartProvider>
  )
}
