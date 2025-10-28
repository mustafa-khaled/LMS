"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface CourseFilterProps {
  onFilterChange?: (filters: FilterState) => void
}

interface FilterState {
  category: string
  difficulty: string
  priceRange: [number, number]
  rating: number
}

export default function CourseFilter({ onFilterChange }: CourseFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: "all",
    difficulty: "all",
    priceRange: [0, 200],
    rating: 0,
  })

  const [expandedFilter, setExpandedFilter] = useState<string | null>(null)

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const categories = ["All", "Web Development", "Data Science", "Design", "Business", "Health"]
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setExpandedFilter(expandedFilter === "category" ? null : "category")}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
        >
          <span className="font-semibold text-foreground">Category</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${expandedFilter === "category" ? "rotate-180" : ""}`}
          />
        </button>
        {expandedFilter === "category" && (
          <div className="border-t border-border p-4 space-y-2 bg-card">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
                <input
                  type="radio"
                  name="category"
                  value={cat.toLowerCase()}
                  checked={filters.category === cat.toLowerCase()}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Difficulty Filter */}
      <div className="border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setExpandedFilter(expandedFilter === "difficulty" ? null : "difficulty")}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
        >
          <span className="font-semibold text-foreground">Difficulty</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${expandedFilter === "difficulty" ? "rotate-180" : ""}`}
          />
        </button>
        {expandedFilter === "difficulty" && (
          <div className="border-t border-border p-4 space-y-2 bg-card">
            {difficulties.map((diff) => (
              <label key={diff} className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
                <input
                  type="radio"
                  name="difficulty"
                  value={diff.toLowerCase()}
                  checked={filters.difficulty === diff.toLowerCase()}
                  onChange={(e) => handleFilterChange("difficulty", e.target.value)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">{diff}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setExpandedFilter(expandedFilter === "price" ? null : "price")}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
        >
          <span className="font-semibold text-foreground">Price Range</span>
          <ChevronDown className={`w-5 h-5 transition-transform ${expandedFilter === "price" ? "rotate-180" : ""}`} />
        </button>
        {expandedFilter === "price" && (
          <div className="border-t border-border p-4 bg-card space-y-4">
            <input
              type="range"
              min="0"
              max="200"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange("priceRange", [0, Number.parseInt(e.target.value)])}
              className="w-full accent-primary"
            />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">$0</span>
              <span className="font-semibold text-primary">${filters.priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="border border-border rounded-lg overflow-hidden">
        <button
          onClick={() => setExpandedFilter(expandedFilter === "rating" ? null : "rating")}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
        >
          <span className="font-semibold text-foreground">Rating</span>
          <ChevronDown className={`w-5 h-5 transition-transform ${expandedFilter === "rating" ? "rotate-180" : ""}`} />
        </button>
        {expandedFilter === "rating" && (
          <div className="border-t border-border p-4 space-y-2 bg-card">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors"
              >
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={filters.rating === rating}
                  onChange={(e) => handleFilterChange("rating", Number.parseFloat(e.target.value))}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm">
                  {rating}+ ⭐ ({Math.floor(Math.random() * 5000) + 1000} reviews)
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          setFilters({ category: "all", difficulty: "all", priceRange: [0, 200], rating: 0 })
          onFilterChange?.({ category: "all", difficulty: "all", priceRange: [0, 200], rating: 0 })
        }}
        className="w-full py-2 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
      >
        Reset Filters
      </button>
    </div>
  )
}
