import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import CourseCard from "@/components/course-card";
import Footer from "@/components/footer";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <FeaturedCourses />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

const courses = [
  {
    title: "Web Development Masterclass",
    description:
      "Learn modern web development with React, Next.js, and Tailwind CSS",
    image: "/web-development-course.png",
    instructor: "Sarah Chen",
    rating: 4.9,
    students: 12500,
    duration: "40 hours",
    price: 99,
    isFeatured: true,
  },
  {
    title: "Data Science Fundamentals",
    description: "Master Python, pandas, and machine learning basics",
    image: "/data-science-course.png",
    instructor: "Dr. James Wilson",
    rating: 4.8,
    students: 8900,
    duration: "35 hours",
    price: 89,
  },
  {
    title: "UI/UX Design Principles",
    description: "Create beautiful and user-friendly digital experiences",
    image: "/ui-ux-design-course.png",
    instructor: "Emma Rodriguez",
    rating: 4.7,
    students: 6200,
    duration: "25 hours",
    price: 79,
  },
];

function FeaturedCourses() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Start your learning journey with our most popular courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      content:
        "LearnHub transformed my career. The courses are comprehensive and the community is incredibly supportive.",
      avatar: "/diverse-person-avatars.png",
    },
    {
      name: "Maria Garcia",
      role: "Product Manager",
      content:
        "The personalized learning paths helped me upskill quickly. Highly recommend for anyone serious about growth.",
      avatar: "/diverse-person-avatars.png",
    },
    {
      name: "David Lee",
      role: "Freelance Designer",
      content:
        "Best investment I made in myself. The UI/UX course alone paid for itself within weeks.",
      avatar: "/diverse-person-avatars.png",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Learners Say
          </h2>
          <p className="text-xl text-foreground/60">
            Join thousands of successful learners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-foreground/70 italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
