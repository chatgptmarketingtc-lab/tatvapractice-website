import {
  CalendarCheck,
  Pill,
  Receipt,
  ClipboardList,
  BellRing,
  BarChart3,
  Stethoscope,
  Rocket,
} from 'lucide-react';
import {
  HeroSection,
  ProductHeroVisual,
  FeatureGrid,
  UseCaseSection,
  StatsBar,
  TestimonialsSection,
  FAQSection,
  CTASection,
  LogoCarousel,
} from '@/components/sections';

export const metadata = { title: 'For Clinics & Solo Practices | TatvaPractice' };

export default function ClinicsPage() {
  return (
    <>
      <HeroSection
        tag="For Clinics"
        title='Go digital from<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">day one.</em>'
        subtitle="Whether you're a solo practitioner or running a small clinic, TatvaPractice gives you everything you need to manage patients, prescriptions, and billing — without the complexity."
        buttons={[{ text: 'Start Free Trial →' }, { text: 'Watch Demo', variant: 'outline' }]}
        visual={
          <ProductHeroVisual
            icon={<Stethoscope className="text-white" size={22} strokeWidth={1.5} />}
            name="TatvaPractice"
            desc="Clinic Management · Made Simple"
            pills={['Scheduling', 'e-Rx', 'Billing', 'Reports']}
          />
        }
      />

      <LogoCarousel label="Trusted by clinics across India" />

      <FeatureGrid
        tag="Everything You Need"
        title="Built for how clinics actually work"
        subtitle="Six powerful modules that work together to digitise every part of your practice — from the first appointment to the final invoice."
        columns={3}
        features={[
          {
            icon: <CalendarCheck className="text-purple-600" size={22} strokeWidth={1.5} />,
            title: 'Smart Scheduling',
            description: 'Online and walk-in appointment booking with slot management, queue view, and automatic wait-time estimation for patients.',
          },
          {
            icon: <Pill className="text-purple-600" size={22} strokeWidth={1.5} />,
            title: 'AI Prescriptions',
            description: 'Generate structured digital prescriptions in seconds with VoiceRx, drug interaction alerts, and multi-language support.',
          },
          {
            icon: <Receipt className="text-purple-600" size={22} strokeWidth={1.5} />,
            title: 'Billing & Invoicing',
            description: 'Create GST-compliant invoices, track payments, manage outstanding dues, and generate revenue reports — all in one place.',
          },
          {
            icon: <ClipboardList className="text-purple-600" size={22} strokeWidth={1.5} />,
            title: 'Patient Records',
            description: 'Maintain comprehensive digital health records for every patient with visit history, vitals, lab results, and documents.',
          },
          {
            icon: <BellRing className="text-purple-600" size={22} strokeWidth={1.5} />,
            title: 'Automated Reminders',
            description: 'Reduce no-shows with WhatsApp and SMS reminders for appointments, follow-ups, and medication refills.',
          },
          {
            icon: <BarChart3 className="text-purple-600" size={22} strokeWidth={1.5} />,
            title: 'Practice Reports',
            description: 'Track patient footfall, revenue trends, and prescription patterns with simple dashboards built for busy clinicians.',
          },
        ]}
      />

      <UseCaseSection
        icon={<Rocket className="text-white" size={22} strokeWidth={1.5} />}
        name="Quick Setup"
        desc="Up and running in 15 minutes"
        category="How It Works"
        title="From sign-up to first patient in minutes."
        body="No hardware to install, no IT team required. TatvaPractice is a cloud-based platform that works on any device — laptop, tablet, or phone. Our onboarding team walks you through every step."
        points={[
          'Sign up and configure your clinic profile in minutes',
          'Import existing patient data from spreadsheets or other systems',
          'Start scheduling appointments and writing prescriptions on day one',
          'Dedicated onboarding specialist for the first 30 days',
        ]}
        pills={['Cloud-Based', 'No Hardware', 'Free Onboarding']}
        link="/products/tatvapractice"
        linkText="Explore TatvaPractice →"
      />

      <StatsBar
        stats={[
          { value: 50000, suffix: '+', label: 'Clinics Onboarded' },
          { value: 12, suffix: 's', label: 'Avg Prescription Time' },
          { value: 30, suffix: '%', label: 'Fewer No-Shows' },
          { value: 15, suffix: 'min', label: 'Setup Time' },
        ]}
      />

      <TestimonialsSection
        title="Trusted by Clinic Doctors Across India"
        testimonials={[
          {
            quote: 'I was writing prescriptions by hand for 18 years. TatvaPractice changed everything — my patients get printed Rx, I save 20 minutes a day, and my billing is finally organised.',
            name: 'Dr. Priya Sharma',
            role: 'General Physician',
            org: 'Sharma Clinic, Pune',
          },
          {
            quote: 'The scheduling and reminder system alone paid for itself. My no-show rate dropped from 25% to under 10% in the first month. The whole team loves it.',
            name: 'Dr. Rakesh Mehta',
            role: 'Pediatrician',
            org: 'Little Stars Clinic, Ahmedabad',
          },
          {
            quote: 'As a solo practitioner, I needed something simple that just works. TatvaPractice is exactly that — no bloat, no complexity. I was up and running the same afternoon.',
            name: 'Dr. Ananya Iyer',
            role: 'Dermatologist',
            org: 'SkinFirst Clinic, Bangalore',
          },
        ]}
      />

      <FAQSection
        title="Frequently Asked Questions"
        faqs={[
          {
            question: 'How much does TatvaPractice cost for a solo clinic?',
            answer: 'TatvaPractice offers a free tier for solo practitioners with core features including scheduling, digital Rx, and basic patient records. Paid plans with advanced analytics, billing, and multi-user support start at affordable monthly rates. Contact us for current pricing.',
          },
          {
            question: 'How long does it take to set up?',
            answer: 'Most clinics are up and running within 15 minutes. Simply sign up, configure your clinic profile, and start seeing patients. Our onboarding team provides free setup assistance and training for the first 30 days.',
          },
          {
            question: 'Can I import my existing patient data?',
            answer: 'Yes. TatvaPractice supports bulk import from Excel, CSV, and common EMR formats. Our team can also assist with data migration from legacy systems at no extra charge.',
          },
          {
            question: 'Does it work offline or on mobile?',
            answer: 'TatvaPractice is cloud-based and works on any device with a browser — laptop, tablet, or smartphone. Core features like prescription writing also work offline and sync automatically when connectivity is restored.',
          },
        ]}
      />

      <CTASection
        title="Start your free trial today"
        subtitle="No credit card required. Set up your clinic in minutes and see the difference from day one."
      />
    </>
  );
}
