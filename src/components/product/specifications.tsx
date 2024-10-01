import { Product } from "@/core"
import { Tag } from "../shared/tag"
import { IconTag } from "@tabler/icons-react"

interface ProductSpecificationsProps {
  product: Product
}

export function Specifications({ product }: ProductSpecificationsProps) {
  return product ? (
    <div className="flex-1 flex flex-col gap-1">
      <div className="flex mb-3">
        <Tag label={product.specs.highlight} icon={IconTag} outlined />
      </div>
      {product?.specs &&
        Object.keys(product.specs)
          .filter((k) => k !== 'destaque')
          .map((chave) => (
            <div key={chave} className="flex gap-1">
              <span className="p-2 w-1/3 bg-white/5 rounded">
                {chave === 'highlight' ? 'Destaque' : chave}
              </span>
              <span className="p-2 w-2/3 bg-white/5 rounded">
                {product.specs[chave]}
              </span>
            </div>
          ))}
    </div>
  ) : null
}
