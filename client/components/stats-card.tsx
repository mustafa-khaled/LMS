"use client"

import type { ReactNode } from "react"

interface StatsCardProps {
  label: string
  value: string | number
  icon?: ReactNode
  trend?: {
    value: number
    direction: "up" | "down"
  }
  variant?: "primary" | "secondary" | "accent"
}

export default function StatsCard({ label, value, icon, trend, variant = "primary" }: StatsCardProps) {
  const variantClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    accent: "bg-accent/10 text-accent",
  }

  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          {trend && (
            <p className={`text-xs font-medium mt-2 ${trend.direction === "up" ? "text-success" : "text-destructive"}`}>
              {trend.direction === "up" ? "↑" : "↓"} {Math.abs(trend.value)}% from last month
            </p>
          )}
        </div>
        {icon && <div className={`p-3 rounded-lg ${variantClasses[variant]}`}>{icon}</div>}
      </div>
    </div>
  )
}
