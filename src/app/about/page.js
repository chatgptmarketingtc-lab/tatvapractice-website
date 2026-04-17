'use client';
import {
  HeroSection,
  StatsBar,
  FeatureGrid,
  CTASection,
} from '@/components/sections';
import { ScrollReveal, GradientBlob } from '@/components/ui';
import { useModal } from '@/components/ModalProvider';

const LEADERSHIP = [
  { name: 'Chirag Patel', role: 'Founder & CEO', bio: 'Leading the vision to digitize 500,000+ doctors across India with AI-powered healthcare solutions.' },
  { name: 'Harish Y', role: 'Head of Product', bio: 'Driving product strategy and design for TatvaPractice, ensuring every feature solves real clinical problems.' },
  { name: 'Dr. Mehul Shah', role: 'Chief Medical Officer', bio: 'Bridging clinical expertise with technology to ensure TatvaPractice meets real-world healthcare needs.' },
  { name: 'Ankit Jain', role: 'CTO', bio: 'Architecting the AI and cloud infrastructure that powers TatvaPractice across thousands of clinics.' },
  { name: 'Priya Sharma', role: 'VP Engineering', bio: 'Leading engineering teams to build scalable, secure, and reliable healthcare software.' },
  { name: 'Rajesh Kumar', role: 'VP Sales & Partnerships', bio: 'Building relationships with hospitals, pharma, and healthcare networks across India.' },
];

export default function AboutPage() {
  const { openCareer } = useModal();

  return (
    <>
      <HeroSection
        tag="Our Story"
        title='Building the future of<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">healthcare.</em>'
        subtitle="Digicare Health Solutions is on a mission to make quality healthcare accessible, affordable, and intelligent for every Indian — powered by AI and built with empathy."
        buttons={[{ text: 'Get in Touch →', to: '/contact' }, { text: 'Join Our Team', variant: 'outline' }]}
      />

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="text-[11px] font-extrabold text-brand-500 uppercase tracking-widest mb-3">Our Mission</div>
              <h2 className="text-3xl font-extrabold mb-4">Empowering every doctor with technology that truly helps.</h2>
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

      {/* Leadership Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-container mx-auto px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-14">
              <div className="text-[11px] font-extrabold text-[#5B2E91] uppercase tracking-widest mb-3">Leadership</div>
              <h2 className="text-3xl lg:text-[36px] font-extrabold text-gray-900">Meet our team</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEADERSHIP.map((person, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5B2E91] to-[#7C4DBC] flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {person.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1">{person.name}</h3>
                  <div className="text-[13px] font-semibold text-[#5B2E91] mb-3">{person.role}</div>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{person.bio}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FeatureGrid
        tag="Our Values"
        title="What we stand for"
        subtitle="Four principles that shape every product we build, every team we grow, and every partnership we form."
        columns={4}
        features={[
          { icon: '🏥', title: 'Patient-First', description: 'Every product decision begins and ends with patient outcomes. Better tools for doctors mean better care for patients.' },
          { icon: '🧠', title: 'AI-Native', description: 'AI is not an add-on — it is the foundation. From VoiceRx to smart scheduling, intelligence is woven into every workflow.' },
          { icon: '🇮🇳', title: 'India-Built', description: 'Designed for Indian healthcare realities — multi-language support, ABDM compliance, GST billing, and pricing for every clinic size.' },
          { icon: '🔒', title: 'Data-Secure', description: 'Healthcare data is sacred. We maintain end-to-end encryption, role-based access, and full regulatory compliance.' },
        ]}
      />

      {/* Careers Section */}
      <section id="careers" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-container mx-auto px-8 text-center">
          <ScrollReveal variant="fadeUp">
            <div className="text-[11px] font-extrabold text-[#5B2E91] uppercase tracking-widest mb-3">Careers</div>
            <h2 className="text-3xl lg:text-[36px] font-extrabold text-gray-900 mb-4">Join our team</h2>
            <p className="text-gray-500 text-[16px] max-w-xl mx-auto mb-10">
              We&apos;re building the future of healthcare technology in India. If you&apos;re passionate about AI, healthcare, and making a real impact — we want to hear from you.
            </p>
            <button
              onClick={openCareer}
              className="text-[16px] font-bold text-white rounded-2xl px-12 py-4 shadow-lg shadow-indigo-900/30 hover:shadow-xl transition-all cursor-pointer border-0"
              style={{ background: 'linear-gradient(135deg, #5046E5 0%, #3730A3 50%, #1E1B4B 100%)' }}
            >
              Apply Now — Upload Your Resume
            </button>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        title="Get in touch"
        subtitle="Whether you want to partner with us or explore TatvaPractice for your clinic — we'd love to hear from you."
      />
    </>
  );
}
