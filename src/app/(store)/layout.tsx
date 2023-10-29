import { Header } from '@/components/header'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: Required<PropsWithChildren>) {
  return (
    <main className="grid-rows-app mx-auto grid min-h-screen w-full max-w-[1600px] gap-5 p-8">
      <Header />
      {children}
    </main>
  )
}
