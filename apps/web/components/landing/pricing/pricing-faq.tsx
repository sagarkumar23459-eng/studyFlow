const faqs = [
  {
    question: "Can I use StudyFlow for free?",
    answer:
      "Yes. The Free plan gives you access to AI Tutor, notes, flashcards, and progress tracking with certain limits.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. You can upgrade to Pro or Ultimate anytime without losing your data or study progress.",
  },
  {
    question: "Which plan is best for JEE & NEET students?",
    answer:
      "The Ultimate plan is designed for serious aspirants with premium notes, advanced AI tools, and competitive exam resources.",
  },
];
export function PricingFAQ() {
  return (
    <div className="mx-auto mt-24 max-w-4xl">
      <h3 className="text-center text-3xl font-bold text-slate-900">
        Frequently Asked Questions
      </h3>

      <div className="mt-10 space-y-5">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h4 className="text-lg font-semibold text-slate-900">
              {faq.question}
            </h4>

            <p className="mt-3 leading-7 text-slate-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}