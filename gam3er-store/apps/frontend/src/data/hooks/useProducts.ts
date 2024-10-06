import { useContext } from 'react'
import ProductsContext from '../contexts/productsContext'

const useProducts = () => useContext(ProductsContext)
export default useProducts
