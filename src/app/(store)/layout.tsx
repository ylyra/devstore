import { PropsWithChildren } from 'react'

export default function Layout({ children }: Required<PropsWithChildren>) {
  return (
    <>
      <header></header>
      {children}
    </>
  )
}
