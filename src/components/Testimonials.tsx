import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "AI Agent Co. has revolutionized our business processes.",
              author: "Jane Doe, CEO of TechCorp",
            },
            {
              quote: "The AI agents have significantly improved our productivity.",
              author: "John Smith, CTO of InnovateNow",
            },
            {
              quote: "Exceptional service and cutting-edge AI solutions.",
              author: "Alice Johnson, Director at FutureTech",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-lg mb-4">&ldquo;{testimonial.quote}&ldquo;</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}