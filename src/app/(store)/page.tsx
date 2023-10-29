import { cva } from '@/lib/cva.config'
import Image from 'next/image'
import Link from 'next/link'

const product_card = cva({
  base: 'group rounded-lg bg-zinc-900 overflow-hidden border border-zinc-800 flex items-end justify-center relative',
})
const product_image = cva({
  base: 'group-hover:scale-105 transition-transform duration-300',
})
const product_pricing_card = cva({
  base: 'flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5',
})
const product_title = cva({
  base: 'text-sm truncate',
})
const product_price = cva({
  base: 'flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold',
})

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className={product_card({
          className: 'col-span-6 row-span-6',
        })}
      >
        <Image
          src="/moletom-never-stop-learning.webp"
          alt=""
          width={920}
          height={920}
          className={product_image()}
        />

        <div
          className={product_pricing_card({
            className: 'absolute bottom-28 right-28',
          })}
        >
          <span className={product_title()}>Moletom AI Side</span>
          <strong className={product_price()}>R$129</strong>
        </div>
      </Link>

      <Link
        href="/"
        className={product_card({
          className: 'col-span-3 row-span-3',
        })}
      >
        <Image
          src="/moletom-java.webp"
          alt=""
          width={920}
          height={920}
          className={product_image()}
        />

        <div
          className={product_pricing_card({
            className: 'absolute bottom-10 right-10',
          })}
        >
          <span className={product_title()}>Moletom AI Side</span>
          <strong className={product_price()}>R$129</strong>
        </div>
      </Link>

      <Link
        href="/"
        className={product_card({
          className: 'col-span-3 row-span-3',
        })}
      >
        <Image
          src="/camiseta-dowhile-2022.webp"
          alt=""
          width={920}
          height={920}
          className={product_image()}
        />

        <div
          className={product_pricing_card({
            className: 'absolute bottom-10 right-10',
          })}
        >
          <span className={product_title()}>Moletom AI Side</span>
          <strong className={product_price()}>R$129</strong>
        </div>
      </Link>
    </div>
  )
}
