"use client"

import { Star, Users, Clock } from "lucide-react"

interface CourseCardProps {
  title: string
  description: string
  image?: string
  instructor: string
  rating: number
  students: number
  duration: string
  price?: number
  isFeatured?: boolean
  onClick?: () => void
}

export default function CourseCard({
  title,
  description,
  image,
  instructor,
  rating,
  students,
  duration,
  price,
  isFeatured = false,
  onClick,
}: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-lg border transition-all duration-300 overflow-hidden ${
        isFeatured
          ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg hover:shadow-primary/20"
          : "border-border bg-card hover:shadow-md hover:border-primary/50"
      }`}
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isFeatured && (
            <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{instructor}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          {price !== undefined ? (
            <span className="font-bold text-primary">${price}</span>
          ) : (
            <span className="text-sm font-medium text-success">Free</span>
          )}
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            Enroll
          </button>
        </div>
      </div>
    </div>
  )
}
