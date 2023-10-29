import { cx } from '@/lib/cva.config'
import { ComponentPropsWithoutRef } from 'react'

export function Skeleton({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cx('animate-pulse rounded-md bg-zinc-50/10', className)}
      {...props}
    />
  )
}
