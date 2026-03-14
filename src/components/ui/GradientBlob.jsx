export default function GradientBlob({ className = '', color1 = '#703b95', color2 = '#442c84', size = 400 }) {
  return (
    <div className={`absolute pointer-events-none opacity-20 anim-blob ${className}`}
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${color1}, ${color2})`, filter: 'blur(80px)' }} />
  );
}
