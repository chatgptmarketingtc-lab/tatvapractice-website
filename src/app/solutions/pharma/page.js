import { SolutionPage, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'Solutions for Pharma | TatvaCare' };

export default function PharmaPage() {
  return <SolutionPage
    tag="Solutions for Pharma"
    title='Patient support programs,<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">powered by AI.</em>'
    subtitle="Launch configurable PSP programs, generate real-world evidence, and gain commercial intelligence — all on one integrated platform."
    heroVisual={<ProductHeroVisual icon="💊" name="Pharma Suite" desc="PSP · RWE · Analytics" pills={['GoodFlip Care', 'Evalus', 'Zyvelor', 'Analytics']} />}
    problem={{ title: 'Pharma programs are expensive, slow, and disconnected.', body: 'Patient support programs take months to build, RWE studies are manual, and commercial analytics live in spreadsheets.', points: ['PSPs take 6-12 months to build from scratch', 'RWE studies rely on manual data collection', 'No visibility into real-world treatment patterns', 'Disconnected systems for PSP, RWE, and analytics'] }}
    solutions={[
      { icon: '🍎', name: 'GoodFlip Care', desc: 'PSP Engine', iconBg: 'linear-gradient(135deg, #10b981, #059669)', category: 'Patient Support Programs', title: 'White-label PSPs, launched in weeks.', body: 'GoodFlip Care is the API-first, configurable PSP engine. Launch brand-specific patient support programs with adherence tracking, health coaching, and outcome measurement.', points: ['JSON-driven program configuration', 'Brand-specific white-labeling', 'Adherence tracking and refill reminders', 'Real-time patient engagement dashboards'], link: '/solutions/pharma', linkText: 'Explore GoodFlip Care →' },
      { icon: '📊', name: 'Evalus', desc: 'RWE Platform', iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)', category: 'Real-World Evidence', title: 'Real-world evidence from real Indian patients.', body: 'Build patient registries, run post-market surveillance, and generate publication-ready evidence from structured clinical data captured through TatvaPractice.', points: ['Patient registry building at scale', 'Post-market surveillance monitoring', 'Automated medical writing', '21 CFR Part 11 compliant'], link: '/products/evalus', linkText: 'Explore Evalus →' },
      { icon: '🧠', name: 'Zyvelor Analytics', desc: 'Commercial Intelligence', iconBg: 'linear-gradient(135deg, #703b95, #442c84)', category: 'Commercial Analytics', title: 'Prescribing insights that drive commercial strategy.', body: 'Velora NLQ engine queries prescribing patterns, market share, and competitive intelligence. Ask questions in plain English, get visual answers.', points: ['Prescribing pattern analysis', 'Market share and competitive benchmarking', 'KOL identification and mapping', 'Territory-level performance dashboards'] },
    ]}
    stats={[{ value: 10, suffix: '+', label: 'Pharma Partners' }, { value: 3000, suffix: '+', label: 'PSP Patients Enrolled' }, { value: 4, suffix: ' wk', label: 'PSP Launch Time' }, { value: 85, suffix: '%', label: 'Patient Adherence Rate' }]}
    ctaTitle="Transform your pharma programs" ctaSubtitle="Launch PSPs, generate RWE, and gain commercial intelligence — all on one platform."
  />;
}
