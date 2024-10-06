'use client'
import CheckoutHeader from '@/components/checkout/checkoutHeader'
import DeliveryForm from '@/components/checkout/payment/deliveryForm'
import PaymentResume from '@/components/checkout/payment/paymentResume'
import SelectPaymentMethod from '@/components/checkout/payment/selectPaymentMethod'
import usePayment from '@/data/hooks/usePaymnet'
import useShoppingCart from '@/data/hooks/useShoppingCart'

export default function Page() {
  const {
    installment,
    quantityItems,
    totalValue,
    totalBasePriceValue
  } = useShoppingCart()

  const {
    delivery,
    paymentMethod,
    changeDelivery,
    changePaymentMethod,
    finishOrder
  } = usePayment()

  return (
    <div className="flex flex-col gap-7 container">
      <CheckoutHeader step="pagamento" />
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <SelectPaymentMethod
            paymentMethod={paymentMethod}
            paymentMethodChanged={changePaymentMethod}
          />
          <DeliveryForm delivery={delivery} deliveryChanged={changeDelivery} />
        </div>
        <PaymentResume
          quantity={quantityItems}
          totalValue={totalValue}
          totalBasePriceValue={totalBasePriceValue}
          installment={installment}
          finishOrder={finishOrder}
          className="mt-12"
        />
      </div>
    </div>
  )
}
