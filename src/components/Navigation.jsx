'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo, Button } from '@/components/ui';
import { NAV_FEATURES, NAV_SOLUTIONS } from '@/lib/data';

function MegaMenu({ items, featured }) {
  return (
    <div className="mega-menu absolute top-full left-1/2 w-[700px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-black/5 z-50"
      style={{ transform: 'translateX(-50%) translateY(8px)' }}>
      <div className="absolute -top-4 left-0 right-0 h-4" />
      <div className="grid grid-cols-[260px_1fr] min-h-[280px]">
        <div className="bg-g-1 rounded-l-2xl p-7 flex flex-col justify-center">
          <div className="w-full h-28 rounded-xl mb-4 flex items-center justify-center text-5xl opacity-40"
            style={{ background: featured.bg || 'linear-gradient(135deg, #ede6f6, #d8ccf0)' }}>
            {featured.icon}
          </div>
          <h4 className="text-base font-black mb-2" dangerouslySetInnerHTML={{ __html: featured.title }} />
          <p className="text-xs text-g-4 leading-relaxed mb-3">{featured.desc}</p>
          <Link href={featured.link} className="text-xs font-bold text-brand-500 hover:text-brand-700 inline-flex items-center gap-1">
            {featured.linkText} →
          </Link>
        </div>
        <div className="p-6">
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-g-3 mb-4">{featured.label}</div>
          {items.map((item, i) => (
            <Link key={i} href={item.path}
              className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-g-1 transition-colors no-underline group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-base shrink-0 bg-brand-500/5">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-extrabold text-black group-hover:text-brand-500 transition-colors">{item.name}</div>
                <div className="text-[11.5px] text-g-4 leading-snug">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-container mx-auto px-8 flex items-center justify-between h-16">
        <Link href="/" className="no-underline"><Logo height={26} /></Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="nav-item relative">
            <button className="text-[13.5px] font-semibold text-g-6 hover:text-brand-500 transition-colors py-5 inline-flex items-center gap-1">
              Features <span className="chevron text-[9px] text-g-3 transition-transform duration-200">▾</span>
            </button>
            <MegaMenu items={NAV_FEATURES} featured={{
              icon: '⚡', bg: 'linear-gradient(135deg, #ede6f6, #d8ccf0)',
              title: 'AI-powered features for <em class="not-italic text-brand-500">modern practices.</em>',
              desc: 'From voice prescriptions to AI-driven clinical workflows — everything built for speed.',
              link: '/features/voicerx', linkText: 'Explore all features', label: 'Features'
            }} />
          </div>

          <div className="nav-item relative">
            <button className="text-[13.5px] font-semibold text-g-6 hover:text-brand-500 transition-colors py-5 inline-flex items-center gap-1">
              Solutions <span className="chevron text-[9px] text-g-3 transition-transform duration-200">▾</span>
            </button>
            <MegaMenu items={NAV_SOLUTIONS} featured={{
              icon: '🎯', bg: 'linear-gradient(135deg, #e8e4f4, #d8ccf0)',
              title: 'Built for <em class="not-italic text-brand-500">your practice.</em>',
              desc: 'Whether you run a solo clinic or manage a hospital network — we have you covered.',
              link: '/solutions/clinics', linkText: 'See all solutions', label: 'By Practice Type'
            }} />
          </div>

          <Link href="/about" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors">About</Link>
          <Button variant="primary" to="/" className="!py-2.5 !px-5 !text-[12.5px] !rounded-md">Start Free Trial</Button>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-5 h-0.5 bg-g-6 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-g-6 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-g-6 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-black/5 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-container mx-auto px-8 py-6 flex flex-col gap-4">
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-g-3">Features</div>
          {NAV_FEATURES.map((item, i) => (
            <Link key={i} href={item.path} onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500 pl-2">{item.name}</Link>
          ))}
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-g-3 mt-2">Solutions</div>
          {NAV_SOLUTIONS.map((item, i) => (
            <Link key={i} href={item.path} onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500 pl-2">{item.name}</Link>
          ))}
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500 mt-2">About</Link>
          <Button variant="primary" to="/" className="self-start mt-2">Start Free Trial</Button>
        </div>
      </div>
    </nav>
  );
}
