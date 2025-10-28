export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
          <span className="text-primary font-semibold text-sm">Welcome to the Future of Learning</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Learn{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Smarter
          </span>
          , Grow{" "}
          <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            Faster
          </span>
        </h1>

        <p className="text-xl text-foreground/60 mb-8 max-w-2xl mx-auto text-balance">
          Transform your learning journey with our cutting-edge LMS platform. Personalized paths, real-time progress
          tracking, and community-driven education.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105">
            Start Learning Today
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-primary">50K+</div>
            <div className="text-foreground/60 text-sm">Active Learners</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-secondary">1000+</div>
            <div className="text-foreground/60 text-sm">Courses</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-accent">98%</div>
            <div className="text-foreground/60 text-sm">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
