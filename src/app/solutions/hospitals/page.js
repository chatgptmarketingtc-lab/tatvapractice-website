import { SolutionPage, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'Solutions for Hospitals & Clinics | TatvaCare' };

export default function HospitalsPage() {
  return <SolutionPage
    tag="Solutions for Hospitals & Clinics"
    title='The AI Operating System<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">for modern hospitals.</em>'
    subtitle="Streamline clinical workflows, improve patient outcomes, and reduce administrative burden with an integrated AI-powered platform."
    heroVisual={<ProductHeroVisual icon="🏥" name="Hospital Suite" desc="Enterprise EMR · Digital Infrastructure" pills={['Multi-Dept', 'ABDM', 'Analytics', 'Outcomes']} />}
    problem={{ title: 'Hospitals are drowning in fragmented systems.', body: 'Multiple disconnected systems for different departments, manual documentation, zero interoperability, and compliance headaches.', points: ['Fragmented patient data across departments', 'Manual documentation consuming clinical time', 'No outcomes tracking or RWE generation', 'ABDM compliance requirements looming'] }}
    solutions={[
      { icon: '💻', name: 'Enterprise EMR', desc: 'TatvaPractice Enterprise', category: 'Solution 1', title: 'One EMR for every department.', body: 'TatvaPractice Enterprise deploys across all departments with role-based access, specialty-specific modules, and a shared patient record.', points: ['19 specialty modules', 'Role-based access and permissions', 'Inter-department referral workflows', 'ABDM-certified health records'], link: '/products/tatvapractice', linkText: 'Explore TatvaPractice →' },
      { icon: '📊', name: 'Outcomes Engine', desc: 'Evalus Integration', iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)', category: 'Solution 2', title: 'Generate evidence from your patient population.', body: 'Evalus integrates with TatvaPractice to automatically build patient registries and generate real-world evidence from your clinical data.', points: ['Automatic registry building from clinical data', 'Outcomes tracking across patient cohorts', 'Publication-ready research outputs', 'Quality improvement dashboards'] },
      { icon: '🏪', name: 'Digital Clinic', desc: 'Full Infrastructure', iconBg: 'linear-gradient(135deg, #10b981, #059669)', category: 'Solution 3', title: 'Launch digital-first clinics in weeks.', body: 'TatvaCare provides the complete digital infrastructure — hardware, software, and training. Go from zero to a fully operational digital clinic in weeks, not months.', points: ['Hardware + software integrated package', 'Training and onboarding included', 'Managed services for operations', 'Scalable to multi-site deployments'] },
    ]}
    stats={[{ value: 50, suffix: '%', label: 'Documentation Time Saved' }, { value: 100, suffix: '%', label: 'ABDM Compliance' }, { value: 30, suffix: '%', label: 'Improved Patient Retention' }, { value: 4, suffix: 'wk', label: 'Avg Deployment Time' }]}
    ctaTitle="Schedule a hospital demo" ctaSubtitle="See how TatvaCare can transform your hospital's digital infrastructure."
  />;
}
