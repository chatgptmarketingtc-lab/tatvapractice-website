import {
  HeroSection,
  StatsBar,
  FeatureGrid,
  CTASection,
} from '@/components/sections';
import { ScrollReveal, GradientBlob } from '@/components/ui';

export const metadata = { title: 'About Us — Digicare Health Solutions | TatvaPractice' };

export default function AboutPage() {
  return (
    <>
      <HeroSection
        tag="Our Story"
        title='Building the future of<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">healthcare.</em>'
        subtitle="Digicare Health Solutions is on a mission to make quality healthcare accessible, affordable, and intelligent for every Indian — powered by AI and built with empathy."
        buttons={[{ text: 'Get in Touch →' }, { text: 'Join Our Team', variant: 'outline' }]}
      />

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-3">Our Mission</div>
              <h2 className="text-3xl font-black mb-4">Empowering every doctor with technology that truly helps.</h2>
              <p className="text-g-4 leading-relaxed mb-4">
                We started with a simple belief: Indian doctors deserve modern, intuitive tools that let them focus on what matters most — patient care. Too many clinics still run on paper, too many hospitals struggle with fragmented systems, and too many patients fall through the cracks.
              </p>
              <p className="text-g-4 leading-relaxed">
                TatvaPractice is our answer. A unified, AI-native platform that brings scheduling, prescriptions, records, billing, and patient engagement together in one place — designed for the way healthcare works in India.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight">
              <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 relative overflow-hidden">
                <GradientBlob className="top-0 right-0" size={200} />
                <div className="relative z-10 space-y-8">
                  <div>
                    <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-2">Vision</div>
                    <p className="text-[15px] text-g-6 font-semibold leading-relaxed">
                      To become the operating system for healthcare delivery in India — connecting doctors, patients, pharma, and payors on a single intelligent platform.
                    </p>
                  </div>
                  <div className="w-full h-px bg-brand-500/10" />
                  <div>
                    <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-2">Mission</div>
                    <p className="text-[15px] text-g-6 font-semibold leading-relaxed">
                      To digitise 500,000 doctors across India by 2028, reducing clinical burden through AI and making every patient interaction smarter, faster, and more connected.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <StatsBar
        stats={[
          { value: 50000, suffix: '+', label: 'Doctors on Platform' },
          { value: 200, suffix: '+', label: 'Team Members' },
          { value: 20, suffix: '+', label: 'AI Agents' },
          { value: 2, suffix: '', label: 'Offices (BLR & AHM)' },
        ]}
      />

      <FeatureGrid
        tag="Our Values"
        title="What we stand for"
        subtitle="Four principles that shape every product we build, every team we grow, and every partnership we form."
        columns={4}
        features={[
          {
            icon: '🏥',
            title: 'Patient-First',
            description: 'Every product decision begins and ends with patient outcomes. Better tools for doctors mean better care for patients.',
          },
          {
            icon: '🧠',
            title: 'AI-Native',
            description: 'AI is not an add-on — it is the foundation. From VoiceRx to smart scheduling, intelligence is woven into every workflow.',
          },
          {
            icon: '🇮🇳',
            title: 'India-Built',
            description: 'Designed for Indian healthcare realities — multi-language support, ABDM compliance, GST billing, and pricing that works for every clinic size.',
          },
          {
            icon: '🔒',
            title: 'Data-Secure',
            description: 'Healthcare data is sacred. We maintain end-to-end encryption, role-based access, and full regulatory compliance across every product.',
          },
        ]}
      />

      <CTASection
        title="Join us in transforming healthcare"
        subtitle="Whether you want to partner with us or join our team, we'd love to hear from you. Let's build the future of healthcare together."
      />
    </>
  );
}
