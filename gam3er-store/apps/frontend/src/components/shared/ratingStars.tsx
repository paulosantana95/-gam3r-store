import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

export interface RatingStarsProps {
  rating: number
  height?: number
}

export function RatingStars({ rating, height = 12 }: RatingStarsProps) {
  const ratingStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<IconStarFilled size={height} />)
      } else if (rating >= i - 0.5) {
        stars.push(<IconStarHalfFilled size={height} />)
      } else {
        stars.push(<IconStar size={height} />)
      }
    }

    return stars
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {ratingStars(rating)}
    </div>
  )
}

