"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import LessonCard from "./lesson-card"

interface Module {
  id: number
  title: string
  lessons: Array<{
    id: number
    title: string
    type: "video" | "document" | "quiz"
    duration?: string
    completed?: boolean
  }>
}

interface CourseCurriculumProps {
  modules: Module[]
}

export default function CourseCurriculum({ modules }: CourseCurriculumProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0)

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId)
  }

  return (
    <div className="space-y-3">
      {modules.map((module) => (
        <div key={module.id} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleModule(module.id)}
            className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors bg-card"
          >
            <div className="flex items-center gap-3">
              <ChevronDown
                className={`w-5 h-5 transition-transform ${expandedModule === module.id ? "rotate-180" : ""}`}
              />
              <span className="font-semibold text-foreground">{module.title}</span>
              <span className="text-xs text-muted-foreground">({module.lessons.length} lessons)</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground">
              {module.lessons.filter((l) => l.completed).length}/{module.lessons.length}
            </span>
          </button>

          {expandedModule === module.id && (
            <div className="border-t border-border p-4 space-y-3 bg-background/50">
              {module.lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  title={lesson.title}
                  type={lesson.type}
                  duration={lesson.duration}
                  completed={lesson.completed}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
