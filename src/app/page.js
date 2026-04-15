import { HeroSection, LogoCarousel, UseCaseSection, StatsBar, CTASection, ProductHeroVisual } from '@/components/sections';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PracticeSizeSection from '@/components/sections/PracticeSizeSection';

export const metadata = { title: 'TatvaPractice — AI-Powered Practice Management | TatvaCare' };

const MANAGEMENT_FEATURES = [
  { icon: '📋', title: 'Appointments', description: 'Smart scheduling with automated reminders and calendar sync for seamless patient management.' },
  { icon: '💊', title: 'Prescriptions', description: 'AI-powered prescription writing in seconds with VoiceRx, SnapRx, and AmbientRx modes.' },
  { icon: '🧾', title: 'Billing & Invoicing', description: 'Automated billing, GST invoicing, and payment tracking with integrated payment gateway.' },
  { icon: '📊', title: 'Reports & Analytics', description: 'Comprehensive dashboards with patient trends, revenue insights, and practice performance.' },
  { icon: '🗂️', title: 'Patient Records', description: 'Complete digital health records with ABDM integration and longitudinal patient history.' },
  { icon: '🔔', title: 'Notifications & Recalls', description: 'Automated follow-up reminders, vaccination alerts, and patient engagement campaigns.' },
];

const AI_FEATURES = [
  { icon: '🎤', title: 'VoiceRx', description: 'Dictate prescriptions in any language. AI transcribes, structures, and auto-populates in real-time.' },
  { icon: '📸', title: 'SnapRx', description: 'Photograph handwritten prescriptions. Healthcare-grade OCR extracts and digitizes instantly.' },
  { icon: '🎙️', title: 'AmbientRx', description: 'AI listens to doctor-patient conversations and auto-generates structured clinical notes.' },
  { icon: '🧬', title: 'DDx Engine', description: 'Ranked differential diagnoses, drug interaction alerts, and evidence-based suggestions.' },
];

const EHR_FEATURES = [
  { icon: '📝', title: 'Clinical Notes', description: 'SOAP notes, templates, and auto-generated documentation from voice or ambient capture.' },
  { icon: '💉', title: 'Vaccination Tracker', description: 'Complete immunization schedules with automated reminders for patients and providers.' },
  { icon: '🔬', title: 'Lab Integration', description: 'Direct lab ordering, result tracking, and AI-powered interpretation of reports.' },
  { icon: '📱', title: 'Telehealth', description: 'Built-in video consultations with digital prescription and payment integration.' },
];

const WORKFLOW_POINTS = [
  'Patient check-in to checkout in one seamless flow',
  'Auto-populated patient history from previous visits',
  'Smart templates that adapt to each specialty',
  'Integrated lab ordering and result tracking',
  'One-click referral letters and discharge summaries',
];

const PRACTICE_SIZES = [
  {
    icon: '🏥',
    title: 'For Clinics & Solo Practices',
    description: 'Everything a solo practitioner or small clinic needs to go digital from day one.',
    features: ['Cloud-based EMR with zero setup', 'AI-powered prescription writing', 'Appointment booking & reminders', 'Billing & payment collection', 'Patient engagement tools'],
    buttonText: 'Start Free Trial',
    buttonLink: '/',
  },
  {
    icon: '🏢',
    title: 'Hospitals & Multi-Location',
    description: 'Enterprise-grade features for hospitals, chains, and multi-location healthcare networks.',
    features: ['Multi-department & multi-location support', 'Role-based access control', 'Advanced reporting & analytics', 'ABDM & ABHA integration', 'Dedicated account manager'],
    buttonText: 'Contact Sales',
    buttonLink: '/',
  },
];

const TESTIMONIALS = [
  { quote: 'TatvaPractice has cut our prescription time by 70%. The VoiceRx feature alone has transformed how we manage OPD.', name: 'Dr. Rajesh Patel', role: 'Cardiologist', org: 'HeartCare Clinic, Ahmedabad' },
  { quote: 'We moved 3 clinics to TatvaPractice in under a week. The onboarding was seamless and the team is incredibly responsive.', name: 'Dr. Priya Sharma', role: 'Clinic Director', org: 'Wellness First, Mumbai' },
  { quote: 'The DDx Engine has been a game-changer for my residents. It helps them think through differentials more systematically.', name: 'Dr. Anand Kumar', role: 'HOD Medicine', org: 'City General Hospital, Delhi' },
];

