'use client'
import FilterProducts from "@/components/product/filterProducts";
import { ProductList } from "@/components/product/productList";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col container gap-5 py-10">
      <FilterProducts />
      <ProductList />
    </div>
  );
}
