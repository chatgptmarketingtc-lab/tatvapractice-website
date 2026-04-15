import { ScrollReveal, Button } from '@/components/ui';

function PracticeSizeCard({ icon, title, description, features = [], buttonText, buttonLink }) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="bg-gradient-to-br from-brand-50 to-brand-100 p-6 flex items-center justify-center min-h-[140px]">
        <span className="text-5xl">{icon}</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-extrabold text-g-6 mb-2">{title}</h3>
        <p className="text-[13px] text-g-4 leading-relaxed mb-4">{description}</p>
        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-g-6">
                <span className="w-4 h-4 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center text-[9px] font-bold mt-0.5 shrink-0">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
        )}
        {buttonText && (
          <Button variant="outline" to={buttonLink} className="w-full justify-center text-sm">{buttonText}</Button>
        )}
      </div>
    </div>
  );
}

export default function PracticeSizeSection({ title = 'Built for Every Practice Size', cards = [] }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-8">
        <ScrollReveal variant="fadeUp">
          <h2 className="text-2xl lg:text-[32px] font-black text-center mb-12">{title}</h2>
        </ScrollReveal>
        <ScrollReveal variant="stagger">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cards.map((card, i) => (
              <PracticeSizeCard key={i} {...card} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
