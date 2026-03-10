const notices = [
  {
    icon: 'assignment_turned_in',
    title: '작품 제출 의무',
    description:
      '개발 도구를 지원받은 참가자는 반드시 최종 작품을 제출해야 합니다. 미제출 시 향후 지원이 제한될 수 있습니다.',
  },
  {
    icon: 'copyright',
    title: '작품 소유권 안내',
    description:
      '본 해커톤에 제출된 모든 작품의 지식재산권은 회사에 귀속됩니다.',
  },
]

export default function Notice() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-shadow-sharp">
          Notice
        </h2>
        <div className="h-px grow bg-slate-800" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {notices.map((item) => (
          <div
            key={item.title}
            className="glass-panel rounded-2xl p-4 md:p-8 flex gap-3 md:gap-5 border-red-500/20 hover:border-red-500/40 transition-all"
          >
            <div className="size-10 md:size-12 shrink-0 rounded-xl bg-red-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-red-400 text-xl md:text-2xl">
                {item.icon}
              </span>
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <h4 className="font-black text-base md:text-lg text-shadow-sharp">{item.title}</h4>
              <p className="text-xs md:text-sm leading-relaxed text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
