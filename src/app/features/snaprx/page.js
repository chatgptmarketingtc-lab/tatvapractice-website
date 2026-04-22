import { HeroSection, UseCaseSection, StatsBar, CTASection, FAQSection, FeatureGrid, ProductHeroVisual } from '@/components/sections';
import { ScrollReveal, Button } from '@/components/ui';
import { Camera, ScanLine, Pill, FileText, Link, LayoutGrid, RefreshCw, Brain, Hospital, ClipboardList } from 'lucide-react';

export const metadata = { title: 'SnapRx — Photo-to-Prescription AI | TatvaPractice' };

const CORE_FEATURES = [
  { icon: <ScanLine className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Healthcare-Grade OCR', description: 'Purpose-built optical character recognition trained on millions of handwritten Indian prescriptions — not generic document scanning, but clinical-grade extraction.' },
  { icon: <Pill className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Drug Name Extraction', description: 'Identifies and maps drug names to a standardized pharmacopeia, resolving brand names, generics, and regional variants automatically.' },
  { icon: <FileText className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Abbreviation Handling', description: 'Understands medical shorthand like BD, TDS, OD, SOS, HS, and hundreds of clinical abbreviations used across Indian medical practice.' },
  { icon: <Link className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Cross-Referencing Engine', description: 'Every extracted drug is cross-referenced against a 100K+ drug database for dosage validation, interaction checks, and formulary verification.' },
  { icon: <LayoutGrid className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Layout Intelligence', description: 'Understands prescription structure — headers, drug lists, dosage columns, instructions, and doctor signatures — regardless of formatting style.' },
  { icon: <RefreshCw className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Instant Digitization', description: 'Converts scanned prescriptions into fully editable, structured digital records that integrate directly into the patient EHR timeline.' },
];

const HOW_IT_WORKS_STEPS = [
  'Point your camera at the handwritten prescription',
  'SnapRx captures and enhances the image automatically',
  'AI extracts drug names, dosages, frequencies, and instructions',
  'Review the structured output, make edits if needed, and save to EHR',
];

const ACCURACY_POINTS = [
  'Trained on 5M+ handwritten Indian prescriptions across specialties',
  'Handles poor handwriting, smudged ink, and low-light captures',
  'Multi-script support — English, Hindi, and regional language prescriptions',
  'Confidence scoring highlights uncertain extractions for doctor review',
];

const FAQS = [
  { question: 'How accurate is SnapRx at reading handwritten prescriptions?', answer: 'SnapRx achieves 95%+ accuracy on drug name extraction from handwritten prescriptions. It is trained specifically on Indian medical handwriting and continuously improves through feedback. Any low-confidence extractions are flagged for manual review, ensuring patient safety.' },
  { question: 'Can SnapRx read prescriptions in regional languages?', answer: 'Yes. SnapRx supports prescriptions written in English, Hindi, and Devanagari script. Support for Tamil, Telugu, Bengali, and other regional scripts is in active development and will be available in upcoming releases.' },
  { question: 'What happens if the handwriting is illegible?', answer: 'SnapRx uses confidence scoring for every extracted element. If a drug name, dosage, or instruction falls below the confidence threshold, it is highlighted in orange for the doctor to review manually. The system never auto-confirms uncertain extractions.' },
  { question: 'Does SnapRx work with printed prescriptions too?', answer: 'Absolutely. While SnapRx is optimized for handwritten prescriptions, it handles printed and typed prescriptions with near-perfect accuracy. It also works with thermal printer outputs, lab reports, and discharge summaries.' },
];

export default function SnapRxPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        tag="AI Prescription Mode"
        title='Photograph it.<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">Digitized.</em>'
        subtitle="Point your camera at any handwritten prescription. SnapRx uses healthcare-grade OCR to extract drug names, dosages, and instructions — converting paper to structured data in seconds."
        buttons={[{ text: 'Try SnapRx Free →' }, { text: 'See It in Action', variant: 'outline' }]}
        visual={<ProductHeroVisual icon={<Camera className="text-white" size={22} strokeWidth={1.5} />} name="SnapRx" desc="Photo-to-Prescription AI" pills={['OCR Engine', 'Drug Extraction', 'Multi-Script', 'EHR Ready']} />}
      />

      {/* Stats */}
      <StatsBar stats={[
        { value: 95, suffix: '%', label: 'Extraction Accuracy' },
        { value: 5, suffix: 'M+', label: 'Prescriptions Trained On' },
        { value: 3, suffix: 's', label: 'Avg Processing Time' },
        { value: 100, suffix: 'K+', label: 'Drugs Cross-Referenced' },
      ]} />

      {/* Core Features */}
      <FeatureGrid
        tag="Core Capabilities"
        title="From Paper to Pixel — Accurately"
        subtitle="SnapRx is not a generic scanner. It is a medical document intelligence engine built specifically for the messy reality of handwritten prescriptions."
        features={CORE_FEATURES}
        columns={3}
      />

      {/* How It Works */}
      <UseCaseSection
        icon={<Camera className="text-white" size={22} strokeWidth={1.5} />}
        name="SnapRx"
        desc="Photo-to-Prescription"
        category="How It Works"
        title="Capture, extract, and digitize in one seamless flow"
        body="SnapRx combines computer vision with medical NLP to understand not just the text on a prescription, but the clinical intent behind it. It knows that 'Tab Amox 500 BD x 5' means Amoxicillin 500mg twice daily for five days."
        points={HOW_IT_WORKS_STEPS}
        pills={['Handwritten', 'Printed', 'Thermal', 'Multi-Format']}
        link="/products/tatvapractice"
        linkText="Explore TatvaPractice →"
      />

      {/* Clinical Accuracy Section */}
      <UseCaseSection
        reverse
        icon={<Brain className="text-white" size={22} strokeWidth={1.5} />}
        name="Medical OCR"
        desc="Clinical Intelligence"
        iconBg="linear-gradient(135deg, #10b981, #059669)"
        category="Clinical Accuracy"
        title="Trained on millions of real Indian prescriptions"
        body="Generic OCR fails on medical handwriting. SnapRx was built from the ground up for clinical documents — trained on 5 million+ handwritten prescriptions from doctors across India, covering every specialty and handwriting style."
        points={ACCURACY_POINTS}
      />

      {/* Use Case Scenarios */}
      <section className="py-16 lg:py-24 bg-g-1">
        <div className="max-w-container mx-auto px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-[32px] font-black mb-3">Where SnapRx Makes the Difference</h2>
              <p className="text-[15px] text-g-4 max-w-2xl mx-auto">From pharmacy counters to insurance claims, SnapRx turns illegible prescriptions into actionable structured data.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Pill className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Pharmacy Dispensing', desc: 'Pharmacists can scan incoming prescriptions to verify drug names and dosages instantly, reducing dispensing errors and improving turnaround.' },
                { icon: <Hospital className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Hospital Intake', desc: 'Digitize referral prescriptions from outside doctors during hospital admissions, creating a complete medication history in the EHR.' },
                { icon: <ClipboardList className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Insurance & Claims', desc: 'Convert prescription documents into structured data for insurance claims processing, reducing rejection rates from illegibility.' },
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
      <FAQSection title="SnapRx FAQ" faqs={FAQS} />

      {/* CTA */}
      <CTASection
        title="Digitize Every Prescription Instantly"
        subtitle="Try SnapRx free for 7 days. Photograph any prescription, and watch it transform into structured clinical data."
      />
    </>
  );
}
