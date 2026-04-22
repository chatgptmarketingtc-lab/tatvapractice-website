import { ScrollReveal, TiltCard } from '@/components/ui';

function FeatureCard({ icon, title, description }) {
  return (
    <TiltCard className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-2xl mb-4">{icon}</div>
      <h3 className="text-[15px] font-extrabold text-g-6 mb-2">{title}</h3>
      <p className="text-[13px] text-g-3 leading-relaxed">{description}</p>
    </TiltCard>
  );
}

export default function FeatureGrid({ tag, title, subtitle, features = [], columns = 3 }) {
  const colsClass = columns === 4 ? 'lg:grid-cols-4' : columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-8">
        <ScrollReveal variant="fadeUp">
          {tag && (
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 bg-brand-500/5 text-brand-500 text-[11px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />{tag}
              </span>
            </div>
          )}
          <h2 className="text-2xl lg:text-[32px] font-black text-center mb-3">{title}</h2>
          {subtitle && <p className="text-[15px] text-g-4 text-center max-w-2xl mx-auto mb-12">{subtitle}</p>}
        </ScrollReveal>
        <ScrollReveal variant="stagger">
          <div className={`grid md:grid-cols-2 ${colsClass} gap-6`}>
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
