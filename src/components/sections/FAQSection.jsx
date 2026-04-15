'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ui';

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-bold text-g-6 pr-8 group-hover:text-brand-500 transition-colors">{question}</span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm shrink-0 transition-all duration-300 ${isOpen ? 'bg-brand-500 text-white rotate-45' : 'bg-brand-50 text-brand-500'}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-5' : 'max-h-0'}`}>
        <p className="text-[14px] text-g-4 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection({ title = 'FAQ', faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-8">
        <ScrollReveal variant="fadeUp">
          <h2 className="text-2xl lg:text-[32px] font-black text-center mb-12">{title}</h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal variant="stagger">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
