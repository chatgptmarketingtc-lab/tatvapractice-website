import { HeroSection, LogoCarousel, UseCaseSection, DarkSection, SolutionsGrid, StatsBar, CTASection, HomepageHeroVisual } from '@/components/sections';

export default function HomePage() {
  const agents = [
    { icon: '🎤', name: 'VoiceRx', desc: 'Speech-to-Rx' },
    { icon: '📸', name: 'SnapRx', desc: 'Photo-to-Rx' },
    { icon: '🧬', name: 'DDx Engine', desc: 'Diagnosis scoring' },
    { icon: '🎙️', name: 'AmbientRx', desc: 'Ambient capture' },
    { icon: '📄', name: 'DocExtract', desc: 'OCR pipeline' },
    { icon: '💊', name: 'DrugCheck', desc: 'Interaction alerts' },
  ];

  return (
    <>
      <HeroSection
        tag="Reimagining healthcare delivery with AI"
        title='The AI Operating System<br/>for <em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">Healthcare</em>'
        subtitle="From a single prescription to a lifetime of care — we build the AI that powers every touchpoint across doctors, patients, pharma, and payors."
        buttons={[{ text: 'Request a Demo →', variant: 'primary' }, { text: 'Watch Video', variant: 'outline' }]}
        visual={<HomepageHeroVisual />}
      />
      <LogoCarousel />
      <UseCaseSection
        icon="💊" name="TatvaPractice" desc="Cloud EMR · ABDM Certified"
        pills={['VoiceRx', 'SnapRx', 'AmbientRx', 'DDx Engine']}
        category="For Doctors & Hospitals"
        title="Write prescriptions in seconds, not minutes."
        body="TatvaPractice gives doctors four AI-powered ways to write a prescription — speak it, photograph it, let ambient AI capture it, or type it. Deep specialty modules and clinical decision support built for the Indian clinic."
        points={['Four AI Rx modes — VoiceRx, SnapRx, AmbientRx, TypeRx', 'Clinical decision support with differential diagnosis', '19 feature modules across 20+ specialties', 'ABDM-certified, fully HIPAA-compliant']}
        link="/products/tatvapractice" linkText="Explore TatvaPractice →"
      />
      <UseCaseSection reverse
        icon="🍎" name="GoodFlip" desc="Health & Wellness App"
        iconBg="linear-gradient(135deg, #10b981, #059669)"
        pills={['AI Health Coach', 'Habit Tracking', 'Community']}
        category="For Patients & Consumers"
        title="Better health, one flip at a time."
        body="GoodFlip helps users build lasting health habits through AI-powered coaching, gamified challenges, and community support. From nutrition tracking to medication reminders."
        points={['AI health coach with personalized recommendations', 'Gamified health challenges and streaks', 'Medication reminders and adherence tracking', 'Community features for peer support']}
        link="/products/goodflip" linkText="Explore GoodFlip →"
      />
      <UseCaseSection
        icon="📊" name="Evalus" desc="Real-World Evidence Platform"
        iconBg="linear-gradient(135deg, #f59e0b, #d97706)"
        pills={['Patient Registries', 'Outcomes Research', 'Publications']}
        category="For Pharma & Research"
        title="Real-world evidence, from real Indian patients."
        body="Evalus turns structured clinical data from TatvaPractice into publication-ready real-world evidence. Build patient registries, run outcomes studies, and generate insights."
        points={['AI-powered data collection from EHR workflows', 'Patient registry building and management', 'Automated medical writing and publication support', '21 CFR Part 11 compliant']}
        link="/products/evalus" linkText="Explore Evalus →"
      />
      <DarkSection
        label="AI Centre of Excellence"
        title='Meet <em class="not-italic text-brand-200">Zyvelor</em> — the AI engine behind everything.'
        subtitle="20+ purpose-built AI agents trained on real clinical data from Indian healthcare. Powering TatvaPractice, GoodFlip, and Evalus — and available as standalone products."
        agents={agents}
        products={[
          { tag: 'Standalone API', name: 'Document Extractor', desc: 'Extract structured data from unstructured healthcare documents — prescriptions, invoices, lab reports. Available as a standalone API.' },
          { tag: 'Enterprise Platform', name: 'Velora', desc: 'Query healthcare databases using natural language instead of SQL. Built for researchers, CROs, and hospital IT teams.' },
        ]}
      />
      <SolutionsGrid
        label="Solutions"
        title="Built for every healthcare stakeholder"
        subtitle="Whether you run a clinic, manage chronic patients, lead pharma programs, or fund healthcare — we have a solution for you."
        cards={[
          { icon: '🩺', title: 'For Doctors', desc: 'AI-powered prescriptions, practice analytics, and patient engagement tools.', products: 'TatvaPractice · Zyvelor AI', link: '/solutions/doctors' },
          { icon: '🏥', title: 'For Hospitals', desc: 'Enterprise EMR deployment, digital clinic infrastructure, and outcomes tracking.', products: 'TatvaPractice · Evalus · Zyvelor AI', link: '/solutions/hospitals' },
          { icon: '💊', title: 'For Pharma', desc: 'Patient Support Programs, real-world evidence, and commercial analytics.', products: 'GoodFlip Care (PSP) · Evalus · Zyvelor AI', link: '/solutions/pharma' },
          { icon: '🏦', title: 'For Payors', desc: 'Fund seamless healthcare experiences. Benefit management and connected care.', products: 'Visit Ecosystem · TatvaPractice · Zyvelor AI', link: '/solutions/payors' },
        ]}
      />
      <StatsBar />
      <SolutionsGrid
        label="Ecosystem"
        title="Extending the care continuum"
        cards={[
          { icon: '🏪', title: 'Visit', desc: 'Patient-facing clinic app connecting insurance companies and employers with quality care through digital-first clinics.', link: '/ecosystem/visit' },
          { icon: '💊', title: 'PillUp', desc: 'Pre-sorted medicine packaging and logistics for independent and chain pharmacies. Better adherence, fewer errors.', link: '/ecosystem/pillup' },
        ]}
      />
      <CTASection />
    </>
  );
}
