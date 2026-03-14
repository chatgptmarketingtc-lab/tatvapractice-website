import Link from 'next/link';

export default function Button({ children, variant = 'primary', href, to, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-sm transition-all duration-200 cursor-pointer no-underline';
  const variants = {
    primary: 'bg-brand-500 text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-500/25',
    outline: 'bg-transparent text-brand-500 border-2 border-brand-500/20 hover:border-brand-500 hover:bg-brand-500/5',
    white: 'bg-white text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-lg',
    ghost: 'text-brand-500 font-bold hover:text-brand-700 hover:gap-3',
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link href={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
