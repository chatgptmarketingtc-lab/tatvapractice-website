import { SolutionPage, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'Visit — Digital Clinic Network | TatvaCare' };

export default function VisitPage() {
  return <SolutionPage
    tag="Ecosystem · Visit"
    title='Care access,<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">reimagined through insurance.</em>'
    subtitle="Visit connects insurance companies and employers with quality care through digital-first clinics powered by TatvaPractice."
    heroVisual={<ProductHeroVisual icon="🏪" name="Visit" desc="Digital Clinic Network" pills={['Booking', 'Insurance', 'Records', 'Analytics']} />}
    solutions={[
      { icon: '👤', name: 'For Patients', desc: 'Easy Access', category: 'Patient Experience', title: 'Find and book quality care through your insurance.', body: 'Patients discover clinics, book appointments, and access video or in-person visits through their insurance plan. Records sync automatically via ABDM.', points: ['Easy clinic discovery and booking', 'Video + in-person visit options', 'Integrated with health insurance', 'Continuity of records via ABDM'] },
      { icon: '🏦', name: 'For Payors', desc: 'Network Management', iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', category: 'Payor Benefits', title: 'Expand your network without the contracting overhead.', body: 'Real-time member utilization data, outcomes visibility, and reduced cost-per-encounter through the digital-first model.', points: ['Expand network reach instantly', 'Real-time member utilization data', 'Reduce cost-per-encounter', 'Improve member satisfaction and retention'] },
      { icon: '🏥', name: 'For Clinics', desc: 'Growth Channel', iconBg: 'linear-gradient(135deg, #10b981, #059669)', category: 'Clinic Benefits', title: 'Access insurance-funded patients.', body: 'Clinics join the Visit network to access a steady flow of insurance-funded patients. Integrated EMR, streamlined claims, and zero paperwork.', points: ['Insurance-funded patient access', 'Integrated EMR (TatvaPractice)', 'Streamlined claims and payments', 'Digital-first clinic infrastructure'] },
    ]}
    stats={[{ value: 50, suffix: '+', label: 'Clinic Partners' }, { value: 10000, suffix: '+', label: 'Members Served' }, { value: 35, suffix: '%', label: 'Cost Savings' }, { value: 4.6, suffix: '/5', label: 'Member Rating', decimals: 1 }]}
    ctaTitle="Partner with Visit" ctaSubtitle="Whether you're a payor, employer, or clinic — Visit has a partnership model for you."
  />;
}
