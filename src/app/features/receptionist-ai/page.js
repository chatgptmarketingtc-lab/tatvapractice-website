import { HeroSection, UseCaseSection, StatsBar, CTASection, FAQSection, FeatureGrid, ProductHeroVisual } from '@/components/sections';
import { ScrollReveal, Button } from '@/components/ui';
import { Bot, CalendarCheck, BellRing, BarChart3, Megaphone, Phone, FileText, Settings, Home, Hospital, Building } from 'lucide-react';

export const metadata = { title: 'Receptionist AI — Automated Front Desk | TatvaPractice' };

const CORE_FEATURES = [
  { icon: <CalendarCheck className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Smart Scheduling', description: 'AI-optimized appointment slots that factor in consultation duration, doctor availability, patient preferences, and travel time — minimizing wait times and maximizing throughput.' },
  { icon: <BellRing className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Automated Reminders', description: 'WhatsApp, SMS, and app-based reminders sent automatically before appointments. Reduces no-shows by up to 40% with intelligent timing and follow-up nudges.' },
  { icon: <BarChart3 className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Patient Queue Management', description: 'Real-time digital queue with estimated wait times, token numbers, and automatic status updates. Patients can check their position from their phone.' },
  { icon: <Megaphone className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Follow-Up Campaigns', description: 'Automated follow-up messages for post-visit care, medication adherence, vaccination due dates, and periodic health checkups — keeping patients engaged between visits.' },
  { icon: <Phone className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Intelligent Call Handling', description: 'AI handles incoming calls for appointment booking, rescheduling, and basic queries. Complex cases are routed to staff with full context and patient history.' },
  { icon: <FileText className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Pre-Visit Digital Forms', description: 'Patients fill out medical history, symptoms, and insurance details digitally before arrival. Data flows directly into the EHR, saving 5-10 minutes per visit.' },
];

const HOW_IT_WORKS_STEPS = [
  'Patient requests an appointment via call, WhatsApp, or the online portal',
  'Receptionist AI finds the optimal slot based on doctor schedule and patient history',
  'Confirmation and reminders are sent automatically via the patient\'s preferred channel',
  'On the day, the digital queue manages check-in, tokens, and wait-time updates',
];

const AUTOMATION_POINTS = [
  'Handles 80% of front-desk interactions without human intervention',
  'Learns peak hours and seasonal patterns to optimize scheduling',
  'Multi-channel support — WhatsApp, SMS, phone, and web portal',
  'Seamlessly escalates complex requests to human staff with full context',
];

const FAQS = [
  { question: 'Will Receptionist AI replace my front-desk staff?', answer: 'No — it augments them. Receptionist AI handles repetitive tasks like appointment confirmations, reminders, and queue updates, freeing your staff to focus on patient interactions that require a human touch. Most clinics find their staff become more productive, not redundant.' },
  { question: 'How does the AI handle appointment rescheduling?', answer: 'Patients can reschedule via WhatsApp, SMS reply, or the patient portal. Receptionist AI finds the next available slot that matches the patient\'s preferences, confirms the change, and updates the doctor\'s calendar — all without staff involvement. Cancellation policies and buffer times are fully configurable.' },
  { question: 'Can I customize the reminder messages and timing?', answer: 'Yes. You have full control over reminder content, timing, frequency, and channels. Set different reminder schedules for different appointment types — for example, a 24-hour reminder for routine visits and a 48-hour reminder for procedures that require preparation.' },
  { question: 'Does Receptionist AI integrate with WhatsApp Business?', answer: 'Yes. Receptionist AI integrates with WhatsApp Business API for appointment booking, confirmations, reminders, and follow-up campaigns. Patients can interact with the AI naturally over WhatsApp, and all conversations are logged in the practice dashboard.' },
];

export default function ReceptionistAIPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        tag="Practice Automation"
        title='Your front desk,<br/><em class="not-italic bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">automated.</em>'
        subtitle="Receptionist AI handles appointment scheduling, patient reminders, queue management, and follow-up campaigns — so your staff can focus on patient care instead of phone calls and paperwork."
        buttons={[{ text: 'Automate Your Front Desk →' }, { text: 'Watch Demo', variant: 'outline' }]}
        visual={<ProductHeroVisual icon={<Bot className="text-white" size={22} strokeWidth={1.5} />} name="Receptionist AI" desc="Automated Front Desk" pills={['Scheduling', 'Reminders', 'Queue Mgmt', 'Follow-Ups']} />}
      />

      {/* Stats */}
      <StatsBar stats={[
        { value: 40, suffix: '%', label: 'Reduction in No-Shows' },
        { value: 80, suffix: '%', label: 'Tasks Automated' },
        { value: 5, suffix: 'min', label: 'Saved Per Patient Visit' },
        { value: 24, suffix: '/7', label: 'Availability' },
      ]} />

      {/* Core Features */}
      <FeatureGrid
        tag="Front Desk Intelligence"
        title="Every Front-Desk Task, Handled"
        subtitle="Receptionist AI automates the entire patient journey — from booking to follow-up — with intelligent scheduling, real-time queue management, and multi-channel communication."
        features={CORE_FEATURES}
        columns={3}
      />

      {/* How It Works */}
      <UseCaseSection
        icon={<Bot className="text-white" size={22} strokeWidth={1.5} />}
        name="Receptionist AI"
        desc="Front Desk Automation"
        category="How It Works"
        title="From booking to follow-up — fully automated"
        body="Receptionist AI manages the entire appointment lifecycle. Patients book through their preferred channel, receive automated confirmations and reminders, check in digitally on arrival, and get follow-up messages after their visit — all without manual intervention."
        points={HOW_IT_WORKS_STEPS}
        pills={['WhatsApp', 'SMS', 'Phone', 'Web Portal']}
        link="/products/tatvapractice"
        linkText="Explore TatvaPractice →"
      />

      {/* Automation Intelligence Section */}
      <UseCaseSection
        reverse
        icon={<Settings className="text-white" size={22} strokeWidth={1.5} />}
        name="Automation Engine"
        desc="Practice Intelligence"
        iconBg="linear-gradient(135deg, #f59e0b, #d97706)"
        category="Intelligent Automation"
        title="80% of front-desk work, handled by AI"
        body="Receptionist AI is not a simple chatbot. It understands appointment context, patient history, doctor preferences, and clinic workflows. It learns your practice patterns over time — optimizing scheduling, predicting no-shows, and proactively managing capacity."
        points={AUTOMATION_POINTS}
      />

      {/* Use Case Scenarios */}
      <section className="py-16 lg:py-24 bg-g-1">
        <div className="max-w-container mx-auto px-8">
          <ScrollReveal variant="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-[32px] font-black mb-3">Designed for Every Practice Type</h2>
              <p className="text-[15px] text-g-4 max-w-2xl mx-auto">Whether you run a solo clinic or a multi-specialty hospital, Receptionist AI scales to match your front-desk needs.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="stagger">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Home className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Solo Clinics', desc: 'Run your front desk without dedicated staff. Receptionist AI handles bookings, reminders, and walk-in management — letting you focus entirely on patient care.' },
                { icon: <Hospital className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Multi-Doctor Practices', desc: 'Coordinate schedules across multiple doctors, rooms, and appointment types. The AI optimizes slot allocation to balance workload and minimize patient wait times.' },
                { icon: <Building className="text-purple-600" size={22} strokeWidth={1.5} />, title: 'Hospital OPDs', desc: 'Manage high-volume outpatient departments with digital queue tokens, real-time wait-time displays, and automated patient flow across departments.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow text-center stagger-child">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center text-2xl mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-[15px] font-extrabold text-g-6 mb-2">{item.title}</h3>
                  <p className="text-[13px] text-g-3 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection title="Receptionist AI FAQ" faqs={FAQS} />

      {/* CTA */}
      <CTASection
        title="Automate Your Front Desk Today"
        subtitle="Try Receptionist AI free for 7 days. Reduce no-shows, eliminate phone tag, and let your staff focus on what matters."
      />
    </>
  );
}
