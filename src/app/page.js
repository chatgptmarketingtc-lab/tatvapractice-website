import { ScrollReveal, GradientBlob, Button } from '@/components/ui';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PracticeSizeSection from '@/components/sections/PracticeSizeSection';
import AIFeatureTabs from '@/components/sections/AIFeatureTabs';
import { StatsBar, CTASection, UseCaseSection, LogoCarousel } from '@/components/sections';

export const metadata = { title: 'TatvaPractice — AI-Powered Practice Management' };

const COMPLIANCE = [
  { label: 'HIPAA Compliant', icon: '🛡️' },
  { label: 'NHA Approved', icon: '🏛️' },
  { label: 'ABDM Certified', icon: '✅' },
  { label: 'ISO 27001', icon: '🔒' },
  { label: 'GDPR Compliant', icon: '🌐' },
];

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
  { question: 'What is TatvaPractice?', answer: 'TatvaPractice is an AI-powered cloud-based practice management and EMR system designed for Indian doctors, clinics, and hospitals. It includes smart prescriptions, appointment management, billing, patient records, and 20+ integrated modules.' },
  { question: 'How does AI-powered prescription work?', answer: 'TatvaPractice offers four AI prescription modes: VoiceRx (voice-to-prescription), SnapRx (photo-to-prescription), AmbientRx (conversation-to-notes), and manual entry. Each mode uses AI to structure, validate, and auto-populate prescriptions in seconds.' },
  { question: 'Is TatvaPractice ABDM compliant?', answer: 'Yes. TatvaPractice is fully integrated with ABDM (Ayushman Bharat Digital Mission) and supports ABHA ID creation, health record linking, and consent-based data sharing as per government guidelines.' },
  { question: 'Can I use it for my hospital or chain of clinics?', answer: 'Absolutely. TatvaPractice supports multi-location, multi-department setups with role-based access, centralized reporting, and enterprise-grade security. Contact our sales team for custom plans.' },
  { question: 'Is there a free trial?', answer: 'Yes — we offer a 7-day free trial with full access to all features including AI prescription modes, appointment management, and billing. No credit card required.' },
  { question: 'What support do you provide?', answer: 'We provide dedicated onboarding support, in-app chat, email, and phone support. Enterprise clients get a dedicated account manager and priority SLA-based support.' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Center Aligned, Figma-exact */}
      <section className="pt-36 lg:pt-44 pb-20 lg:pb-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #6B47BF 0%, #8B6BC7 20%, #B597D6 40%, #D4BCE6 60%, #EDE0F5 80%, #F5EFFA 100%)' }}>
        {/* Grain/Noise texture — fine coarse film grain */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]" style={{ mixBlendMode: 'overlay' }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* Subtle geometric grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

        <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
          {/* Tag Pill */}
          <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-gray-200/60 text-gray-500 text-[13px] font-medium px-6 py-2.5 rounded-full mb-10">
            Trusted AI-First EMR Platform
          </div>

          {/* Headline */}
          <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.02em] text-gray-900 mb-6">
            Everything you need to run<br />
            a <span className="text-[#5B2E91]">faster practice.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[16px] lg:text-[18px] text-white/70 leading-relaxed mb-10 max-w-lg mx-auto font-normal">
            TatvaPractice automates your clinical workflow so you can focus on delivering better patient care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mb-14">
            <a href="/" className="no-underline text-[16px] font-bold text-[#4F46E5] bg-white border-[1.5px] border-[#4F46E5] rounded-2xl px-12 py-4 hover:bg-[#F5F4FF] transition-colors min-w-[200px] shadow-sm">Book Demo</a>
            <a href="/" className="no-underline text-[16px] font-bold text-white rounded-2xl px-12 py-4 transition-all min-w-[200px] shadow-lg shadow-indigo-900/30 hover:shadow-xl" style={{ background: 'linear-gradient(135deg, #5046E5 0%, #3730A3 50%, #1E1B4B 100%)' }}>Start Free Trial</a>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {COMPLIANCE.map((c, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg px-3.5 py-2">
                <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center">
                  <span className="text-sm">{c.icon}</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-semibold text-gray-600 leading-tight block">{c.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator — Double Chevron */}
          <div className="flex justify-center">
            <svg className="w-6 h-8 text-gray-300 animate-bounce" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 8l5 5 5-5" />
              <path d="M7 16l5 5 5-5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Complete AI-First Practice Management — Dark Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 text-white relative overflow-hidden rounded-t-[40px] -mt-6">
        <div className="max-w-container mx-auto px-8 text-center">
          <ScrollReveal variant="fadeUp">
            <h2 className="text-2xl lg:text-[36px] font-black mb-4 text-white">
              Complete AI-First<br />Practice Management in One System
            </h2>
            <p className="text-white/60 text-[15px] max-w-2xl mx-auto mb-12">
              From appointments to prescriptions to billing — everything your practice needs, powered by AI and built for India.
            </p>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MANAGEMENT_FEATURES.map((f, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors text-left">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-2xl mb-4">{f.icon}</div>
                  <h3 className="text-[15px] font-extrabold text-white mb-2">{f.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Scale */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-8">
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-center mb-14 text-gray-900">Our Scale</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { value: '10 Lakh+', label: 'Patients Served' },
              { value: '12 Lakh+', label: 'Digital Rx created' },
              { value: '10,000+', label: 'Doctors onboarded' },
              { value: '10+', label: 'Language support' },
              { value: '25+', label: 'Specialities' },
              { value: '200+', label: 'Cities Servicable' },
            ].map((s, i) => (
              <div key={i} className="relative bg-gradient-to-br from-purple-50/50 to-white rounded-2xl p-6 text-center border border-purple-100/30 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #7C4DBC 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
                <div className="relative z-10">
                  <div className="text-xl lg:text-2xl font-extrabold text-[#5B2E91] mb-1">{s.value}</div>
                  <div className="text-[13px] text-gray-500 font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built-In AI to Supercharge Your Workflow — Interactive Tabs */}
      <AIFeatureTabs />

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
