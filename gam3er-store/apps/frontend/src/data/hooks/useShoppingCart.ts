import { useContext } from 'react'
import ShoppingCartContext from '../contexts/shoppingCartContext'

const useShoppingCart = () => useContext(ShoppingCartContext)
export default useShoppingCart
