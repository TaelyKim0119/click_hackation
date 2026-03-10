const prizes = [
  {
    rank: '1ST PLACE',
    amount: '1,000,000 원',
    perk: '2 Days Off',
    perkIcon: 'airplane_ticket',
    medal: 'military_tech',
    gradient: 'from-yellow-400 via-amber-500 to-yellow-600',
    border: 'border-yellow-500/40',
    glow: 'shadow-yellow-500/20',
    rankColor: 'text-yellow-400',
    amountSize: 'text-4xl',
    scale: '',
  },
  {
    rank: '2ND PLACE',
    amount: '500,000 원',
    perk: '1 Day Off',
    perkIcon: 'flight',
    medal: 'workspace_premium',
    gradient: 'from-slate-300 via-gray-400 to-slate-500',
    border: 'border-slate-400/30',
    glow: 'shadow-slate-400/10',
    rankColor: 'text-slate-300',
    amountSize: 'text-4xl',
    scale: '',
  },
  {
    rank: '3RD PLACE',
    amount: '300,000 원',
    perk: '1 Day Off',
    perkIcon: 'bed',
    medal: 'stars',
    gradient: 'from-amber-600 via-orange-700 to-amber-800',
    border: 'border-amber-700/30',
    glow: 'shadow-amber-700/10',
    rankColor: 'text-amber-600',
    amountSize: 'text-4xl',
    scale: '',
  },
]

export default function Prizes() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 py-6 md:py-10">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-shadow-sharp">
          Awards &amp; Rewards
        </h2>
        <div className="h-px grow bg-slate-800" />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 items-stretch">
        {prizes.map((prize, idx) => (
          <div
            key={prize.rank}
            className={`${prize.scale} relative overflow-hidden rounded-2xl md:rounded-3xl p-5 md:p-8 flex md:flex-col items-center md:text-center gap-4 md:gap-6 transition-all hover:scale-[1.02] md:hover:scale-105 shadow-xl ${prize.glow} ${prize.border} border glass-panel`}
          >
            {/* 상단 그라데이션 바 */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${prize.gradient}`}
            />

            {/* 메달 아이콘 */}
            <div
              className={`size-12 md:size-16 shrink-0 rounded-full bg-gradient-to-br ${prize.gradient} flex items-center justify-center shadow-lg`}
            >
              <span className="material-symbols-outlined text-white text-2xl md:text-3xl">
                {prize.medal}
              </span>
            </div>

            {/* 모바일: 가로 레이아웃 텍스트 */}
            <div className="flex flex-col md:items-center gap-1 md:gap-4">
              {/* 순위 */}
              <span className={`${prize.rankColor} font-black text-sm md:text-xl tracking-wider`}>
                {prize.rank}
              </span>

              {/* 상금 */}
              <h3 className="text-2xl md:text-4xl font-black text-shadow-sharp leading-none">
                {prize.amount}
              </h3>

              {/* 혜택 */}
              <div className={`flex items-center gap-2 font-bold text-sm md:text-base md:px-4 md:py-2 md:rounded-full`}>
                <span className={`material-symbols-outlined text-lg md:text-2xl ${prize.rankColor}`}>
                  {prize.perkIcon}
                </span>
                <span className={prize.rankColor}>{prize.perk}</span>
              </div>
            </div>

            {/* 1등 배경 장식 */}
            {idx === 0 && (
              <>
                <div className="absolute -top-6 -right-6 size-32 rounded-full bg-yellow-500/5 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 size-24 rounded-full bg-amber-500/5 blur-2xl" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
