'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { NAV_FEATURES, NAV_SOLUTIONS } from '@/lib/data';

function DropdownMenu({ items, label }) {
  return (
    <div className="mega-menu absolute top-full left-1/2 w-[280px] bg-white rounded-xl shadow-2xl shadow-black/10 border border-black/5 z-50 p-3"
      style={{ transform: 'translateX(-50%) translateY(8px)' }}>
      <div className="absolute -top-4 left-0 right-0 h-4" />
      {items.map((item, i) => (
        <Link key={i} href={item.path}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-g-1 transition-colors no-underline group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0 bg-brand-500/5">
            {item.icon}
          </div>
          <div>
            <div className="text-sm font-bold text-black group-hover:text-brand-500 transition-colors">{item.name}</div>
            <div className="text-[11px] text-g-4 leading-snug">{item.desc}</div>
          </div>
        </Link>
      ))}
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
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center gap-2">
          <span className="text-xl font-black bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">TatvaPractice</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          <div className="nav-item relative">
            <button className="text-[13.5px] font-semibold text-g-6 hover:text-brand-500 transition-colors py-5 inline-flex items-center gap-1">
              Solution <span className="chevron text-[9px] text-g-3 transition-transform duration-200">▾</span>
            </button>
            <DropdownMenu items={NAV_SOLUTIONS} />
          </div>

          <div className="nav-item relative">
            <button className="text-[13.5px] font-semibold text-g-6 hover:text-brand-500 transition-colors py-5 inline-flex items-center gap-1">
              Features <span className="chevron text-[9px] text-g-3 transition-transform duration-200">▾</span>
            </button>
            <DropdownMenu items={NAV_FEATURES} />
          </div>

          <Link href="/" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors">Pricing</Link>
          <Link href="/about" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors">About Us</Link>
          <Link href="/about" className="text-[13.5px] font-semibold text-g-6 no-underline hover:text-brand-500 transition-colors">Contact</Link>

          <div className="flex items-center gap-3 ml-2">
            <Button variant="outline" to="/" className="!py-2 !px-4 !text-[12.5px] !rounded-lg">Book Demo</Button>
            <Button variant="primary" to="/" className="!py-2 !px-4 !text-[12.5px] !rounded-lg">Start Free Trial</Button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-5 h-0.5 bg-g-6 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-g-6 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-g-6 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-white border-t border-black/5 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-container mx-auto px-8 py-6 flex flex-col gap-4">
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-g-3">Solutions</div>
          {NAV_SOLUTIONS.map((item, i) => (
            <Link key={i} href={item.path} onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500 pl-2">{item.name}</Link>
          ))}
          <div className="text-[10px] font-extrabold uppercase tracking-[2px] text-g-3 mt-2">Features</div>
          {NAV_FEATURES.map((item, i) => (
            <Link key={i} href={item.path} onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500 pl-2">{item.name}</Link>
          ))}
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500 mt-2">Pricing</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500">About Us</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-g-6 no-underline hover:text-brand-500">Contact</Link>
          <div className="flex gap-3 mt-3">
            <Button variant="outline" to="/" className="flex-1 justify-center text-sm">Book Demo</Button>
            <Button variant="primary" to="/" className="flex-1 justify-center text-sm">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
