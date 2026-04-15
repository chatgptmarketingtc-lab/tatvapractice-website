import Link from 'next/link';
import { Logo } from '@/components/ui';

export default function Footer() {
  const cols = [
    { title: 'Features', links: [
      { name: 'VoiceRx', to: '/features/voicerx' },
      { name: 'SnapRx', to: '/features/snaprx' },
      { name: 'SmartSync', to: '/features/smartsync' },
      { name: 'Doctor Agent', to: '/features/doctor-agent' },
      { name: 'Receptionist AI', to: '/features/receptionist-ai' },
    ]},
    { title: 'Solutions', links: [
      { name: 'For Clinics', to: '/solutions/clinics' },
      { name: 'For Hospitals', to: '/solutions/hospitals' },
    ]},
    { title: 'Company', links: [
      { name: 'About', to: '/about' },
      { name: 'Careers', to: '/about' },
      { name: 'Contact', to: '/about' },
    ]},
  ];
  return (
    <footer className="bg-dark-900 text-white/70 pt-16 pb-8">
      <div className="max-w-container mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="mb-4 opacity-80"><Logo height={22} /></div>
            <p className="text-sm leading-relaxed">AI-Powered Practice Management.<br/>Digicare Health Solutions Pvt. Ltd.<br/>Bangalore · Ahmedabad</p>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <h5 className="text-white font-bold text-sm mb-4">{col.title}</h5>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link, j) => (
                  <Link key={j} href={link.to} className="text-sm text-white/50 no-underline hover:text-white transition-colors">{link.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <span>© 2026 Digicare Health Solutions Pvt. Ltd.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-white/60 no-underline text-white/30">Privacy</a>
            <a href="#" className="hover:text-white/60 no-underline text-white/30">Terms</a>
            <a href="#" className="hover:text-white/60 no-underline text-white/30">Security</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
