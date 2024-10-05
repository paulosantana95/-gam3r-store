import { Product } from "@gstore/core"

interface ProductTitleProps {
  product: Product
}

export function ProductTitle({ product: { name, description } }: ProductTitleProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl">{name}</div>
      <div className="font-light text-zinc-400">{description}</div>
    </div>
  )
}
