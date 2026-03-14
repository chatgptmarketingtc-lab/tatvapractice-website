import { HeroSection, LogoCarousel, UseCaseSection, StatsBar, CTASection, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'Evalus — Real-World Evidence Platform | TatvaCare' };

export default function EvalusPage() {
  return (
    <>
      <HeroSection
        tag="Real-World Evidence Platform"
        title='Real-world evidence,<br/><em class="not-italic bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">from real patients.</em>'
        subtitle="Evalus turns structured clinical data from TatvaPractice into publication-ready real-world evidence. Build registries, run outcomes studies, and accelerate research."
        gradient="from-white via-amber-50 to-amber-100"
        buttons={[{ text: 'Schedule Consultation →' }, { text: 'View Case Studies', variant: 'outline' }]}
        visual={<ProductHeroVisual icon="📊" name="Evalus" desc="RWE · Clinical Research" iconBg="linear-gradient(135deg, #f59e0b, #d97706)" pills={['Registries', 'Outcomes', 'Publications', 'Analytics']} />}
      />
      <LogoCarousel />
      <UseCaseSection icon="📋" name="Patient Registries" desc="Structured Data Collection" iconBg="linear-gradient(135deg, #f59e0b, #d97706)" category="Data Foundation" title="Build patient registries 10x faster." body="Evalus plugs into TatvaPractice workflows to capture structured clinical data at the point of care. No manual data entry, no retrofit. Registries build themselves as doctors use the EMR." points={['Zero additional data entry for doctors', 'Real-time data capture from clinical workflows', 'Condition-specific registry templates', 'ABDM-compliant data aggregation']} />
      <UseCaseSection reverse icon="📈" name="Outcomes Research" desc="AI-Powered Analysis" iconBg="linear-gradient(135deg, #3b82f6, #1d4ed8)" category="Research & Insights" title="From raw data to publication-ready insights." body="AI-powered analysis pipelines transform registry data into research-grade outputs. Generate safety profiles, effectiveness data, and comparative analyses with statistical rigor." points={['Automated statistical analysis pipelines', 'Safety signal detection and monitoring', 'Comparative effectiveness research', 'Publication-ready tables and figures']} />
      <UseCaseSection icon="✍️" name="Medical Writing" desc="AI-Assisted Publications" iconBg="linear-gradient(135deg, #10b981, #059669)" category="Publications" title="Accelerate time-to-publication." body="Evalus assists with manuscript drafting, abstract generation, and poster creation. AI handles the first draft; researchers refine. Cut publication timelines from months to weeks." points={['AI-generated first drafts and abstracts', 'Automated reference management', 'Poster and presentation generation', 'Journal-specific formatting templates']} />
      <StatsBar stats={[{ value: 3000, suffix: '+', label: 'Patients in Registries' }, { value: 6, suffix: ' mo', label: 'Avg Registry Build Time' }, { value: 15, suffix: '+', label: 'Active Studies' }, { value: 99.2, suffix: '%', label: 'Data Quality Score', decimals: 1 }]} />
      <CTASection title="Accelerate your real-world evidence" subtitle="Partner with Evalus to build patient registries and generate publication-ready evidence from real Indian patient data." />
    </>
  );
}
