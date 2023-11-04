'use client'
import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    if (!data.query) {
      return null
    }

    router.push('/search?q=' + data.query)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 transition-all duration-300 focus-within:ring"
    >
      <Search className="h-6 w-6 text-zinc-500" />

      <input
        placeholder="Buscar produtos"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        name="query"
        required
        defaultValue={query ?? ''}
      />
    </form>
  )
}
