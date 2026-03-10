import { useState } from 'react'
import SubmitModal from './SubmitModal'

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
    hasSubmit: true,
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
  const [submitOpen, setSubmitOpen] = useState(false)

  return (
    <>
      <div className="glass-panel rounded-2xl md:rounded-3xl p-5 md:p-10 flex flex-col gap-6 md:gap-10">
        <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3 text-shadow-sharp">
          <span className="material-symbols-outlined text-primary">calendar_today</span>
          Event Timeline
        </h3>
        <div className="flex flex-col md:flex-row gap-0 md:gap-6 justify-between relative">
          {/* 연결선 - 데스크톱: 가로 / 모바일: 세로 */}
          <div className="hidden md:block absolute top-7 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-violet-500/40 via-cyan-400/40 via-amber-400/40 to-pink-500/40" />
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-violet-500/40 via-cyan-400/40 via-amber-400/40 to-pink-500/40" />

          {events.map((event, idx) => (
            <div
              key={event.title}
              className="flex md:flex-col items-start md:items-center md:text-center gap-4 flex-1 group py-4 md:py-0 pl-14 md:pl-0 relative"
            >
              {/* 동그라미 + 아이콘 */}
              <div
                className={`absolute left-1 md:relative md:left-auto size-11 md:size-14 shrink-0 rounded-full bg-gradient-to-br ${event.color} ring-4 ${event.ring} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
              >
                <span className="material-symbols-outlined text-white text-xl md:text-2xl">
                  {event.icon}
                </span>
                {event.active && (
                  <span className="absolute -top-1 -right-1 size-3 md:size-4 bg-green-400 rounded-full border-2 border-[#0d021f] animate-pulse" />
                )}
              </div>

              <div className="flex flex-col gap-1 md:gap-4 md:items-center">
                {/* 단계 번호 */}
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${event.textColor}`}>
                  Step {idx + 1}
                </span>

                <h4 className="font-black text-base md:text-lg text-shadow-sharp leading-tight">
                  {event.title}
                </h4>
                <p className={`font-bold text-xs md:text-sm ${event.active ? 'text-primary' : 'text-slate-300'}`}>
                  {event.date}
                </p>
                {event.detail && (
                  <p className={`text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full w-fit ${
                    event.detail === '블라인드 심사'
                      ? 'bg-amber-500/20 text-amber-300 font-extrabold text-xs md:text-sm neon-glow'
                      : 'bg-white/5 text-slate-500'
                  }`}>
                    {event.detail}
                  </p>
                )}
                {event.hasSubmit && (
                  <button
                    onClick={() => setSubmitOpen(true)}
                    className="mt-1 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-bold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:scale-105 transition-transform shadow-md shadow-cyan-500/20"
                  >
                    제출하기
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <SubmitModal open={submitOpen} onClose={() => setSubmitOpen(false)} />
    </>
  )
}
