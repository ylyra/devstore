import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'devstore',
}

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html className={inter.variable} lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
