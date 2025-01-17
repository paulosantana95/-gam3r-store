import ExpertReview from "@/components/product/expertReview";
import { NoProductFound } from "@/components/product/noProductFound";
import { PriceMensure } from "@/components/product/priceMensure";
import { ProductSpecs } from "@/components/product/productSpecs";
import { ProductTitle } from "@/components/product/productTitle";
import { PurchaseBanner } from "@/components/product/purchaseBanner";
import UserReviews from "@/components/product/userReviews";
import { products } from "@gstore/core";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ProductPage(props: any) {
  const { id } = props.params

  const product = products.find(product => product.id === +id)

  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductSpecs product={product} />
        <PurchaseBanner product={product} />
        <PriceMensure product={product} />
      </div>
      <UserReviews product={product} />
      <ExpertReview product={product} />
    </div>
  ) : (
    <NoProductFound />
  )
}
