'use client';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ScrollReveal, GradientBlob, Button } from '@/components/ui';

function HeroTextReveal({ tag, title, subtitle, buttons = [] }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  return (
    <div ref={ref}>
      {tag && (
        <div className={`inline-flex items-center gap-2 bg-brand-500/5 text-brand-500 text-[11px] font-extrabold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />{tag}
        </div>
      )}
      <h1 className={`text-4xl lg:text-[46px] font-black leading-[1.1] tracking-tight mb-5 fade-in ${visible ? 'visible' : ''}`}
        style={{ transitionDelay: '0.2s' }} dangerouslySetInnerHTML={{ __html: title }} />
      <p className={`text-base lg:text-[16.5px] text-g-6 leading-relaxed mb-8 max-w-lg fade-in ${visible ? 'visible' : ''}`}
        style={{ transitionDelay: '0.35s' }}>{subtitle}</p>
      {buttons.length > 0 && (
        <div className={`flex flex-wrap gap-3 fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
          {buttons.map((btn, i) => <Button key={i} variant={btn.variant || (i === 0 ? 'primary' : 'outline')} to={btn.to}>{btn.text}</Button>)}
        </div>
      )}
    </div>
  );
}

export default function HeroSection({ tag, title, subtitle, buttons = [], visual, gradient = 'from-white via-brand-50 to-brand-100' }) {
  return (
    <section className={`pt-32 lg:pt-36 pb-16 lg:pb-20 bg-gradient-to-br ${gradient} overflow-hidden relative`}>
      <GradientBlob className="-top-40 -right-40" size={500} />
      <GradientBlob className="bottom-0 left-0" size={350} color1="#a19fcf" color2="#703b95" />
      <div className="max-w-container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroTextReveal tag={tag} title={title} subtitle={subtitle} buttons={buttons} />
          {visual && (
            <ScrollReveal variant="scaleIn" className="hidden lg:block">
              {visual}
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
