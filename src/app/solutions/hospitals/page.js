import {
  Building2,
  Lock,
  BarChart3,
  Link2,
  FileText,
  Handshake,
  Landmark,
  Settings,
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

export const metadata = { title: 'For Hospitals & Multi-Location Networks | TatvaPractice' };

export default function HospitalsPage() {
  return (
    <>
      <HeroSection
        tag="For Hospitals"
        title='Enterprise-grade,<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">built for scale.</em>'
        subtitle="From a single hospital to a multi-location network, TatvaPractice Enterprise delivers the clinical infrastructure, compliance, and analytics that large organisations demand."
        buttons={[{ text: 'Contact Sales →' }, { text: 'View Case Studies', variant: 'outline' }]}
        visual={
          <ProductHeroVisual
            icon={<Landmark className="text-white" size={24} strokeWidth={2} />}
            name="TatvaPractice Enterprise"
            desc="Hospital Infrastructure · At Scale"
            pills={['Multi-Dept', 'RBAC', 'ABDM', 'Audit Trail']}
          />
        }
      />

      <LogoCarousel label="Powering leading hospitals and health systems" />

      <FeatureGrid
        tag="Enterprise Capabilities"
        title="Purpose-built for hospital complexity"
        subtitle="Six pillars of enterprise functionality designed for multi-department, multi-location healthcare organisations with rigorous compliance needs."
        columns={3}
        features={[
          {
            icon: <Building2 className="text-[#6D28D9]" size={24} strokeWidth={2} />,
            title: 'Multi-Department Management',
            description: 'Deploy across OPD, IPD, pharmacy, lab, radiology, and more with specialty-specific workflows and a unified patient record.',
          },
          {
            icon: <Lock className="text-[#6D28D9]" size={24} strokeWidth={2} />,
            title: 'Role-Based Access Control',
            description: 'Granular permissions for doctors, nurses, admin, and management. Control who sees what across departments and locations.',
          },
          {
            icon: <BarChart3 className="text-[#6D28D9]" size={24} strokeWidth={2} />,
            title: 'Centralised Reporting',
            description: 'Real-time dashboards aggregating clinical, operational, and financial data across every department and location in one view.',
          },
          {
            icon: <Link2 className="text-[#6D28D9]" size={24} strokeWidth={2} />,
            title: 'ABDM Integration',
            description: 'Fully certified ABDM integration with ABHA ID creation, health record linking, and consent-based data sharing out of the box.',
          },
          {
            icon: <FileText className="text-[#6D28D9]" size={24} strokeWidth={2} />,
            title: 'Audit Trail & Compliance',
            description: 'Tamper-proof audit logs for every clinical action. Meet NABH, ABDM, and internal governance requirements with zero manual effort.',
          },
          {
            icon: <Handshake className="text-[#6D28D9]" size={24} strokeWidth={2} />,
            title: 'Dedicated Support',
            description: 'Named account manager, 24/7 priority support, on-site training, and a dedicated implementation team for every deployment.',
          },
        ]}
      />

      <UseCaseSection
        icon={<Settings className="text-white" size={24} strokeWidth={2} />}
        name="Enterprise Deployment"
        desc="Structured rollout for hospitals"
        category="How We Deploy"
        title="A proven deployment model — live in 4 weeks."
        body="Our enterprise team works alongside your hospital staff to ensure a smooth, phased rollout. From infrastructure audit to go-live, every step is planned and supported."
        points={[
          'Week 1: Infrastructure audit and system configuration',
          'Week 2: Data migration, integrations, and role setup',
          'Week 3: Staff training across all departments',
          'Week 4: Go-live with on-site support and monitoring',
        ]}
        pills={['Phased Rollout', 'On-Site Training', 'Data Migration']}
        link="/products/tatvapractice"
        linkText="Explore Enterprise Features →"
      />

      <StatsBar
        stats={[
          { value: 50, suffix: '%', label: 'Documentation Time Saved' },
          { value: 100, suffix: '%', label: 'ABDM Compliance' },
          { value: 4, suffix: 'wk', label: 'Avg Deployment Time' },
          { value: 99.9, suffix: '%', label: 'Uptime SLA', decimals: 1 },
        ]}
      />

      <TestimonialsSection
        title="Trusted by Hospital Leaders"
        testimonials={[
          {
            quote: 'We evaluated five EMR platforms before choosing TatvaPractice. The multi-department architecture and ABDM integration were head and shoulders above everything else. Rollout across 12 departments took just 3 weeks.',
            name: 'Dr. Suresh Nair',
            role: 'Medical Director',
            org: 'City General Hospital, Chennai',
          },
          {
            quote: 'Our compliance team was sceptical at first, but the audit trail and role-based access control won them over. We passed our NABH re-accreditation with zero documentation gaps for the first time.',
            name: 'Kavitha Reddy',
            role: 'Hospital Administrator',
            org: 'MedPlus Health Network, Hyderabad',
          },
          {
            quote: 'Managing three hospital locations used to mean three different systems and no unified view. TatvaPractice gave us one dashboard for everything — clinical, operational, and financial.',
            name: 'Rajiv Kapoor',
            role: 'CEO',
            org: 'LifeBridge Hospitals, Delhi NCR',
          },
        ]}
      />

      <FAQSection
        title="Enterprise FAQ"
        faqs={[
          {
            question: 'Can TatvaPractice handle multiple hospital locations?',
            answer: 'Yes. TatvaPractice Enterprise supports unlimited locations with centralised management, unified patient records, and cross-location reporting. Each location can have its own department structure and user roles while sharing a single source of truth.',
          },
          {
            question: 'How does ABDM integration work?',
            answer: 'TatvaPractice is fully ABDM-certified. We handle ABHA ID creation, health record linking, consent management, and data sharing natively — no third-party middleware required. Compliance is automatic for every clinical interaction.',
          },
          {
            question: 'What does the deployment process look like?',
            answer: 'Our standard enterprise deployment follows a 4-week phased model: infrastructure audit, data migration and configuration, staff training, and go-live with on-site support. Larger networks may require a customised timeline. A dedicated implementation manager is assigned to every deployment.',
          },
          {
            question: 'What kind of support is included for enterprise customers?',
            answer: 'Enterprise plans include a named account manager, 24/7 priority support via phone and chat, quarterly business reviews, on-site training sessions, and a 99.9% uptime SLA. Custom SLAs and dedicated infrastructure are available for large networks.',
          },
        ]}
      />

      <CTASection
        title="Schedule an enterprise demo"
        subtitle="See how TatvaPractice can power your hospital or multi-location network. Our team will prepare a demo tailored to your organisation."
      />
    </>
  );
}
