'use client';
import { TiltCard } from '@/components/ui';

export function HomepageHeroVisual() {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-2xl shadow-brand-700/10 p-5 border border-brand-500/5">
        <div className="flex gap-1.5 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-5">
          <div className="bg-white rounded-xl p-4 border-l-[3px] border-brand-500 mb-3">
            <div className="text-[9px] font-extrabold text-brand-500 uppercase tracking-wider mb-2">AI-Powered Prescription</div>
            <div className="space-y-1.5">
              <div className="h-2 bg-brand-500/8 rounded w-full" />
              <div className="h-2 bg-brand-500/8 rounded w-[70%]" />
              <div className="h-2 bg-brand-500/8 rounded w-[85%]" />
              <div className="h-2 bg-brand-500/8 rounded w-[55%]" />
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-500 to-brand-700 text-white text-[9px] font-extrabold px-3 py-1.5 rounded-full">
            ⚡ Zyvelor AI — Voice-to-Prescription Active
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            {[{ n: '4', l: 'AI Rx Modes' }, { n: '12s', l: 'Avg Rx Time' }, { n: '20+', l: 'Specialties' }].map((m, i) => (
              <div key={i} className="bg-white rounded-lg p-2.5 text-center">
                <div className="text-base font-black text-brand-700">{m.n}</div>
                <div className="text-[8px] font-bold text-g-3">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-lg shadow-brand-500/10 px-4 py-2.5 flex items-center gap-2 anim-float1 border border-brand-500/10">
        <span className="text-lg">🎤</span><span className="text-[11px] font-bold text-brand-700">VoiceRx Active</span>
      </div>
      <div className="absolute -left-4 bottom-12 bg-white rounded-xl shadow-lg shadow-brand-500/10 px-4 py-2.5 flex items-center gap-2 anim-float2 border border-brand-500/10">
        <span className="text-lg">🧠</span><span className="text-[11px] font-bold text-brand-700">20+ AI Agents</span>
      </div>
    </div>
  );
}

export function ProductHeroVisual({ icon, name, desc, pills = [], iconBg }) {
  return (
    <div className="relative">
      <TiltCard className="bg-white rounded-2xl shadow-2xl shadow-brand-700/10 p-5 border border-brand-500/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl text-white" style={{ background: iconBg || 'linear-gradient(135deg, #703b95, #442c84)' }}>{icon}</div>
          <div><div className="text-sm font-extrabold">{name}</div><div className="text-[11px] text-g-3">{desc}</div></div>
        </div>
        <div className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-xl p-5 min-h-[200px]">
          <div className="space-y-2.5">
            <div className="flex gap-2"><div className="h-3 rounded bg-brand-500/20 flex-[2]" /><div className="h-3 rounded bg-g-2/40 flex-1" /></div>
            <div className="flex gap-2"><div className="h-3 rounded bg-g-2/40 flex-1" /><div className="h-3 rounded bg-brand-500/15 flex-[2]" /></div>
            <div className="flex gap-2"><div className="h-3 rounded bg-brand-500/10 flex-1" /><div className="h-3 rounded bg-g-2/40 flex-[2]" /><div className="h-3 rounded bg-g-2/40 flex-1" /></div>
          </div>
          {pills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {pills.map((p, i) => <span key={i} className="text-[10px] font-bold bg-white/80 text-brand-700 px-3 py-1 rounded-full">{p}</span>)}
            </div>
          )}
        </div>
      </TiltCard>
    </div>
  );
}
