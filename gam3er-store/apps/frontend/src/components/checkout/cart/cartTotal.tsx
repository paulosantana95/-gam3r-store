import { IconShoppingCart } from '@tabler/icons-react'
import { Currency } from '@gstore/core'
import Link from 'next/link'

export interface CartTotalProps {
  quantity: number
  totalValue: number
}

export default function CartTotal({ quantity, totalValue }: CartTotalProps) {
  return (
    <div className="flex justify-end items-center gap-7 bg-violet-dark h-24 rounded-xl px-7">
      <div className="flex flex-col">
        <span className="text-zinc-400">
          Total ({quantity}{' '}
          {quantity === 1 ? 'item' : 'itens'}):
        </span>
        <span className="text-emerald-500 text-2xl font-semibold">
          {Currency.format(totalValue ?? 0)}
        </span>
      </div>
      <Link href="/checkout/payment" className="button bg-indigo-700">
        <IconShoppingCart size={20} />
        <span>Continuar</span>
      </Link>
    </div>
  )
}
