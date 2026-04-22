import { HeroSection, UseCaseSection, StatsBar, CTASection, FAQSection, FeatureGrid, ProductHeroVisual } from '@/components/sections';
import { ScrollReveal, Button } from '@/components/ui';
import { RefreshCw, WifiOff, Landmark, Database, Lock, Hospital, Shield, Home, Ambulance } from 'lucide-react';

export const metadata = { title: 'SmartSync — Seamless Data Synchronization | TatvaPractice' };

const CORE_FEATURES = [
  { icon: <RefreshCw className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Real-Time Sync', description: 'Changes propagate instantly across all connected devices. Update a patient record on your phone, and it appears on your desktop within milliseconds.' },
  { icon: <WifiOff className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Offline-First Architecture', description: 'Work without internet — SmartSync queues all changes locally and resolves conflicts intelligently when connectivity returns. Zero data loss, guaranteed.' },
  { icon: <Landmark className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'ABDM Integration', description: 'Seamlessly syncs patient records with the Ayushman Bharat Digital Mission ecosystem, including ABHA IDs, health lockers, and consent-based data exchange.' },
  { icon: <Database className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Auto-Backup & Recovery', description: 'Continuous encrypted backups to the cloud with point-in-time recovery. Restore your entire practice data from any moment in the last 90 days.' },
  { icon: <Lock className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'End-to-End Encryption', description: 'AES-256 encryption at rest and TLS 1.3 in transit. Your patient data is encrypted before it leaves the device and remains encrypted in the cloud.' },
  { icon: <Hospital className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Multi-Location Support', description: 'Sync data across multiple clinic branches seamlessly. Staff at one location can access shared patient records from any other branch in real-time.' },
];

const HOW_IT_WORKS_STEPS = [
  'SmartSync runs silently in the background on all your devices',
  'Every change is timestamped, encrypted, and queued for sync',
  'Conflict resolution engine merges concurrent edits intelligently',
  'Data is mirrored to the cloud with continuous encrypted backups',
];

const INFRASTRUCTURE_POINTS = [
  'Hosted on HIPAA-compliant, India-region cloud infrastructure',
  'Automatic failover with 99.99% uptime SLA for enterprise plans',
  'Incremental sync — only changed data is transferred, saving bandwidth',
  'Role-based access control ensures staff see only what they need',
];

const FAQS = [
  { question: 'What happens when there is a conflict between two devices?', answer: 'SmartSync uses a timestamp-based conflict resolution engine with field-level granularity. If two users edit different fields of the same record simultaneously, both changes are preserved. For same-field conflicts, the most recent change wins, and the overwritten value is saved in an audit log for review.' },
  { question: 'How does offline mode work?', answer: 'SmartSync uses an offline-first architecture where all data is stored locally on your device. When you work without internet, all changes are queued in a local transaction log. When connectivity returns, SmartSync replays the queue in order, resolving any conflicts automatically. You never lose data.' },
  { question: 'Is SmartSync compliant with Indian data protection regulations?', answer: 'Yes. SmartSync is fully compliant with the Digital Personal Data Protection Act (DPDPA) and ABDM data standards. All patient data is stored within India, encrypted at rest and in transit, and accessible only through consent-based mechanisms.' },
  { question: 'Can I sync data across multiple clinic branches?', answer: 'Absolutely. SmartSync supports multi-location practices with shared patient databases, inter-branch referrals, and centralized reporting. Each branch operates independently when offline and syncs seamlessly when connected.' },
];

export default function SmartSyncPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        tag="Cloud Infrastructure"
        title='Your data,<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">everywhere.</em>'
        subtitle="SmartSync ensures your patient records, prescriptions, and practice data are always up-to-date across every device — even when you are offline. Seamless, encrypted, and ABDM-ready."
        buttons={[{ text: 'Get Started Free →' }, { text: 'View Architecture', variant: 'outline' }]}
        visual={<ProductHeroVisual icon={<RefreshCw className="text-white" size={22} strokeWidth={1.5} />} name="SmartSync" desc="Seamless Data Synchronization" pills={['Real-Time', 'Offline-First', 'Encrypted', 'ABDM Ready']} />}
      />

      {/* Stats */}
      <StatsBar stats={[
        { value: 99.99, suffix: '%', label: 'Uptime SLA', decimals: 2 },
        { value: 50, suffix: 'ms', label: 'Avg Sync Latency' },
        { value: 256, suffix: '-bit', label: 'AES Encryption' },
        { value: 90, suffix: ' days', label: 'Point-in-Time Recovery' },
      ]} />

      {/* Core Features */}
      <FeatureGrid
        tag="Core Capabilities"
        title="Always in Sync. Always Secure."
        subtitle="SmartSync is the invisible infrastructure that makes TatvaPractice work seamlessly across devices, locations, and network conditions."
        features={CORE_FEATURES}
        columns={3}
      />

      {/* How It Works */}
      <UseCaseSection
        icon={<RefreshCw className="text-white" size={22} strokeWidth={1.5} />}
        name="SmartSync"
        desc="Data Synchronization"
        category="How It Works"
        title="Invisible sync that just works"
        body="SmartSync operates silently in the background, ensuring that every prescription, appointment, and patient note is replicated across your devices in real-time. When you go offline, it queues changes locally and replays them seamlessly when connectivity returns."
        points={HOW_IT_WORKS_STEPS}
        pills={['Phone', 'Tablet', 'Desktop', 'Cloud']}
        link="/products/tatvapractice"
        linkText="Explore TatvaPractice →"
      />

      {/* Infrastructure Section */}
      <UseCaseSection
        reverse
        icon={<Shield className="text-white" size={22} strokeWidth={1.5} />}
        name="Infrastructure"
        desc="Security & Compliance"
        iconBg="linear-gradient(135deg, #3b82f6, #1d4ed8)"
        category="Security & Compliance"
        title="Enterprise-grade infrastructure, built for Indian healthcare"
        body="SmartSync runs on India-region cloud infrastructure designed for healthcare workloads. Every byte is encrypted, every access is logged, and every sync is auditable — meeting the highest standards of Indian data protection law and ABDM compliance."
        points={INFRASTRUCTURE_POINTS}
      />

      {/* Use Case Scenarios */}
      <section className="py-16 lg:py-24 bg-g-1">
        <div className="max-w-container mx-auto px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-[32px] font-black mb-3">Built for Real-World Practice</h2>
              <p className="text-[15px] text-g-4 max-w-2xl mx-auto">From single-doctor clinics to multi-branch hospitals, SmartSync adapts to your infrastructure needs.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Home className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Solo Practitioners', desc: 'Sync between your clinic desktop and personal phone. Access patient records on the go, even during home visits without internet.' },
                { icon: <Hospital className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Multi-Branch Clinics', desc: 'Shared patient database across branches with centralized reporting. Staff at any location can pull up records instantly.' },
                { icon: <Ambulance className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Field & Camp Settings', desc: 'Offline-first design ensures full functionality at health camps, rural outreach, and mobile clinics with intermittent connectivity.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center stagger-child">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-[15px] font-extrabold text-g-6 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-g-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="SmartSync FAQ" faqs={FAQS} />

      {/* CTA */}
      <CTASection
        title="Your Data, Always Available"
        subtitle="SmartSync comes built into every TatvaPractice plan. Start syncing across all your devices today."
      />
    </>
  );
}
