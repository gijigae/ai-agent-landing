import { CheckCircle } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Natural Language Processing",
            "Task Automation",
            "Data Analysis",
            "Predictive Modeling",
            "24/7 Availability",
            "Customizable Solutions",
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}