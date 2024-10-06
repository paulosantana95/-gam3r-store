import { Product } from '../product'
import CartItem from './cart-items'

export default class ShoppingCart {
    constructor(readonly items: CartItem[] = []) {}

    addItem(product: Product): ShoppingCart {
        const item = this.itemPerProduct(product)
        if (item) {
            return new ShoppingCart(this.changeItemQuantity(this.items, product, 1))
        } else {
            return new ShoppingCart([...this.items, { product, quantity: 1 }])
        }
    }

    removeItem(product: Product) {
        const item = this.itemPerProduct(product)
        if (!item) return this

        return new ShoppingCart(this.changeItemQuantity(this.items, product, -1))
    }

    removeProduct(product: Product) {
        const item = this.itemPerProduct(product)
        if (!item) return this

        return new ShoppingCart(this.items.filter((item) => item.product.id !== product.id))
    }

    clear() {
        return new ShoppingCart()
    }

    get quantityItems() {
        return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0)
    }

    get totalValue() {
        return this.items
            .map((item) => item.product.promotionalPrice * item.quantity)
            .reduce((a, b) => a + b, 0)
    }

    get totalBasePriceValue() {
        return this.items
            .map((item) => item.product.basePrice * item.quantity)
            .reduce((a, b) => a + b, 0)
    }

    private itemPerProduct(product: Product): CartItem | undefined {
        return this.items.find((item) => item.product.id === product.id)
    }

    private changeItemQuantity(
        items: CartItem[],
        product: Product,
        difference: number
    ): CartItem[] {
        return items
            .map((i) =>
                i.product.id === product.id ? { ...i, quantity: i.quantity + difference } : i
            )
            .filter((i) => i.quantity > 0)
    }
}
