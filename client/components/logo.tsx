"use client"

interface LogoProps {
  variant?: "full" | "icon" | "horizontal"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Logo({ variant = "full", size = "md", className = "" }: LogoProps) {
  const sizeMap = {
    sm: { icon: 24, text: 14 },
    md: { icon: 32, text: 18 },
    lg: { icon: 48, text: 24 },
  }

  const { icon: iconSize, text: textSize } = sizeMap[size]

  // Icon-only variant
  if (variant === "icon") {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Outer circle - Teal */}
        <circle cx="24" cy="24" r="22" fill="url(#gradient1)" />

        {/* Book/Learning symbol - White */}
        <path d="M24 12C24 12 18 14 18 20V32C18 32 24 30 24 30C24 30 30 32 30 32V20C30 14 24 12 24 12Z" fill="white" />

        {/* Accent line - Orange */}
        <path d="M20 24H28" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  // Horizontal variant (icon + text side by side)
  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="22" fill="url(#gradient1)" />
          <path
            d="M24 12C24 12 18 14 18 20V32C18 32 24 30 24 30C24 30 30 32 30 32V20C30 14 24 12 24 12Z"
            fill="white"
          />
          <path d="M20 24H28" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
        </svg>
        <span
          style={{ fontSize: `${textSize}px` }}
          className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          LearnHub
        </span>
      </div>
    )
  }

  // Full variant (stacked)
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#gradient1)" />
        <path d="M24 12C24 12 18 14 18 20V32C18 32 24 30 24 30C24 30 30 32 30 32V20C30 14 24 12 24 12Z" fill="white" />
        <path d="M20 24H28" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
      <span
        style={{ fontSize: `${textSize}px` }}
        className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      >
        LearnHub
      </span>
    </div>
  )
}
