import { HeroSection, UseCaseSection, StatsBar, CTASection, SectionHeader } from '@/components/sections';
import { ScrollReveal, TiltCard } from '@/components/ui';

export const metadata = { title: 'Zyvelor AI — Healthcare AI Centre of Excellence | TatvaCare' };

export default function ZyvelorPage() {
  const agents = [
    { icon: '🎤', name: 'VoiceRx', desc: 'Speech-to-Rx' },
    { icon: '📸', name: 'SnapRx', desc: 'Photo-to-Rx' },
    { icon: '🧬', name: 'DDx Engine', desc: 'Diagnosis scoring' },
    { icon: '🎙️', name: 'AmbientRx', desc: 'Ambient capture' },
    { icon: '📄', name: 'DocExtract', desc: 'OCR pipeline' },
    { icon: '💊', name: 'DrugCheck', desc: 'Interaction alerts' },
    { icon: '🧪', name: 'LabAnalyzer', desc: 'Lab interpretation' },
    { icon: '📊', name: 'RiskScore', desc: 'Patient stratification' },
    { icon: '🤖', name: 'HealthCoach', desc: 'AI guidance' },
  ];

  return (
    <>
      <HeroSection
        tag="AI Centre of Excellence"
        title='Healthcare-native AI,<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">in production.</em>'
        subtitle="Zyvelor is TatvaCare's AI Centre of Excellence. 20+ purpose-built agents trained on real clinical data, powering products and available as standalone services."
        gradient="from-dark-900 via-dark-800 to-brand-700"
        buttons={[{ text: 'Explore AI Services →', variant: 'white' }, { text: 'API Documentation', variant: 'ghost' }]}
        visual={
          <div className="grid grid-cols-3 gap-3 relative">
            {agents.map((a, i) => (
              <TiltCard key={i} className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <div className="text-xl mb-1">{a.icon}</div>
                <div className="text-[11px] font-bold text-white/90">{a.name}</div>
                <div className="text-[9px] text-white/40">{a.desc}</div>
              </TiltCard>
            ))}
          </div>
        }
      />
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-8">
          <SectionHeader label="How It Works" title="The AI Flywheel" subtitle="Every interaction makes every product smarter. Data flows from clinical encounters through Zyvelor, generating insights that improve care across the entire ecosystem." />
          <ScrollReveal variant="staggerFast">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { num: '01', title: 'Capture', desc: 'Clinical data flows in from TatvaPractice encounters, GoodFlip health tracking, and Evalus research.' },
                { num: '02', title: 'Process', desc: 'Zyvelor AI agents extract, structure, and analyze clinical entities. NLP, computer vision, and predictive models work in concert.' },
                { num: '03', title: 'Improve', desc: 'Insights flow back into products as better suggestions, smarter alerts, and more accurate predictions. The flywheel spins faster.' },
              ].map((step, i) => (
                <div key={i} className="stagger-child text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center text-xl font-black mx-auto mb-4">{step.num}</div>
                  <h3 className="text-lg font-extrabold mb-2">{step.title}</h3>
                  <p className="text-sm text-g-4 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <UseCaseSection icon="🎤" name="Voice & Clinical AI" desc="4 Rx Modes" category="Clinical AI" title="Four ways to write a prescription with AI." body="VoiceRx, SnapRx, AmbientRx, and TypeRx give doctors unprecedented flexibility. Multi-language support, offline capability, and real-time clinical validation." points={['Multi-language voice recognition (Hindi, English, regional)', 'Healthcare-grade handwriting OCR', 'Ambient consultation capture and SOAP note generation', 'Real-time drug interaction checking']} link="/products/tatvapractice" linkText="See it in TatvaPractice →" />
      <UseCaseSection reverse icon="📄" name="Document Extractor" desc="Standalone API" iconBg="linear-gradient(135deg, #3b82f6, #1d4ed8)" category="Standalone Product" title="Healthcare-grade OCR, available as an API." body="Extract structured data from prescriptions, invoices, lab reports, and insurance documents. Pre-trained on millions of Indian healthcare documents. REST API with 99%+ accuracy." points={['Prescription extraction (drug, dose, frequency, duration)', 'Lab report parsing with reference range flagging', 'Insurance document processing', 'Available as pay-per-call or enterprise subscription']} />
      <UseCaseSection icon="📈" name="Velora" desc="NLQ Platform" iconBg="linear-gradient(135deg, #10b981, #059669)" category="Standalone Product" title="Query healthcare data in plain English." body="Velora lets researchers, CROs, and hospital teams ask questions about their data in natural language. No SQL required. Built specifically for healthcare data models and terminology." points={['Natural language to SQL translation', 'Healthcare-specific data model understanding', 'Automated visualization and report generation', 'Role-based access control and audit trails']} />
      <StatsBar stats={[{ value: 20, suffix: '+', label: 'AI Agents' }, { value: 99, suffix: '%', label: 'OCR Accuracy' }, { value: 12, suffix: 's', label: 'Avg Processing Time' }, { value: 5, suffix: 'M+', label: 'Documents Processed' }]} />
      <CTASection title="Explore Zyvelor AI Services" subtitle="Whether you need standalone AI APIs or a custom implementation partner, Zyvelor has you covered." />
    </>
  );
}
