"use client"

import { Trophy, Award, Zap } from "lucide-react"

interface AchievementBadgeProps {
  title: string
  description?: string
  type?: "gold" | "silver" | "bronze" | "special"
  size?: "sm" | "md" | "lg"
  unlocked?: boolean
}

export default function AchievementBadge({
  title,
  description,
  type = "gold",
  size = "md",
  unlocked = true,
}: AchievementBadgeProps) {
  const typeConfig = {
    gold: {
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      border: "border-yellow-300 dark:border-yellow-700",
      icon: Trophy,
      color: "text-yellow-600 dark:text-yellow-400",
    },
    silver: {
      bg: "bg-gray-100 dark:bg-gray-800",
      border: "border-gray-300 dark:border-gray-600",
      icon: Award,
      color: "text-gray-600 dark:text-gray-400",
    },
    bronze: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      border: "border-orange-300 dark:border-orange-700",
      icon: Zap,
      color: "text-orange-600 dark:text-orange-400",
    },
    special: { bg: "bg-primary/10", border: "border-primary/30", icon: Trophy, color: "text-primary" },
  }

  const config = typeConfig[type]
  const Icon = config.icon

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  }

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex items-center justify-center rounded-full border-2 ${sizeClasses[size]} ${config.bg} ${config.border} ${
          !unlocked ? "opacity-50 grayscale" : ""
        } transition-all duration-300 hover:scale-110`}
      >
        <Icon className={`${iconSizes[size]} ${config.color}`} />
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}
