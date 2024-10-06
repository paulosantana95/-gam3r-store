'use client'

import {
  InstallmentCalculator,
  ShoppingCart,
  CartItem,
  Installment,
  Product,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface ShoppingCartContextProps {
  items: CartItem[]
  quantityItems: number
  totalBasePriceValue: number
  totalValue: number
  installment: Installment
  addItem: (product: Product) => void
  removeItem: (product: Product) => void
  removeProduct: (product: Product) => void
  clearShoppingCart: () => void
}

const ShoppingCartContext = createContext<ShoppingCartContextProps>({} as any)

export function ShoppingCartProvider(props: any) {
  const { saveItem, getItem } = useLocalStorage()
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(new ShoppingCart())

  function addItem(product: Product) {
    changeShoppingCart(shoppingCart.addItem(product))
  }

  function removeItem(product: Product) {
    changeShoppingCart(shoppingCart.removeItem(product))
  }

  function removeProduct(product: Product) {
    changeShoppingCart(shoppingCart.removeProduct(product))
  }

  function clearShoppingCart() {
    changeShoppingCart(shoppingCart.clear())
  }

  function changeShoppingCart(shoppingCart: ShoppingCart) {
    saveItem('shoppingCart', shoppingCart.items)
    setShoppingCart(shoppingCart)
  }

  useEffect(() => {
    const savedItems: CartItem[] = getItem('shoppingCart')
    if (savedItems) {
      setShoppingCart(new ShoppingCart(savedItems))
    }
  }, [getItem])

  return (
    <ShoppingCartContext.Provider
      value={{
        items: shoppingCart.items,
        quantityItems: shoppingCart.quantityItems,
        totalValue: shoppingCart.totalValue,
        totalBasePriceValue: shoppingCart.totalBasePriceValue,
        installment: new InstallmentCalculator().execute(
          shoppingCart.totalValue,
        ),
        addItem,
        removeItem,
        removeProduct,
        clearShoppingCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContext
