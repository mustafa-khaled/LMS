"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"

interface CourseSearchProps {
  onSearch?: (query: string) => void
  placeholder?: string
}

export default function CourseSearch({ onSearch, placeholder = "Search courses..." }: CourseSearchProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch?.(value)
  }

  const handleClear = () => {
    setQuery("")
    onSearch?.("")
  }

  return (
    <div
      className={`relative flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-300 ${
        isFocused ? "border-primary bg-background shadow-lg shadow-primary/10" : "border-border bg-card"
      }`}
    >
      <Search className={`w-5 h-5 ${isFocused ? "text-primary" : "text-muted-foreground"}`} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
      />
      {query && (
        <button
          onClick={handleClear}
          className="p-1 hover:bg-muted rounded-md transition-colors text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
