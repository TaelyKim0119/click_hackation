const partners = [
  {
    label: 'Anthropic',
    role: 'AI Partner',
    icon: 'smart_toy',
    color: '#e8815c',
    bg: 'rgba(232, 129, 92, 0.08)',
    borderColor: 'rgba(232, 129, 92, 0.25)',
  },
  {
    label: 'JoCoding',
    role: 'Education',
    icon: 'play_circle',
    color: '#FFD700',
    bg: 'rgba(255, 215, 0, 0.08)',
    borderColor: 'rgba(255, 215, 0, 0.25)',
  },
  {
    label: '스피치로그',
    role: 'Organizer',
    icon: 'mic',
    color: '#a855f7',
    bg: 'rgba(168, 85, 247, 0.08)',
    borderColor: 'rgba(168, 85, 247, 0.25)',
  },
]

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-14 py-20 border-t border-slate-800/50">
      {/* 파트너 로고 스트립 */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-700" />
          <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-slate-600">
            Partners &amp; Sponsors
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-700" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">
        {partners.map((p, idx) => (
          <div key={p.label} className="flex items-center">
            {/* 카드 */}
            <div
              className="group relative overflow-hidden rounded-2xl px-10 py-7 flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2 cursor-default"
              style={{
                background: p.bg,
                border: `1px solid ${p.borderColor}`,
                minWidth: '200px',
              }}
            >
              {/* 상단 글로우 라인 */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] rounded-full opacity-60 group-hover:w-full group-hover:opacity-100 transition-all duration-500"
                style={{ background: p.color }}
              />

              {/* 아이콘 */}
              <div
                className="size-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)`,
                  boxShadow: `0 0 30px ${p.color}15`,
                }}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ color: p.color }}
                >
                  {p.icon}
                </span>
              </div>

              {/* 텍스트 */}
              <span className="font-black text-xl tracking-tight text-white">
                {p.label}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full"
                style={{
                  color: p.color,
                  background: `${p.color}15`,
                }}
              >
                {p.role}
              </span>
            </div>

            {/* 연결선 */}
            {idx < partners.length - 1 && (
              <div className="hidden md:flex items-center px-2">
                <div className="w-8 h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
                <div className="size-2 rounded-full bg-slate-600" />
                <div className="w-8 h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 하단 카피라이트 */}
      <p className="text-slate-700 text-xs tracking-wide">
        © 2025 Click Hackathon. All rights reserved.
      </p>
    </footer>
  )
}
