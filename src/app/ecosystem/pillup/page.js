import { SolutionPage, ProductHeroVisual } from '@/components/sections';

export const metadata = { title: 'PillUp — Smart Pharmacy Operations | TatvaCare' };

export default function PillupPage() {
  return <SolutionPage
    tag="Ecosystem · PillUp"
    title='Pharmacy operations,<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">optimized.</em>'
    subtitle="PillUp provides pre-sorted medicine packaging and logistics for pharmacies. Better adherence, fewer errors, and integrated with the TatvaCare ecosystem."
    heroVisual={<ProductHeroVisual icon="💊" name="PillUp" desc="Smart Pharmacy" pills={['Pre-sorted', 'QC', 'Delivery', 'Adherence']} />}
    solutions={[
      { icon: '👤', name: 'For Patients', desc: 'Better Adherence', category: 'Patient Benefits', title: 'Pre-sorted medicines, organized by date and time.', body: 'Patients receive medicines pre-sorted into daily packets with clear date-time labels. Fewer errors, better adherence, and easy pickup or home delivery.', points: ['Date-time organized medicine packets', 'Fewer medication errors', 'Easy pickup or home delivery', 'Refill reminders via GoodFlip'] },
      { icon: '🏪', name: 'For Pharmacies', desc: 'Operations Efficiency', iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)', category: 'Pharmacy Benefits', title: 'Cut labor costs. Improve accuracy.', body: 'Reduce manual sorting and packaging labor by 50%. PillUp handles the heavy lifting with automated packaging, QC checks, and inventory management.', points: ['50% reduction in packaging labor', 'Automated quality control checks', 'Better inventory management', 'TatvaPractice e-Rx integration'] },
      { icon: '🏦', name: 'For Payors', desc: 'Better Outcomes', iconBg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', category: 'Payor Benefits', title: 'Better adherence means better outcomes.', body: 'Pre-sorted packaging drives adherence rates above 85%, reducing hospital readmissions, medication waste, and total cost of care for payor populations.', points: ['85%+ medication adherence rates', 'Lower medication waste', 'Reduced hospital readmissions', 'Improved member satisfaction'] },
    ]}
    stats={[{ value: 98, suffix: '%', label: 'Packaging Accuracy' }, { value: 50, suffix: '%', label: 'Labor Cost Savings' }, { value: 35, suffix: '%', label: 'Better Adherence' }, { value: 24, suffix: 'h', label: 'Delivery Window' }]}
    ctaTitle="Become a PillUp Partner" ctaSubtitle="Whether you're a pharmacy chain, independent pharmacy, or health system — PillUp has a model for you."
  />;
}
