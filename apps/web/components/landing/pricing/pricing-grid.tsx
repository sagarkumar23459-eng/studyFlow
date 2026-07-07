import { PricingCard } from "./pricing-card";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for getting started.",
    features: [
      "Limited AI Tutor",
      "Basic Notes",
      "Flashcards",
      "Progress Tracking",
    ],
  },
  {
    name: "Pro",
    price: "₹199",
    description: "Best choice for serious students.",
    highlighted: true,
    features: [
      "Unlimited AI Tutor",
      "Premium Notes",
      "Quiz Generator",
      "Advanced Analytics",
      "Cloud Sync",
      "Priority Support",
    ],
  },
  {
    name: "Ultimate",
    price: "₹499",
    description: "Everything for competitive exam preparation.",
    features: [
      "Everything in Pro",
      "Premium Handwritten Notes",
      "Competitive Exam Packs",
      "Future AI Features",
      "Priority Updates",
    ],
  },
];

export function PricingGrid() {
  return (
    <div className="mt-20 grid gap-8 lg:grid-cols-3">
      {plans.map((plan) => (
        <PricingCard
          key={plan.name}
          name={plan.name}
          price={plan.price}
          description={plan.description}
          features={plan.features}
          highlighted={plan.highlighted || false}
        />
      ))}
    </div>
  );
}