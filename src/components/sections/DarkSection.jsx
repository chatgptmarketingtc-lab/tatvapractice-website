import Link from 'next/link';
import { ScrollReveal, GradientBlob, TiltCard, Button } from '@/components/ui';

export default function DarkSection({ label, title, subtitle, agents = [], products = [], children }) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 text-white relative overflow-hidden">
      <GradientBlob className="top-0 right-0 opacity-10" size={600} color1="#703b95" color2="#a19fcf" />
      <div className="max-w-container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <ScrollReveal variant="fadeLeft">
            {label && <div className="text-[11px] font-extrabold text-brand-200 uppercase tracking-widest mb-3">{label}</div>}
            <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-4" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="text-white/60 text-base leading-relaxed mb-6">{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="white" to="/zyvelor">See Zyvelor in action →</Button>
              <Button variant="ghost" to="/zyvelor" className="!text-brand-200 hover:!text-white">Learn about our AI →</Button>
            </div>
          </ScrollReveal>
          {agents.length > 0 && (
            <ScrollReveal variant="scaleIn">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative">
                {agents.map((a, i) => (
                  <TiltCard key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="text-xl mb-2">{a.icon}</div>
                    <div className="text-xs font-bold text-white/90">{a.name}</div>
                    <div className="text-[10px] text-white/40 mt-1">{a.desc}</div>
                  </TiltCard>
                ))}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-gradient-to-r from-brand-500 to-brand-700 text-white text-[9px] font-extrabold px-4 py-2 rounded-full uppercase tracking-wider shadow-xl pulse-ring relative">
                    ⚡ 20+ AI Agents
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
        {products.length > 0 && (
          <ScrollReveal variant="stagger">
            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((p, i) => (
                <div key={i} className="stagger-child bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                  <div className="text-[10px] font-extrabold text-brand-200 uppercase tracking-widest mb-2">{p.tag}</div>
                  <h3 className="text-xl font-black text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  );
}
