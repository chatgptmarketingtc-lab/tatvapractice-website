import { HeroSection, StatsBar, SolutionsGrid, SectionHeader, CTASection } from '@/components/sections';
import { ScrollReveal, GradientBlob, TiltCard } from '@/components/ui';

export const metadata = { title: 'About TatvaCare — The AI Operating System for Healthcare' };

export default function AboutPage() {
  const leaders = [
    { name: 'Manoj Balaji', title: 'Chief Executive Officer', icon: '👤' },
    { name: 'Javed Khan', title: 'Chief Technology Officer', icon: '👤' },
    { name: 'Siddharth Rajagopal', title: 'VP Product', icon: '👤' },
    { name: 'Russell Mascarenhas', title: 'Head of Marketing', icon: '👤' },
  ];

  const values = [
    { icon: '🚀', title: 'Innovation First', desc: 'We build what doesn\'t exist yet. From VoiceRx to ambient clinical AI, we push the boundaries of what\'s possible in healthcare technology.' },
    { icon: '🏥', title: 'Patient-Centric', desc: 'Every product decision starts with the patient. Better outcomes, better access, better experience — that\'s the bar.' },
    { icon: '🔒', title: 'Trust & Integrity', desc: 'Healthcare data is sacred. We maintain the highest standards of security, privacy, and regulatory compliance across everything we build.' },
    { icon: '🤝', title: 'Ecosystem Thinking', desc: 'Healthcare isn\'t a point solution. We build connected systems that make doctors, patients, pharma, and payors work better together.' },
  ];

  return (
    <>
      <HeroSection
        tag="About TatvaCare"
        title='The AI Operating System<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">for Healthcare.</em>'
        subtitle="We're a Zydus Group-backed healthcare AI company building the technology layer that connects every touchpoint in the care continuum."
        buttons={[{ text: 'Join Our Team →' }, { text: 'Contact Us', variant: 'outline' }]}
      />
      <StatsBar stats={[
        { value: 200, suffix: '+', label: 'Team Members' },
        { value: 23, suffix: ' Cr', label: 'CY2025 Revenue' },
        { value: 4.6, suffix: 'x', label: 'YoY Growth', decimals: 1 },
        { value: 5, suffix: '+', label: 'Core Products' },
      ]} />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-3">Our Story</div>
              <h2 className="text-3xl font-black mb-4">From a single EMR to an AI operating system.</h2>
              <p className="text-g-4 leading-relaxed mb-4">TatvaCare started with a simple observation: Indian doctors needed better tools. What began as a cloud EMR for general practitioners evolved into an AI-powered ecosystem spanning prescriptions, patient engagement, pharma partnerships, and real-world evidence generation.</p>
              <p className="text-g-4 leading-relaxed">Today, backed by the Zydus Group, we're building the technology layer that connects every stakeholder in the healthcare continuum — from the doctor writing a prescription to the payor funding the care.</p>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 relative overflow-hidden">
                <GradientBlob className="top-0 right-0" size={200} />
                <div className="relative z-10 space-y-6">
                  {[
                    { year: '2018', event: 'TatvaPractice EMR launched' },
                    { year: '2020', event: 'GoodFlip health app launched' },
                    { year: '2022', event: 'Zyvelor AI Centre established' },
                    { year: '2023', event: 'Evalus RWE platform launched' },
                    { year: '2024', event: 'Visit & PillUp ecosystem expansion' },
                    { year: '2025', event: '23 Cr revenue, 4.6x YoY growth' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-16 text-sm font-black text-brand-500 shrink-0">{item.year}</div>
                      <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                      <div className="text-sm text-g-6 font-semibold">{item.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SolutionsGrid
        label="Our Values"
        title="What drives us"
        subtitle="Four principles that guide every product decision, every hire, and every partnership."
        cards={values}
      />

      <section className="py-16 lg:py-24 bg-g-1">
        <div className="max-w-container mx-auto px-8">
          <SectionHeader label="Leadership" title="The people behind TatvaCare" subtitle="A team of healthcare, technology, and business leaders building the future of Indian healthcare." />
          <ScrollReveal variant="staggerFast">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((l, i) => (
                <div key={i} className="stagger-child">
                  <TiltCard className="bg-white rounded-2xl p-6 text-center shadow-sm border border-black/5 hover:shadow-xl transition-shadow">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center text-3xl mx-auto mb-4">{l.icon}</div>
                    <h4 className="text-base font-extrabold mb-1">{l.name}</h4>
                    <p className="text-xs text-g-3 font-semibold">{l.title}</p>
                  </TiltCard>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-container mx-auto px-8 text-center">
          <ScrollReveal variant="fadeUp">
            <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-3">Backed By</div>
            <h2 className="text-3xl font-black mb-4">Zydus Group</h2>
            <p className="text-g-4 max-w-lg mx-auto mb-8">TatvaCare is solely promoted by the Zydus Group — one of India's leading pharmaceutical and healthcare companies with a legacy of innovation spanning four decades.</p>
            <div className="inline-flex items-center gap-3 bg-g-1 rounded-2xl px-8 py-4">
              <span className="text-2xl font-black text-brand-700">Zydus</span>
              <span className="text-xs text-g-3 font-bold">Sole Promoter</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection title="Join us in reimagining healthcare" subtitle="We're always looking for passionate people to join our mission." />
    </>
  );
}
