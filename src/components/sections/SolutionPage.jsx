import HeroSection from './HeroSection';
import LogoCarousel from './LogoCarousel';
import UseCaseSection from './UseCaseSection';
import StatsBar from './StatsBar';
import CTASection from './CTASection';
import { ScrollReveal } from '@/components/ui';

export default function SolutionPage({ tag, title, subtitle, gradient, heroVisual, problem, solutions = [], stats, ctaTitle, ctaSubtitle }) {
  return (
    <>
      <HeroSection tag={tag} title={title} subtitle={subtitle} gradient={gradient}
        buttons={[{ text: 'Schedule a Demo →' }, { text: 'View Case Studies', variant: 'outline' }]}
        visual={heroVisual} />
      <LogoCarousel />
      {problem && (
        <section className="py-16 lg:py-24 bg-g-1">
          <div className="max-w-container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal variant="fadeLeft">
                <div className="text-[11px] font-extrabold text-red-500 uppercase tracking-widest mb-3">The Challenge</div>
                <h2 className="text-2xl lg:text-3xl font-black mb-4">{problem.title}</h2>
                <p className="text-g-4 leading-relaxed mb-6">{problem.body}</p>
              </ScrollReveal>
              <ScrollReveal variant="fadeRight">
                <div className="space-y-4">
                  {problem.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-black/5">
                      <span className="text-red-500 text-lg">⚠️</span>
                      <span className="text-sm text-g-6">{pt}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}
      {solutions.map((s, i) => (
        <UseCaseSection key={i} reverse={i % 2 === 1} {...s} />
      ))}
      {stats && <StatsBar stats={stats} />}
      <CTASection title={ctaTitle} subtitle={ctaSubtitle} />
    </>
  );
}
