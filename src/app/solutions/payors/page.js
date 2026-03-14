import { SolutionPage, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'Solutions for Payors & Insurers | TatvaCare' };

export default function PayorsPage() {
  return <SolutionPage
    tag="Solutions for Payors & Insurers"
    title='Fund seamless<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">healthcare experiences.</em>'
    subtitle="Connect your members with quality care, track outcomes, and manage benefits through an integrated digital ecosystem."
    heroVisual={<ProductHeroVisual icon="🏦" name="Payor Suite" desc="Benefits · Outcomes · Connected Care" pills={['Visit', 'Claims', 'Analytics', 'Network']} />}
    problem={{ title: 'Payors lack visibility into care quality and outcomes.', body: 'Fragmented provider networks, manual claims processing, zero outcome tracking, and poor member engagement.', points: ['No real-time visibility into member health', 'Manual claims adjudication and fraud detection', 'Disconnected provider network management', 'Poor member satisfaction and retention'] }}
    solutions={[
      { icon: '🏪', name: 'Visit Ecosystem', desc: 'Digital Clinics', category: 'Solution 1', title: 'Connect members to quality care through digital clinics.', body: 'Visit connects payors with a network of digital-first clinics powered by TatvaPractice. Members get seamless access to quality care with full outcomes visibility for you.', points: ['Digital-first clinic network access', 'Real-time member utilization data', 'Reduced cost-per-encounter', 'Improved member satisfaction'], link: '/ecosystem/visit', linkText: 'Explore Visit →' },
      { icon: '🏥', name: 'TatvaPractice Network', desc: 'Provider Management', iconBg: 'linear-gradient(135deg, #703b95, #442c84)', category: 'Solution 2', title: 'Digitize your provider network.', body: 'Onboard and manage empanelled providers digitally. Track consultation quality, claims patterns, and outcomes. Identify top performers and flag anomalies.', points: ['Digital provider onboarding', 'Claims pattern analysis', 'Provider quality scorecards', 'Network gap analysis'] },
      { icon: '📊', name: 'Outcomes Analytics', desc: 'Value-Based Care', iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', category: 'Solution 3', title: 'Track outcomes. Drive value-based contracts.', body: 'Zyvelor-powered analytics give payors real-time visibility into member health outcomes, enabling true value-based care models.', points: ['Real-time member health dashboards', 'Value-based contract performance tracking', 'Predictive risk stratification', 'Cost-of-care optimization models'] },
    ]}
    stats={[{ value: 25, suffix: '%', label: 'Cost Reduction' }, { value: 92, suffix: '%', label: 'Member Satisfaction' }, { value: 30, suffix: '%', label: 'Claims Automation' }, { value: 3, suffix: 'x', label: 'Faster Onboarding' }]}
    ctaTitle="Transform your member experience" ctaSubtitle="Connect members to quality care and track outcomes with TatvaCare's payor ecosystem."
  />;
}
