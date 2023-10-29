import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-1 items-center gap-5">
        <Link
          href="/"
          className="text-2xl font-extrabold text-white transition-colors duration-200 hover:text-white/60"
        >
          devstore
        </Link>

        <form className="flex w-full max-w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 transition-all duration-300 focus-within:ring">
          <Search className="h-6 w-6 text-zinc-500" />

          <input
            placeholder="Buscar produtos flex-1"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />

          <span className="text-sm">(0)</span>
        </button>

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline ">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/ylyra.png"
            alt=""
            className="h-6 w-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}
