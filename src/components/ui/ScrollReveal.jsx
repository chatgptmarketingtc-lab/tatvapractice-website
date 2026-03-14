'use client';
import { useRef, useEffect } from 'react';
import { useInView } from '@/lib/hooks';

export default function ScrollReveal({ children, variant = 'fadeUp', className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variantMap = { fadeUp: 'fade-in', fadeLeft: 'fade-left', fadeRight: 'fade-right', scaleIn: 'scale-in', stagger: 'fade-in', staggerFast: 'fade-in' };
  const animClass = variantMap[variant] || 'fade-in';

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    if (delay) {
      setTimeout(() => el.classList.add('visible'), delay * 1000);
    } else {
      el.classList.add('visible');
    }
    if (variant === 'stagger' || variant === 'staggerFast') {
      const staggerDelay = variant === 'staggerFast' ? 80 : 120;
      Array.from(el.querySelectorAll('.stagger-child')).forEach((child, i) => {
        setTimeout(() => child.classList.add('visible'), (delay * 1000) + i * staggerDelay);
      });
    }
  }, [isInView, delay, variant]);

  return (
    <div ref={ref} className={`${animClass} ${className}`} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
