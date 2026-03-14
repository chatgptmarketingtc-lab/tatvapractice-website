import { SolutionPage, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'Solutions for Doctors | TatvaCare' };

export default function DoctorsPage() {
  return <SolutionPage
    tag="Solutions for Doctors"
    title='AI-powered tools that<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">give you time back.</em>'
    subtitle="From AI prescriptions to practice analytics, TatvaCare helps doctors see more patients, reduce admin burden, and grow their practice."
    heroVisual={<ProductHeroVisual icon="🩺" name="Doctor Suite" desc="AI-Powered Practice Tools" pills={['VoiceRx', 'DDx', 'Analytics', 'Engage']} />}
    problem={{ title: 'Doctors spend more time on admin than on patients.', body: 'Manual prescriptions, fragmented records, no analytics, and zero patient follow-up tools. The result? Burnout, missed diagnoses, and lost revenue.', points: ['Handwritten Rx takes 3-5 minutes per patient', 'No integrated drug interaction checking', 'Patient follow-up is manual and inconsistent', 'Practice growth is guesswork without data'] }}
    solutions={[
      { icon: '🎤', name: 'VoiceRx', desc: 'Voice Prescriptions', category: 'Solution 1', title: 'Prescribe by voice in any language.', body: 'Dictate prescriptions in Hindi, English, or regional languages. VoiceRx transcribes, structures, and validates in real-time.', points: ['12-second average prescription time', 'Multi-language support', 'Offline capability', 'Real-time drug checks'], link: '/products/tatvapractice', linkText: 'Explore TatvaPractice →' },
      { icon: '🧬', name: 'DDx Engine', desc: 'Decision Support', iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)', category: 'Solution 2', title: 'AI that thinks alongside you.', body: 'Get ranked differential diagnoses, investigation suggestions, and evidence-based treatment recommendations at the point of care.', points: ['Symptom-based DDx scoring', 'Lab interpretation with context', 'Evidence-based treatment suggestions', 'Drug interaction and dose alerts'] },
      { icon: '📊', name: 'Practice Analytics', desc: 'Growth Dashboard', iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', category: 'Solution 3', title: 'See your practice in numbers.', body: 'Track patient volume, revenue trends, prescription patterns, and engagement metrics. Identify growth opportunities with data.', points: ['Real-time patient volume tracking', 'Revenue and collection analytics', 'Prescription pattern insights', 'Patient satisfaction scores'] },
      { icon: '📱', name: 'Patient Engage', desc: 'Follow-up Tools', iconBg: 'linear-gradient(135deg, #10b981, #059669)', category: 'Solution 4', title: 'Never lose a patient to poor follow-up.', body: 'Automated appointment reminders, digital prescriptions, and health tracking integration keep patients engaged between visits.', points: ['Automated follow-up reminders', 'Digital prescription sharing', 'GoodFlip integration for health tracking', 'Patient feedback and ratings'] },
    ]}
    stats={[{ value: 50000, suffix: '+', label: 'Doctors Using TatvaCare' }, { value: 12, suffix: 's', label: 'Avg Prescription Time' }, { value: 40, suffix: '%', label: 'Time Saved on Admin' }, { value: 4.8, suffix: '/5', label: 'Doctor Satisfaction', decimals: 1 }]}
    ctaTitle="Ready to transform your practice?" ctaSubtitle="Join 50,000+ doctors using AI to see more patients, reduce admin, and grow."
  />;
}
