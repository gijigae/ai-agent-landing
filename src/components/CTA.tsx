import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
            Get started with Choimirai Company today and experience the power of AI-driven solutions.
          </p>
          <Button variant="secondary" size="lg">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}