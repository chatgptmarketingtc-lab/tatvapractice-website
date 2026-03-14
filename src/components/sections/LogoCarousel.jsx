import { CLIENT_LOGOS } from '@/lib/data';

export default function LogoCarousel({ label = 'Trusted by leading healthcare organizations', logos = CLIENT_LOGOS }) {
  const doubled = [...logos, ...logos];
  return (
    <section className="py-8 border-y border-black/5 overflow-hidden bg-white">
      <div className="max-w-container mx-auto px-8 mb-4">
        <p className="text-xs font-bold text-g-3 uppercase tracking-widest text-center">{label}</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex gap-16 logo-scroll whitespace-nowrap">
          {doubled.map((logo, i) => (
            <span key={i} className="text-lg font-black text-g-2 flex-shrink-0 px-4">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
