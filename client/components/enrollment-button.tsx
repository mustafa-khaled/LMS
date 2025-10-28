"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface EnrollmentButtonProps {
  enrolled?: boolean
  loading?: boolean
  onClick?: () => void
  className?: string
}

export default function EnrollmentButton({
  enrolled = false,
  loading = false,
  onClick,
  className = "",
}: EnrollmentButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (enrolled) {
    return (
      <button
        disabled
        className={`flex items-center gap-2 px-6 py-2 bg-success/10 text-success rounded-lg font-medium cursor-default ${className}`}
      >
        <Check className="w-4 h-4" />
        Enrolled
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={loading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-6 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
          Enrolling...
        </span>
      ) : (
        "Enroll Now"
      )}
    </button>
  )
}
