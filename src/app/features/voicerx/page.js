import { HeroSection, UseCaseSection, StatsBar, CTASection, FAQSection, FeatureGrid, ProductHeroVisual } from '@/components/sections';
import { ScrollReveal, Button } from '@/components/ui';
import { Mic, Languages, AudioLines, Pill, WifiOff, ShieldAlert, LayoutTemplate, Hospital, Baby, Home, Brain } from 'lucide-react';

export const metadata = { title: 'VoiceRx — Voice-to-Prescription AI | TatvaPractice' };

const CORE_FEATURES = [
  { icon: <Languages className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Multi-Language Support', description: 'Dictate prescriptions in Hindi, English, Tamil, Bengali, or any regional language. VoiceRx understands medical terminology across languages and scripts.' },
  { icon: <AudioLines className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Real-Time Transcription', description: 'See your words convert to structured prescriptions as you speak. No waiting, no lag — instant clinical documentation at the speed of thought.' },
  { icon: <Pill className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Auto-Fill Drug Database', description: 'As you dictate, VoiceRx auto-suggests drug names, dosages, and formulations from a curated database of 100,000+ medicines available in India.' },
  { icon: <WifiOff className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Offline Mode', description: 'No internet? No problem. VoiceRx works fully offline with on-device processing, syncing automatically when connectivity returns.' },
  { icon: <ShieldAlert className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Drug Interaction Alerts', description: 'Real-time alerts for contraindications, duplicate therapies, and dosage warnings as you dictate — catching errors before they reach the patient.' },
  { icon: <LayoutTemplate className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Smart Templates', description: 'Specialty-specific voice templates that learn your prescribing patterns over time, making repeat prescriptions faster with each use.' },
];

const HOW_IT_WORKS_STEPS = [
  'Tap the microphone and start speaking naturally',
  'VoiceRx transcribes and structures your words in real-time',
  'Drug names, dosages, and instructions are auto-populated',
  'Review, edit if needed, and finalize with one tap',
];

const ACCURACY_POINTS = [
  'Trained on 10M+ Indian clinical consultations',
  'Context-aware medical NLP — understands shorthand and abbreviations',
  'Continuous learning from doctor corrections and feedback',
  'Validated against pharmacopeia for drug name accuracy',
];

const FAQS = [
  { question: 'Which languages does VoiceRx support?', answer: 'VoiceRx supports Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, and Punjabi. Our AI is trained on medical terminology across all supported languages, including code-switching between Hindi and English.' },
  { question: 'Does VoiceRx work without an internet connection?', answer: 'Yes. VoiceRx includes a fully functional offline mode that processes speech on-device. Prescriptions created offline are automatically synced to the cloud when connectivity returns, ensuring zero data loss.' },
  { question: 'How accurate is the voice-to-prescription transcription?', answer: 'VoiceRx achieves over 97% accuracy on medical terminology, trained on more than 10 million Indian clinical consultations. The system continuously improves by learning from doctor corrections and specialty-specific patterns.' },
  { question: 'Can VoiceRx handle complex multi-drug prescriptions?', answer: 'Absolutely. VoiceRx handles multi-drug prescriptions with ease, automatically structuring each medication with drug name, dosage, frequency, duration, and special instructions. It also runs real-time drug interaction checks across all prescribed medications.' },
];

export default function VoiceRxPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        tag="AI Prescription Mode"
        title='Speak it.<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">Done.</em>'
        subtitle="Dictate prescriptions in any language. VoiceRx transcribes, structures, and auto-populates medications in real-time — turning a 3-minute prescription into a 12-second voice command."
        buttons={[{ text: 'Try VoiceRx Free →' }, { text: 'Watch Demo', variant: 'outline' }]}
        visual={<ProductHeroVisual icon={<Mic className="text-white" size={22} strokeWidth={1.5} />} name="VoiceRx" desc="Voice-to-Prescription AI" pills={['Multi-Language', 'Real-Time', 'Offline Ready', 'Drug Checks']} />}
      />

      {/* Stats */}
      <StatsBar stats={[
        { value: 12, suffix: 's', label: 'Avg Prescription Time' },
        { value: 97, suffix: '%', label: 'Transcription Accuracy' },
        { value: 10, suffix: '+', label: 'Languages Supported' },
        { value: 100, suffix: 'K+', label: 'Drugs in Database' },
      ]} />

      {/* Core Features */}
      <FeatureGrid
        tag="Core Capabilities"
        title="Everything You Need to Prescribe by Voice"
        subtitle="VoiceRx combines medical-grade speech recognition with a comprehensive drug database and real-time clinical validation."
        features={CORE_FEATURES}
        columns={3}
      />

      {/* How It Works */}
      <UseCaseSection
        icon={<Mic className="text-white" size={22} strokeWidth={1.5} />}
        name="VoiceRx"
        desc="Voice-to-Prescription"
        category="How It Works"
        title="From spoken word to structured prescription in seconds"
        body="VoiceRx uses a purpose-built medical NLP engine that understands clinical context, not just words. Speak naturally in any supported language, and watch your prescription take shape in real-time."
        points={HOW_IT_WORKS_STEPS}
        pills={['Hindi', 'English', 'Tamil', 'Bengali', '10+ Languages']}
        link="/products/tatvapractice"
        linkText="Explore TatvaPractice →"
      />

      {/* Clinical Accuracy Section */}
      <UseCaseSection
        reverse
        icon={<Brain className="text-white" size={22} strokeWidth={1.5} />}
        name="Medical NLP"
        desc="Clinical Intelligence"
        iconBg="linear-gradient(135deg, #f59e0b, #d97706)"
        category="Clinical Accuracy"
        title="Built for medical precision, not general dictation"
        body="Unlike generic voice assistants, VoiceRx is trained exclusively on clinical data. It understands medical shorthand, drug abbreviations, and specialty-specific terminology — delivering pharmacopeia-grade accuracy every time."
        points={ACCURACY_POINTS}
      />

      {/* Use Case Scenarios */}
      <section className="py-16 lg:py-24 bg-g-1">
        <div className="max-w-container mx-auto px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-[32px] font-black mb-3">Built for Every Clinical Scenario</h2>
              <p className="text-[15px] text-g-4 max-w-2xl mx-auto">Whether it is a routine OPD consultation or a complex multi-drug prescription, VoiceRx adapts to your workflow.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Hospital className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'High-Volume OPD', desc: 'See 50+ patients a day without compromising on documentation. VoiceRx keeps up with even the busiest clinics.' },
                { icon: <Baby className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Pediatrics & Dosing', desc: 'Weight-based dosage calculations and age-appropriate formulations are automatically suggested as you dictate.' },
                { icon: <Home className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Home Visits & Camps', desc: 'Offline mode ensures VoiceRx works at health camps, home visits, and rural areas with limited connectivity.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center stagger-child">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-2xl mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-[15px] font-extrabold text-g-6 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-g-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="VoiceRx FAQ" faqs={FAQS} />

      {/* CTA */}
      <CTASection
        title="Start Prescribing by Voice Today"
        subtitle="Try VoiceRx free for 7 days. No credit card required — just tap, speak, and prescribe."
      />
    </>
  );
}
