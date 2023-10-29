import { Header } from '@/components/header'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: Required<PropsWithChildren>) {
  return (
    <main className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
      <Header />
      {children}
    </main>
  )
}
