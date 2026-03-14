import Link from 'next/link';
import { ScrollReveal, TiltCard } from '@/components/ui';

export default function UseCaseSection({ icon, iconBg, name, desc, pills = [], category, title, body, points = [], link, linkText, reverse = false }) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-container mx-auto px-8">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          <ScrollReveal variant={reverse ? 'fadeRight' : 'fadeLeft'} className={reverse ? 'lg:order-2' : ''}>
            <TiltCard className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-black/5 p-5 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg text-white" style={{ background: iconBg || 'linear-gradient(135deg, #703b95, #442c84)' }}>{icon}</div>
                <div>
                  <div className="text-sm font-extrabold">{name}</div>
                  <div className="text-[11px] text-g-3">{desc}</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-5 min-h-[180px]">
                <div className="space-y-2.5">
                  <div className="flex gap-2"><div className="h-2.5 rounded bg-brand-500/20 flex-1" /><div className="h-2.5 rounded bg-g-1 w-1/3" /></div>
                  <div className="flex gap-2"><div className="h-2.5 rounded bg-g-1 w-2/3" /><div className="h-2.5 rounded bg-brand-500/15 flex-1" /></div>
                  <div className="flex gap-2"><div className="h-2.5 rounded bg-brand-500/10 w-1/4" /><div className="h-2.5 rounded bg-g-1 flex-1" /><div className="h-2.5 rounded bg-g-1 w-1/4" /></div>
                </div>
                {pills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {pills.map((p, i) => <span key={i} className="text-[10px] font-bold bg-white/80 text-brand-700 px-3 py-1 rounded-full">{p}</span>)}
                  </div>
                )}
              </div>
            </TiltCard>
          </ScrollReveal>
          <ScrollReveal variant={reverse ? 'fadeLeft' : 'fadeRight'} className={reverse ? 'lg:order-1' : ''}>
            {category && <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-3">{category}</div>}
            <h2 className="text-2xl lg:text-[28px] font-black leading-tight mb-4">{title}</h2>
            <p className="text-[15px] text-g-4 leading-relaxed mb-5">{body}</p>
            {points.length > 0 && (
              <ul className="space-y-2.5 mb-6">
                {points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-g-6">
                    <span className="w-5 h-5 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            )}
            {link && <Link href={link} className="text-sm font-bold text-brand-500 no-underline hover:text-brand-700 inline-flex items-center gap-1 hover:gap-2 transition-all">{linkText || 'Learn more'} →</Link>}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
