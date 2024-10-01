import { products } from "@/core";
import { ProductItem } from "./productItem";
import { NoProductFound } from "./noProductFound";

export function ProductList() {
  // const { products } = useProducts()
  return products.length ? (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grind-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  ) : (
    <NoProductFound noReturnButton />
  )
}
