"use client"

interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  showPercentage?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "primary" | "secondary" | "success"
  animated?: boolean
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  size = "md",
  variant = "primary",
  animated = true,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  }

  const variantClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    success: "bg-success",
  }

  return (
    <div className="space-y-2">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-sm font-medium text-foreground">{label}</span>}
          {showPercentage && (
            <span className="text-sm font-medium text-muted-foreground">{Math.round(percentage)}%</span>
          )}
        </div>
      )}

      <div className={`w-full bg-muted rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${variantClasses[variant]} rounded-full transition-all duration-500 ease-out ${sizeClasses[size]} ${
            animated ? "animate-pulse-glow" : ""
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
