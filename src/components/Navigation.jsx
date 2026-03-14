'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo, Button } from '@/components/ui';
import { NAV_PRODUCTS, NAV_ZYVELOR, NAV_SOLUTIONS } from '@/lib/data';

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
            <Link href="/products/tatvapractice" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors py-5 inline-flex items-center gap-1">
              Products <span className="chevron text-[9px] text-g-3 transition-transform duration-200">▾</span>
            </Link>
            <MegaMenu items={NAV_PRODUCTS} featured={{
              icon: '🏥', bg: 'linear-gradient(135deg, #ede6f6, #d8ccf0)',
              title: 'The full care continuum, <em class="not-italic text-brand-500">connected.</em>',
              desc: 'Three products that span doctors, patients, and pharma — powered by a shared AI layer.',
              link: '/products/tatvapractice', linkText: 'Explore all products', label: 'Products'
            }} />
          </div>

          <div className="nav-item relative">
            <Link href="/zyvelor" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors py-5 inline-flex items-center gap-1">
              Zyvelor AI <span className="chevron text-[9px] text-g-3 transition-transform duration-200">▾</span>
            </Link>
            <MegaMenu items={NAV_ZYVELOR} featured={{
              icon: '🧠', bg: 'linear-gradient(135deg, #2d1a54, #442c84)',
              title: 'Healthcare-native AI, <em class="not-italic text-brand-500">in production.</em>',
              desc: '20+ AI agents trained on real clinical data from real Indian healthcare workflows.',
              link: '/zyvelor', linkText: 'Learn about Zyvelor', label: 'Capabilities'
            }} />
          </div>

          <div className="nav-item relative">
            <Link href="/solutions/doctors" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors py-5 inline-flex items-center gap-1">
              Solutions <span className="chevron text-[9px] text-g-3 transition-transform duration-200">▾</span>
            </Link>
            <MegaMenu items={NAV_SOLUTIONS} featured={{
              icon: '🎯', bg: 'linear-gradient(135deg, #e8e4f4, #d8ccf0)',
              title: 'Built for <em class="not-italic text-brand-500">your world.</em>',
              desc: 'Whether you run a clinic, lead pharma programs, or fund healthcare — we have a solution.',
              link: '/solutions/doctors', linkText: 'See all solutions', label: 'By Stakeholder'
            }} />
          </div>

          <Link href="/ecosystem/visit" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors">Ecosystem</Link>
          <Link href="/about" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors">About</Link>
          <Button variant="primary" to="/" className="!py-2.5 !px-5 !text-[12.5px] !rounded-md">Request a Demo</Button>
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
          {[...NAV_PRODUCTS, ...NAV_SOLUTIONS].map((item, i) => (
            <Link key={i} href={item.path} onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500">{item.name}</Link>
          ))}
          <Link href="/zyvelor" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500">Zyvelor AI</Link>
          <Link href="/ecosystem/visit" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500">Ecosystem</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500">About</Link>
          <Button variant="primary" to="/" className="self-start mt-2">Request a Demo</Button>
        </div>
      </div>
    </nav>
  );
}
