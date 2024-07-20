import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: "$99/mo", features: ["Basic AI Agent", "5 Automations", "Email Support"] },
            { name: "Pro", price: "$299/mo", features: ["Advanced AI Agent", "Unlimited Automations", "24/7 Support"] },
            { name: "Enterprise", price: "Custom", features: ["Custom AI Solutions", "Dedicated Account Manager", "On-premise Deployment"] },
          ].map((plan, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Button className="w-full">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}