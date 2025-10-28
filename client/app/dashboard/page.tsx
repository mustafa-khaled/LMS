import { BookOpen, Award, TrendingUp, Users } from "lucide-react";
import ProgressBar from "@/components/progress-bar";
import AchievementBadge from "@/components/achievement-badge";
import StatsCard from "@/components/stats-card";
import CourseCard from "@/components/course-card";

const enrolledCourses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    progress: 65,
    lessons: 24,
    completedLessons: 16,
    instructor: "Sarah Chen",
    rating: 4.9,
    students: 12500,
    duration: "40 hours",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    progress: 40,
    lessons: 20,
    completedLessons: 8,
    instructor: "Dr. James Wilson",
    rating: 4.8,
    students: 8900,
    duration: "35 hours",
  },
];

const achievements = [
  {
    title: "First Steps",
    description: "Complete your first lesson",
    type: "gold",
    unlocked: true,
  },
  {
    title: "Week Warrior",
    description: "Learn 7 days in a row",
    type: "silver",
    unlocked: true,
  },
  {
    title: "Course Master",
    description: "Complete a full course",
    type: "bronze",
    unlocked: false,
  },
  {
    title: "Community Star",
    description: "Help 10 peers",
    type: "special",
    unlocked: false,
  },
];

const recommendedCourses = [
  {
    title: "Advanced React Patterns",
    description: "Master advanced React concepts and patterns",
    image: "/advanced-react-course.png",
    instructor: "Sarah Chen",
    rating: 4.9,
    students: 5200,
    duration: "30 hours",
    price: 79,
  },
  {
    title: "Machine Learning Basics",
    description: "Introduction to ML algorithms and applications",
    image: "/machine-learning-course.png",
    instructor: "Dr. James Wilson",
    rating: 4.7,
    students: 4100,
    duration: "28 hours",
    price: 89,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Welcome back, Learner!
          </h1>
          <p className="text-foreground/60">
            Keep up the momentum and continue your learning journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatsCard
            label="Courses Enrolled"
            value={enrolledCourses.length}
            icon={<BookOpen className="w-6 h-6" />}
            variant="primary"
          />
          <StatsCard
            label="Learning Streak"
            value="7 days"
            icon={<TrendingUp className="w-6 h-6" />}
            variant="secondary"
            trend={{ value: 2, direction: "up" }}
          />
          <StatsCard
            label="Achievements"
            value={achievements.filter((a) => a.unlocked).length}
            icon={<Award className="w-6 h-6" />}
            variant="accent"
          />
          <StatsCard
            label="Community Points"
            value="2,450"
            icon={<Users className="w-6 h-6" />}
            variant="primary"
            trend={{ value: 15, direction: "up" }}
          />
        </div>

        {/* Enrolled Courses */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Your Courses
          </h2>
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="p-6 bg-card border border-border rounded-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      by {course.instructor}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-primary">
                    {course.progress}% Complete
                  </span>
                </div>
                <ProgressBar
                  value={course.progress}
                  label="Course Progress"
                  showPercentage={false}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {course.completedLessons} of {course.lessons} lessons
                  completed
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementBadge
                key={index}
                title={achievement.title}
                description={achievement.description}
                type={achievement.type as any}
                size="md"
                unlocked={achievement.unlocked}
              />
            ))}
          </div>
        </section>

        {/* Recommended Courses */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Recommended For You
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recommendedCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
