export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for beginners",
      features: ["5 Courses", "Basic Analytics", "Community Access", "Email Support"],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$29",
      description: "For serious learners",
      features: ["Unlimited Courses", "Advanced Analytics", "Priority Support", "Certificates", "Offline Access"],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations",
      features: ["Everything in Pro", "Team Management", "Custom Branding", "Dedicated Support", "API Access"],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-foreground/60">Choose the plan that fits your learning goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg shadow-primary/20 scale-105"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/60 mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-foreground/60">/month</span>}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/40"
                    : "border border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
