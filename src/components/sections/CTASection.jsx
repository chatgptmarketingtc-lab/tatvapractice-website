import { ScrollReveal, GradientBlob, Button } from '@/components/ui';

export default function CTASection({ title = 'Ready to transform your healthcare delivery?', subtitle = 'Join thousands of doctors, hospitals, and pharma companies already using TatvaCare.' }) {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-500 via-brand-700 to-dark-700 text-white text-center relative overflow-hidden">
      <GradientBlob className="top-0 left-1/4 opacity-20" size={400} color1="#a19fcf" color2="#ffffff" />
      <div className="max-w-container mx-auto px-8 relative z-10">
        <ScrollReveal variant="fadeUp">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">{title}</h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="white" to="/">Request a Demo →</Button>
            <Button variant="ghost" to="/about" className="!text-white/70 hover:!text-white border border-white/20 !px-6">Learn more</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
