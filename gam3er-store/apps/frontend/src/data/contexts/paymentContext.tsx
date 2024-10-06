'use client'
import {
  OrderItem,
  Order,
  DeliveryOrder,
  Status,
  PaymentMethod,
  CartItem,

} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from '../hooks/useLocalStorage'
import useShoppingCart from '../hooks/useShoppingCart'
import useAPI from '../hooks/useAPI'

export interface PaymentContextProps {
  paymentMethod: PaymentMethod
  delivery: Partial<DeliveryOrder>
  changePaymentMethod: (paymentMethod: PaymentMethod) => void
  changeDelivery: (delivery: Partial<DeliveryOrder>) => void
  finishOrder: () => void
}

const PaymentContext = createContext<PaymentContextProps>({} as any)

export function PaymentProvider(props: any) {
  const { httpPost } = useAPI()
  const { items, totalValue, clearShoppingCart } = useShoppingCart()
  const { saveItem, getItem } = useLocalStorage()
  const router = useRouter()

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.PIX,
  )
  const [delivery, setDelivery] = useState<Partial<DeliveryOrder>>({})

  function changePaymentMethod(paymentMethod: PaymentMethod) {
    saveItem('paymentMethod', paymentMethod)
    setPaymentMethod(paymentMethod)
  }

  function changeDelivery(delivery: Partial<DeliveryOrder>) {
    saveItem('delivery', delivery)
    setDelivery(delivery)
  }

  async function finishOrder() {
    const order: Partial<Order> = {
      date: new Date(),
      paymentMethod,
      totalValue,
      delivery: delivery as DeliveryOrder,
      status: Status.RECEIVED,
      items: items.map(
        (item: CartItem) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unitPrice: item.product.promotionalPrice,
          }) as OrderItem,
      ),
    }

    await httpPost('/orders', order)
    clearShoppingCart()
    router.push('/checkout/success')
  }

  useEffect(() => {
    const delivery = getItem('delivery')
    const paymentMethod = getItem('paymentMethod')
    if (delivery) setDelivery(delivery)
    if (paymentMethod) setPaymentMethod(paymentMethod)
  }, [getItem])

  return (
    <PaymentContext.Provider
      value={{
        delivery,
        paymentMethod,
        changeDelivery,
        changePaymentMethod,
        finishOrder,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  )
}

export default PaymentContext
