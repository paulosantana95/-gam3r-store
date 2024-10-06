'use client'
import CartItem from "@/components/checkout/cart/cartItem"
import CartTotal from "@/components/checkout/cart/cartTotal"
import EmptyCart from "@/components/checkout/cart/emptyCart"
import CheckoutHeader from "@/components/checkout/checkoutHeader"
import useShoppingCart from "@/data/hooks/useShoppingCart"

export default function Page() {
  const {
    items,
    quantityItems,
    totalValue,
    addItem,
    removeItem,
    removeProduct,
  } = useShoppingCart()

  return (
    <div className="flex flex-col gap-5 container">
      <CheckoutHeader step="carrinho" />
      <div className="flex flex-col gap-4">
        {items.length === 0 && <EmptyCart />}
        {items.map((item: any) => (
          <CartItem
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </div>
      <CartTotal quantity={quantityItems} totalValue={totalValue} />
    </div>
  )
}
