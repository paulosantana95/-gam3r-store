import { Page } from "@/components/template/page";
import { PaymentProvider } from "@/data/contexts/paymentContext";
import { ProductsProvider } from "@/data/contexts/productsContext";
import { ShoppingCartProvider } from "@/data/contexts/shoppingCartContext";

export default function Layout(props: any) {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <PaymentProvider>
          <Page>{props.children}</Page>
        </PaymentProvider>
      </ShoppingCartProvider>
    </ProductsProvider>
  )
}
