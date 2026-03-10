const benefits = [
  'Claude\u00a0 MAX 유료 플랜 지원',
  'JoCoding 멤버십 전격 지원',
]

export default function ToolBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl p-[2px] md:p-1 bg-gradient-to-r from-violet-600 via-magenta-500 to-neon-purple">
      <div className="bg-background-dark rounded-[18px] md:rounded-[22px] p-5 md:p-8 lg:p-12 flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-8">
        <div className="flex flex-col gap-3 md:gap-4 text-center lg:text-left">
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <span className="size-2.5 md:size-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 font-bold tracking-widest uppercase text-xs md:text-sm">
              Urgent Update
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-shadow-sharp">
            개발 도구 지원{' '}
            <span className="text-neon-cyan neon-glow underline decoration-violet-500/50">
              3월 13일
            </span>{' '}
            마감
          </h2>
          <p className="text-sm md:text-lg text-slate-300">
            지금 신청하고 프리미엄 개발 환경을 무료로 지원받으세요.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-auto">
          {benefits.map((text) => (
            <div
              key={text}
              className="glass-panel px-4 py-3 md:px-6 md:py-4 rounded-xl border-primary/20 flex items-center gap-3 md:gap-4"
            >
              <span className="material-symbols-outlined text-neon-cyan text-lg md:text-2xl">check_circle</span>
              <span className="font-bold text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
