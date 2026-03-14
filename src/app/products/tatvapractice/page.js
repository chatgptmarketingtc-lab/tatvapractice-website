import { HeroSection, LogoCarousel, UseCaseSection, StatsBar, CTASection, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'TatvaPractice — AI-Powered Cloud EMR | TatvaCare' };

export default function TatvaPracticePage() {
  return (
    <>
      <HeroSection
        tag="AI-Powered Cloud EMR"
        title='Write prescriptions in seconds.<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">Not minutes.</em>'
        subtitle="TatvaPractice is the AI-powered Cloud EMR that gives doctors four ways to write a prescription. Built for the Indian clinic, certified by ABDM, and powered by 20+ Zyvelor AI agents."
        buttons={[{ text: 'Start Free Trial →' }, { text: 'Watch Demo', variant: 'outline' }]}
        visual={<ProductHeroVisual icon="💊" name="TatvaPractice" desc="Cloud EMR · ABDM Certified" pills={['VoiceRx', 'SnapRx', 'AmbientRx', 'DDx Engine']} />}
      />
      <LogoCarousel />
      <UseCaseSection icon="🎤" name="VoiceRx" desc="Voice-to-Prescription" category="AI Rx Mode 1" title="Speak it. Done." body="Dictate prescriptions in any language — Hindi, English, regional languages. Zyvelor AI transcribes, structures, and auto-populates the prescription in real-time." points={['Multi-language voice recognition', 'Real-time transcription and structuring', 'Auto-fill drug names, dosages, and instructions', 'Works offline with on-device processing']} link="/zyvelor" linkText="Learn about Zyvelor AI →" />
      <UseCaseSection reverse icon="📸" name="SnapRx" desc="Photo-to-Prescription" iconBg="linear-gradient(135deg, #3b82f6, #1d4ed8)" category="AI Rx Mode 2" title="Photograph a handwritten Rx. AI does the rest." body="Point your phone at any handwritten prescription. SnapRx uses healthcare-grade OCR to extract medication names, dosages, and instructions — converting messy handwriting into structured data." points={['Healthcare-grade handwriting OCR', 'Extracts drug names, dosages, and frequencies', 'Cross-references with drug database', 'Handles abbreviations and medical shorthand']} />
      <UseCaseSection icon="🎙️" name="AmbientRx" desc="Ambient Capture" iconBg="linear-gradient(135deg, #10b981, #059669)" category="AI Rx Mode 3" title="Just talk to your patient. AI writes the note." body="AmbientRx listens to the doctor-patient conversation in real-time, extracts clinical entities, and auto-generates a structured clinical note and prescription. The doctor just validates." points={['Passive listening during consultations', 'SOAP note auto-generation', 'Clinical entity extraction (symptoms, vitals, diagnosis)', 'Doctor reviews and approves — never auto-publishes']} />
      <UseCaseSection reverse icon="🧬" name="DDx Engine" desc="Clinical Decision Support" iconBg="linear-gradient(135deg, #f59e0b, #d97706)" category="Clinical Intelligence" title="AI that thinks alongside you." body="The DDx Engine analyzes symptoms, lab results, and patient history to generate ranked differential diagnoses. Flags drug interactions. Suggests investigations. Backed by clinical guidelines." points={['Ranked differential diagnosis scoring', 'Drug-drug and drug-food interaction alerts', 'Lab result interpretation with context', 'Evidence-based investigation suggestions']} />
      <StatsBar stats={[{ value: 50000, suffix: '+', label: 'Doctors Registered' }, { value: 20, suffix: '+', label: 'Specialties Supported' }, { value: 12, suffix: 's', label: 'Avg Prescription Time' }, { value: 19, suffix: '', label: 'Feature Modules' }]} />
      <CTASection title="Ready to transform your practice?" subtitle="Join 50,000+ doctors already using TatvaPractice to see more patients, write better prescriptions, and grow their practice." />
    </>
  );
}
