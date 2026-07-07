import { TestimonialCard } from "./testimonials-card";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Class 12 Student",
    review:
      "StudyFlow completely changed the way I study. The AI Tutor explains difficult concepts in minutes.",
  },
  {
    name: "Priya Singh",
    role: "JEE Aspirant",
    review:
      "The Smart Notes and Flashcards helped me revise faster. Everything is organized in one place.",
  },
  {
    name: "Aman Verma",
    role: "NEET Student",
    review:
      "I love the progress tracking and AI summaries. It keeps me consistent every single day.",
  },
];

export function TestimonialsGrid() {
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.name}
          name={testimonial.name}
          role={testimonial.role}
          review={testimonial.review}
        />
      ))}
    </div>
  );
}