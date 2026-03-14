'use client';
import { useRef } from 'react';
import { useInView, useCountUp } from '@/lib/hooks';

export default function AnimatedStat({ value, suffix = '', label, decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(value, 2.5, decimals, isInView);
  return (
    <div ref={ref} className="stagger-child text-center">
      <div className="text-3xl lg:text-4xl font-black text-brand-700">
        {decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}
        <span>{suffix}</span>
      </div>
      <div className="text-xs font-semibold text-g-3 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}
