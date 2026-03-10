const events = [
  {
    title: '신청 및 도구 지원',
    date: '~ 3월 13일 (수)',
    detail: 'Claude & JoCoding 멤버십 지원',
    icon: 'edit_note',
    color: 'from-violet-500 to-purple-600',
    ring: 'ring-violet-500/30',
    textColor: 'text-violet-400',
    active: true,
  },
  {
    title: '프로덕트 최종 제출',
    date: '~ 4월 13일 (월)',
    detail: '개발 완료본 및 시연 영상 제출',
    icon: 'upload_file',
    color: 'from-cyan-400 to-blue-500',
    ring: 'ring-cyan-400/30',
    textColor: 'text-cyan-400',
    active: false,
  },
  {
    title: '1차 심사',
    date: '4월 중 예정',
    detail: '블라인드 심사',
    icon: 'visibility_off',
    color: 'from-amber-400 to-orange-500',
    ring: 'ring-amber-400/30',
    textColor: 'text-amber-400',
    active: false,
  },
  {
    title: '데모 데이 (Demo Day)',
    date: '4월 중 예정',
    detail: '최종 심사 및 시상식 진행',
    icon: 'emoji_events',
    color: 'from-pink-500 to-rose-600',
    ring: 'ring-pink-500/30',
    textColor: 'text-pink-400',
    active: false,
  },
]

export default function Timeline() {
  return (
    <div className="glass-panel rounded-3xl p-10 flex flex-col gap-10">
      <h3 className="text-2xl font-bold flex items-center gap-3 text-shadow-sharp">
        <span className="material-symbols-outlined text-primary">calendar_today</span>
        Event Timeline
      </h3>
      <div className="flex flex-col md:flex-row gap-6 justify-between relative">
        {/* 연결선 */}
        <div className="hidden md:block absolute top-7 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-violet-500/40 via-cyan-400/40 via-amber-400/40 to-pink-500/40" />

        {events.map((event, idx) => (
          <div
            key={event.title}
            className="flex flex-col items-center text-center gap-4 flex-1 group"
          >
            {/* 동그라미 + 아이콘 */}
            <div
              className={`relative size-14 rounded-full bg-gradient-to-br ${event.color} ring-4 ${event.ring} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
            >
              <span className="material-symbols-outlined text-white text-2xl">
                {event.icon}
              </span>
              {event.active && (
                <span className="absolute -top-1 -right-1 size-4 bg-green-400 rounded-full border-2 border-[#0d021f] animate-pulse" />
              )}
            </div>

            {/* 단계 번호 */}
            <span className={`text-xs font-bold uppercase tracking-widest ${event.textColor}`}>
              Step {idx + 1}
            </span>

            <h4 className="font-black text-lg text-shadow-sharp leading-tight">
              {event.title}
            </h4>
            <p className={`font-bold text-sm ${event.active ? 'text-primary' : 'text-slate-300'}`}>
              {event.date}
            </p>
            {event.detail && (
              <p className="text-xs text-slate-500 bg-white/5 px-3 py-1.5 rounded-full">
                {event.detail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
