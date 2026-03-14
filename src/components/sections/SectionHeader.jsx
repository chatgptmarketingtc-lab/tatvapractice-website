import { ScrollReveal } from '@/components/ui';

export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  return (
    <ScrollReveal variant="fadeUp" className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      {label && <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-3">{label}</div>}
      <h2 className="text-3xl lg:text-4xl font-black mb-4" dangerouslySetInnerHTML={{ __html: title }} />
      {subtitle && <p className={`text-g-4 text-base leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>{subtitle}</p>}
    </ScrollReveal>
  );
}