const FAQS = [
  { question: 'What is TatvaPractice?', answer: 'TatvaPractice is an AI-powered cloud-based practice management and EMR system designed for Indian doctors, clinics, and hospitals. It includes smart prescriptions, appointment management, billing, patient records, and 20+ integrated modules — all powered by Zyvelor AI.' },
  { question: 'How does AI-powered prescription work?', answer: 'TatvaPractice offers four AI prescription modes: VoiceRx (voice-to-prescription), SnapRx (photo-to-prescription), AmbientRx (conversation-to-notes), and manual entry. Each mode uses Zyvelor AI to structure, validate, and auto-populate prescriptions in seconds.' },
  { question: 'Is TatvaPractice ABDM compliant?', answer: 'Yes. TatvaPractice is fully integrated with ABDM (Ayushman Bharat Digital Mission) and supports ABHA ID creation, health record linking, and consent-based data sharing as per government guidelines.' },
  { question: 'Can I use it for my hospital or chain of clinics?', answer: 'Absolutely. TatvaPractice supports multi-location, multi-department setups with role-based access, centralized reporting, and enterprise-grade security. Contact our sales team for custom plans.' },
  { question: 'Is there a free trial?', answer: 'Yes — we offer a 7-day free trial with full access to all features including AI prescription modes, appointment management, and billing. No credit card required.' },
  { question: 'What support do you provide?', answer: 'We provide dedicated onboarding support, in-app chat, email, and phone support. Enterprise clients get a dedicated account manager and priority SLA-based support.' },
];

export default function TatvaPracticePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        tag="AI-Powered Practice Management"
        title='Everything you need to run<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">a faster practice.</em>'
        subtitle="TatvaPractice is the complete AI-first practice management system that helps doctors see more patients, write prescriptions in seconds, and grow their practice — all in one platform."
        buttons={[{ text: 'Get Started →' }, { text: 'Watch Demo', variant: 'outline' }]}
        visual={<ProductHeroVisual icon="💊" name="TatvaPractice" desc="Cloud EMR · Practice Management" pills={['VoiceRx', 'SnapRx', 'Billing', 'EHR']} />}
      />

      {/* Logo Carousel */}
      <LogoCarousel label="Trusted by leading healthcare organizations" />

      {/* Complete AI-First Practice Management */}
      <FeatureGrid
        tag="All-in-One Platform"
        title="Complete AI-First Practice Management in One System"
        subtitle="From appointments to prescriptions to billing — everything your practice needs, powered by AI and built for India."
        features={MANAGEMENT_FEATURES}
        columns={3}
      />

      {/* Our Scale */}
      <StatsBar stats={[
        { value: 50000, suffix: '+', label: 'Doctors Registered' },
        { value: 20, suffix: '+', label: 'Specialties Supported' },
        { value: 12, suffix: 's', label: 'Avg Prescription Time' },
        { value: 19, suffix: '', label: 'Feature Modules' },
      ]} />

      {/* Built-in AI to Supercharge Your Workflow */}
      <UseCaseSection
        icon="🤖"
        name="TatvaRx"
        desc="AI Prescription Engine"
        category="Built-in AI"
        title="Built-in AI to Supercharge Your Workflow"
        body="TatvaPractice comes with Zyvelor AI built in — powering four distinct prescription modes, clinical decision support, and smart automation across your entire workflow."
        points={['VoiceRx — Speak prescriptions in any language', 'SnapRx — Photograph and digitize handwritten Rx', 'AmbientRx — Auto-generate notes from conversations', 'DDx Engine — AI-powered differential diagnosis']}
        link="/zyvelor"
        linkText="Learn about Zyvelor AI →"
      />

      {/* AI Features Grid */}
      <FeatureGrid
        title="Four AI Prescription Modes"
        subtitle="Write prescriptions your way — by voice, camera, ambient listening, or traditional entry. All powered by Zyvelor AI."
        features={AI_FEATURES}
        columns={4}
      />

      {/* EHR Section */}
      <section className="py-16 lg:py-24 bg-g-1">
        <div className="max-w-container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-[32px] font-black mb-3">An EHR that streamlines all your needs</h2>
            <p className="text-[15px] text-g-4 max-w-2xl mx-auto">Complete electronic health records with smart templates, lab integration, and everything you need for comprehensive patient care.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EHR_FEATURES.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mx-auto mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-extrabold text-g-6 mb-2">{f.title}</h3>
                <p className="text-[13px] text-g-3 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streamline Clinical Workflows */}
      <UseCaseSection
        reverse
        icon="⚡"
        name="Workflows"
        desc="Clinical Automation"
        iconBg="linear-gradient(135deg, #10b981, #059669)"
        category="Streamline Operations"
        title="Streamline Clinical Workflows"
        body="From patient check-in to checkout, TatvaPractice automates every step of the clinical workflow — reducing manual work, minimizing errors, and giving doctors more time with patients."
        points={WORKFLOW_POINTS}
      />

      {/* Built for Every Practice Size */}
      <PracticeSizeSection cards={PRACTICE_SIZES} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* FAQ */}
      <FAQSection faqs={FAQS} />

      {/* CTA */}
      <CTASection
        title="Start Your Free 7-Day Trial"
        subtitle="Join 50,000+ doctors already using TatvaPractice. No credit card required — get started in under 2 minutes."
      />
    </>
  );
}
