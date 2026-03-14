import Link from 'next/link';
import { ScrollReveal, TiltCard } from '@/components/ui';

export default function SolutionsGrid({ title, subtitle, label, cards = [] }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-8">
        <ScrollReveal variant="fadeUp" className="text-center mb-12">
          {label && <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-3">{label}</div>}
          <h2 className="text-3xl lg:text-4xl font-black mb-4">{title}</h2>
          {subtitle && <p className="text-g-4 text-base max-w-2xl mx-auto">{subtitle}</p>}
        </ScrollReveal>
        <ScrollReveal variant="staggerFast">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="stagger-child">
                <TiltCard className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 transition-shadow h-full">
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h4 className="text-base font-extrabold mb-2">{card.title}</h4>
                  <p className="text-sm text-g-4 leading-relaxed mb-3">{card.desc}</p>
                  {card.products && <div className="text-[10px] font-bold text-brand-500">{card.products}</div>}
                  {card.link && <Link href={card.link} className="text-xs font-bold text-brand-500 no-underline hover:text-brand-700 mt-2 inline-block">Learn more →</Link>}
                </TiltCard>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
