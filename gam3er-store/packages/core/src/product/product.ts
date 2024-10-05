import PriceDetails from "./price-details"
import Specs from "./specs"

export default interface Product extends PriceDetails {
  id: number
  name: string
  description: string
  brand: string
  model: string
  imageUrl: string
  rating: number
  reviewVideo: string
  tags: string[]
  specs: Specs
}
