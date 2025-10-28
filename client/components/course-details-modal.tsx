"use client"

import { useState } from "react"
import { X, Star, Users, Clock, Award } from "lucide-react"
import CourseCurriculum from "./course-curriculum"
import EnrollmentButton from "./enrollment-button"

interface CourseDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  course: {
    title: string
    description: string
    instructor: string
    rating: number
    students: number
    duration: string
    price?: number
    image?: string
    modules: Array<{
      id: number
      title: string
      lessons: Array<{
        id: number
        title: string
        type: "video" | "document" | "quiz"
        duration?: string
        completed?: boolean
      }>
    }>
  }
}

export default function CourseDetailsModal({ isOpen, onClose, course }: CourseDetailsModalProps) {
  const [enrolled, setEnrolled] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleEnroll = async () => {
    setLoading(true)
    // Simulate enrollment
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setEnrolled(true)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-in-up">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background/95 backdrop-blur">
          <h2 className="text-2xl font-bold text-foreground">{course.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Course Image */}
          {course.image && (
            <img
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          )}

          {/* Course Info */}
          <div>
            <p className="text-foreground/70 mb-4">{course.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent fill-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">Rating</p>
                  <p className="font-semibold text-foreground">{course.rating}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Students</p>
                  <p className="font-semibold text-foreground">{(course.students / 1000).toFixed(1)}K</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold text-foreground">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-success" />
                <div>
                  <p className="text-xs text-muted-foreground">Certificate</p>
                  <p className="font-semibold text-foreground">Yes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instructor */}
          <div className="p-4 bg-card rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-2">Instructor</p>
            <p className="font-semibold text-foreground">{course.instructor}</p>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Course Curriculum</h3>
            <CourseCurriculum modules={course.modules} />
          </div>

          {/* Enrollment */}
          <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div>
              {course.price ? (
                <p className="text-2xl font-bold text-primary">${course.price}</p>
              ) : (
                <p className="text-lg font-semibold text-success">Free Course</p>
              )}
            </div>
            <EnrollmentButton enrolled={enrolled} loading={loading} onClick={handleEnroll} />
          </div>
        </div>
      </div>
    </div>
  )
}
