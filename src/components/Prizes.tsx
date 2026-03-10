const prizes = [
  {
    rank: '1ST PLACE',
    amount: '3,000,000 KRW',
    perk: '5 Days Off',
    perkIcon: 'airplane_ticket',
    highlight: true,
  },
  {
    rank: '2ND PLACE',
    amount: '2,000,000 KRW',
    perk: '3 Days Off',
    perkIcon: 'flight',
    highlight: false,
  },
  {
    rank: '3RD PLACE',
    amount: '1,000,000 KRW',
    perk: '1 Day Off',
    perkIcon: 'bed',
    highlight: false,
  },
]

export default function Prizes() {
  return (
    <div className="flex flex-col gap-8 py-10">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-black uppercase tracking-tight text-shadow-sharp">
          Awards &amp; Rewards
        </h2>
        <div className="h-px grow bg-slate-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prizes.map((prize) => (
          <div
            key={prize.rank}
            className={`${
              prize.highlight
                ? 'bg-gradient-to-b from-primary/20 to-transparent border border-primary/30'
                : 'glass-panel border-slate-700'
            } p-8 rounded-3xl flex flex-col items-center text-center gap-6 relative overflow-hidden`}
          >
            {prize.highlight && (
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">military_tech</span>
              </div>
            )}
            <span
              className={`${
                prize.highlight ? 'text-primary' : ''
              } font-black text-xl text-shadow-sharp`}
            >
              {prize.rank}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-black text-shadow-sharp">{prize.amount}</h3>
              <div className="flex items-center justify-center gap-2 text-neon-cyan font-bold">
                <span className="material-symbols-outlined">{prize.perkIcon}</span>
                <span>{prize.perk}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
