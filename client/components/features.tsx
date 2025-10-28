export default function Features() {
  const features = [
    {
      icon: "📚",
      title: "Personalized Learning Paths",
      description: "AI-powered recommendations tailored to your learning style and pace.",
      color: "from-primary to-cyan-400",
    },
    {
      icon: "📊",
      title: "Real-Time Progress Tracking",
      description: "Visualize your growth with detailed analytics and performance metrics.",
      color: "from-secondary to-indigo-400",
    },
    {
      icon: "👥",
      title: "Community & Collaboration",
      description: "Connect with peers, share knowledge, and learn together.",
      color: "from-accent to-orange-400",
    },
    {
      icon: "🎯",
      title: "Gamified Learning",
      description: "Earn badges, complete challenges, and climb the leaderboards.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🔔",
      title: "Smart Notifications",
      description: "Stay motivated with timely reminders and achievement celebrations.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🌍",
      title: "Global Content Library",
      description: "Access thousands of courses from expert instructors worldwide.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
