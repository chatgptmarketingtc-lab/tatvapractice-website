import { HeroSection, UseCaseSection, StatsBar, CTASection, FAQSection, FeatureGrid, ProductHeroVisual } from '@/components/sections';
import { ScrollReveal, Button } from '@/components/ui';
import { Brain, AlertTriangle, FlaskConical, BookOpen, BarChart3, MessageSquare, Stethoscope, Pill, Search } from 'lucide-react';

export const metadata = { title: 'Doctor Agent — AI Clinical Assistant | TatvaPractice' };

const CORE_FEATURES = [
  { icon: <Brain className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Differential Diagnosis Engine', description: 'Enter symptoms, vitals, and history — get a ranked list of differential diagnoses with probability scores, supporting evidence, and recommended workup for each.' },
  { icon: <AlertTriangle className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Drug Interaction Alerts', description: 'Real-time screening of all prescribed medications against a comprehensive interaction database. Flags contraindications, duplicate therapies, and dosage concerns before you finalize.' },
  { icon: <FlaskConical className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Lab Report Interpretation', description: 'Upload lab reports and get AI-powered interpretation with clinical context — abnormal values highlighted, trends tracked over time, and differential implications explained.' },
  { icon: <BookOpen className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Evidence-Based Suggestions', description: 'Treatment suggestions linked to current clinical guidelines, peer-reviewed literature, and Indian medical protocols. Every recommendation comes with a citation trail.' },
  { icon: <BarChart3 className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Patient Risk Scoring', description: 'Continuous risk stratification using patient history, comorbidities, medications, and lab trends. Proactively identifies patients who need closer monitoring.' },
  { icon: <MessageSquare className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Clinical Query Assistant', description: 'Ask clinical questions in natural language and get evidence-backed answers instantly. From drug dosages to diagnostic criteria — your medical knowledge base at hand.' },
];

const HOW_IT_WORKS_STEPS = [
  'Doctor Agent runs alongside your consultation workflow automatically',
  'It analyzes symptoms, vitals, medications, and patient history in real-time',
  'Differential diagnoses, alerts, and suggestions appear as contextual cards',
  'Accept, dismiss, or modify recommendations — the AI learns from your decisions',
];

const CLINICAL_INTELLIGENCE_POINTS = [
  'Knowledge base covers 15,000+ conditions and 100,000+ drugs',
  'Updated continuously with latest clinical guidelines and drug approvals',
  'Specialty-aware — adapts suggestions to your field of practice',
  'Learns from your diagnostic patterns to provide increasingly relevant support',
];

const FAQS = [
  { question: 'Does Doctor Agent replace clinical judgment?', answer: 'Absolutely not. Doctor Agent is a decision-support tool, not a decision-making tool. It provides evidence-based suggestions, differential diagnoses, and alerts — but every clinical decision remains with the physician. Think of it as a highly knowledgeable colleague offering a second opinion in real-time.' },
  { question: 'How current is the medical knowledge base?', answer: 'Doctor Agent\'s knowledge base is updated monthly with the latest drug approvals, clinical guideline revisions, and evidence from peer-reviewed literature. Drug interaction databases are updated weekly. All sources are cited and traceable.' },
  { question: 'Can Doctor Agent handle specialty-specific cases?', answer: 'Yes. Doctor Agent adapts to your specialty — whether you practice cardiology, pediatrics, dermatology, or general medicine. It adjusts its differential diagnosis rankings, drug suggestions, and clinical pathways based on your specialty context and patient demographics.' },
  { question: 'Is patient data used to train the AI?', answer: 'No. Patient data is never used for model training. Doctor Agent uses de-identified clinical patterns for improving its algorithms, but individual patient records are processed in real-time and never stored for training purposes. All processing complies with DPDPA regulations.' },
];

export default function DoctorAgentPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        tag="Zyvelor AI"
        title='AI that thinks<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">alongside you.</em>'
        subtitle="Doctor Agent is your AI clinical assistant — providing real-time differential diagnoses, drug interaction alerts, lab interpretation, and evidence-based treatment suggestions right inside your consultation workflow."
        buttons={[{ text: 'Try Doctor Agent Free →' }, { text: 'View Clinical Demo', variant: 'outline' }]}
        visual={<ProductHeroVisual icon={<Brain className="text-white" size={24} strokeWidth={2} />} name="Doctor Agent" desc="AI Clinical Assistant" pills={['DDx Engine', 'Drug Alerts', 'Lab AI', 'Evidence-Based']} />}
      />

      {/* Stats */}
      <StatsBar stats={[
        { value: 15, suffix: 'K+', label: 'Conditions Covered' },
        { value: 100, suffix: 'K+', label: 'Drug Interactions Tracked' },
        { value: 2, suffix: 's', label: 'Avg DDx Response Time' },
        { value: 50, suffix: '+', label: 'Clinical Guidelines Integrated' },
      ]} />

      {/* Core Features */}
      <FeatureGrid
        tag="Clinical Intelligence"
        title="Your AI-Powered Second Opinion"
        subtitle="Doctor Agent combines medical knowledge graphs, clinical guidelines, and real-time patient data to surface the insights that matter most during every consultation."
        features={CORE_FEATURES}
        columns={3}
      />

      {/* How It Works */}
      <UseCaseSection
        icon={<Brain className="text-white" size={24} strokeWidth={2} />}
        name="Doctor Agent"
        desc="Clinical Assistant"
        category="How It Works"
        title="Contextual intelligence, not interruptions"
        body="Doctor Agent does not bombard you with alerts. It watches the clinical context silently and surfaces relevant suggestions only when they add value — a potential missed diagnosis, a critical drug interaction, or a guideline-recommended workup you might want to consider."
        points={HOW_IT_WORKS_STEPS}
        pills={['DDx', 'Drug Safety', 'Lab AI', 'Guidelines']}
        link="/products/tatvapractice"
        linkText="Explore TatvaPractice →"
      />

      {/* Clinical Intelligence Section */}
      <UseCaseSection
        reverse
        icon={<Search className="text-white" size={24} strokeWidth={2} />}
        name="Knowledge Engine"
        desc="Medical Intelligence"
        iconBg="linear-gradient(135deg, #8b5cf6, #6d28d9)"
        category="Knowledge Base"
        title="15,000+ conditions. 100,000+ drugs. Always current."
        body="Doctor Agent draws from a continuously updated medical knowledge graph covering conditions, medications, interactions, lab values, and clinical pathways. Every suggestion is backed by evidence — and every evidence trail is traceable to its source."
        points={CLINICAL_INTELLIGENCE_POINTS}
      />

      {/* Use Case Scenarios */}
      <section className="py-16 lg:py-24 bg-g-1">
        <div className="max-w-container mx-auto px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-[32px] font-black mb-3">Real Clinical Scenarios, Real Impact</h2>
              <p className="text-[15px] text-g-4 max-w-2xl mx-auto">Doctor Agent adds value across every stage of the clinical encounter — from initial assessment to treatment planning.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Stethoscope className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Complex Differentials', desc: 'A patient presents with atypical chest pain. Doctor Agent ranks cardiac, GI, musculoskeletal, and anxiety-related causes by probability, suggesting targeted workup for each.' },
                { icon: <Pill className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Polypharmacy Safety', desc: 'An elderly patient on 8+ medications. Doctor Agent screens every new prescription against existing drugs, flagging interactions the busiest clinician might miss.' },
                { icon: <FlaskConical className="text-[#6D28D9]" size={24} strokeWidth={2} />, title: 'Lab Trend Analysis', desc: 'HbA1c trending upward over three visits. Doctor Agent highlights the trend, correlates with current medications, and suggests guideline-based escalation options.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center stagger-child">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-[15px] font-extrabold text-g-6 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-g-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Doctor Agent FAQ" faqs={FAQS} />

      {/* CTA */}
      <CTASection
        title="Smarter Decisions. Better Outcomes."
        subtitle="Try Doctor Agent free for 7 days. Experience AI clinical support that actually understands medicine."
      />
    </>
  );
}
