import { useContext } from 'react'
import PaymentContext from '../contexts/paymentContext'

const usePayment = () => useContext(PaymentContext)
export default usePayment
