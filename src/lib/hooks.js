'use client';
import { useState, useEffect } from 'react';

export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); if (options.once !== false) observer.disconnect(); }
    }, { threshold: 0.1, rootMargin: '-40px', ...options });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return inView;
}

export function useCountUp(end, duration = 2.5, decimals = 0, enabled = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    let start = 0; const startTime = performance.now();
    function tick(now) {
      const elapsed = (now - startTime) / (duration * 1000);
      if (elapsed >= 1) { setValue(end); return; }
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [enabled, end, duration, decimals]);
  return value;
}
