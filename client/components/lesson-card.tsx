"use client"

import { Play, FileText, CheckCircle2 } from "lucide-react"

interface LessonCardProps {
  title: string
  type: "video" | "document" | "quiz"
  duration?: string
  completed?: boolean
  locked?: boolean
  onClick?: () => void
}

export default function LessonCard({
  title,
  type,
  duration,
  completed = false,
  locked = false,
  onClick,
}: LessonCardProps) {
  const typeConfig = {
    video: { icon: Play, label: "Video", color: "text-primary" },
    document: { icon: FileText, label: "Document", color: "text-secondary" },
    quiz: { icon: CheckCircle2, label: "Quiz", color: "text-accent" },
  }

  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div
      onClick={!locked ? onClick : undefined}
      className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 ${
        locked
          ? "border-border bg-muted/50 opacity-60 cursor-not-allowed"
          : "border-border bg-card hover:border-primary/50 hover:shadow-md cursor-pointer"
      }`}
    >
      {/* Icon */}
      <div className={`flex-shrink-0 p-3 rounded-lg ${completed ? "bg-success/10" : "bg-muted"}`}>
        <Icon className={`w-5 h-5 ${completed ? "text-success" : config.color}`} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${completed ? "text-muted-foreground line-through" : "text-foreground"}`}>
          {title}
        </p>
        <p className="text-xs text-muted-foreground">{config.label}</p>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {duration && <span className="text-xs text-muted-foreground">{duration}</span>}
        {completed && <CheckCircle2 className="w-5 h-5 text-success" />}
        {locked && <span className="text-xs font-medium text-muted-foreground">Locked</span>}
      </div>
    </div>
  )
}
