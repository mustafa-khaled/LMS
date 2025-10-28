export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Learning?</h2>
        <p className="text-lg mb-8 opacity-90">Join thousands of learners already achieving their goals on LearnHub</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}
