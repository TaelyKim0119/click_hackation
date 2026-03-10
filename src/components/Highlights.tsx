const highlights = [
  {
    icon: 'terminal',
    title: 'Claude MAX 유료 플랜 지원',
    description:
      '화려한 PPT나 기획안은 필요 없습니다. 우리가 보고 싶은 건 오직 작동하는 MVP(Minimum Viable Product)뿐입니다.',
  },
  {
    icon: 'rocket_launch',
    title: '1인 다작 환영',
    description:
      '창의력에 한계를 두지 마세요. 개발 속도가 곧 경쟁력입니다. 여러 개의 혁신적인 결과물 제출이 가능합니다.',
  },
]

export default function Highlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {highlights.map((item) => (
        <div
          key={item.icon}
          className="glass-panel p-8 rounded-2xl flex flex-col gap-4 group hover:border-primary/50 transition-all"
        >
          <div className="size-14 rounded-xl bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
          </div>
          <h3 className="text-2xl font-bold text-shadow-sharp">{item.title}</h3>
          <p className="leading-relaxed text-slate-300">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
