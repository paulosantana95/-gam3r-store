// interface HeaderProps { }

import Link from "next/link";
import { Logo } from "../shared/logo";
import { CartButton } from "../shared/cartButton";

export function Header() {
  const quantityItems = 0
  // const {} = useCart()

  return (
    <div
      className="flex flex-col h-20"
      style={{
        background:
          'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)',
      }}
    >
      <div
        className="flex-1 container flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <Logo />
          <Link href="checkout/cart">
            <CartButton quantity={quantityItems} />
          </Link>
        </div>
      </div>
      <div
        className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20">
      </div>
    </div>
  )
}
