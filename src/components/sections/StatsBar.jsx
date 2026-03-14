import { ScrollReveal, AnimatedStat } from '@/components/ui';
import { HOMEPAGE_STATS } from '@/lib/data';

export default function StatsBar({ stats = HOMEPAGE_STATS, dark = false }) {
  return (
    <ScrollReveal variant="stagger">
      <section className={`py-12 ${dark ? 'bg-dark-900' : 'bg-g-1'}`}>
        <div className="max-w-container mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedStat key={i} value={s.value} suffix={s.suffix} label={s.label} decimals={s.decimals || 0} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
