import { Star, StarHalf, Star as StarEmpty } from "lucide-react"

type RatingStarsProps = {
  value: number   // ค่า rating เช่น 4.5
  max?: number    // จำนวนดาวสูงสุด (default = 5)
}

export function RatingStars({ value, max = 5 }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1
        if (value >= starValue) {
          // ดาวเต็ม
          return <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        } else if (value >= starValue - 0.5) {
          // ครึ่งดาว
          return <StarHalf key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        } else {
          // ดาวว่าง
          return <StarEmpty key={i} className="w-5 h-5 text-gray-300" />
        }
      })}
      <span className="ml-2 text-sm text-gray-600">{value.toFixed(1)}/{max}</span>
    </div>
  )
}
