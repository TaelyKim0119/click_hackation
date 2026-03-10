const logos = [
  { label: 'Claude', bgClass: 'bg-white', name: 'Anthropic' },
  { label: 'JO', bgClass: 'bg-[#FFD700]', name: 'JoCoding' },
]

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-10 py-16 border-t border-slate-800">
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all"
          >
            <div
              className={`size-10 ${logo.bgClass} rounded flex items-center justify-center`}
            >
              <span className="text-black font-black text-xs text-shadow-sharp">
                {logo.label}
              </span>
            </div>
            <span className="font-bold text-lg tracking-tight">{logo.name}</span>
          </div>
        ))}
      </div>
    </footer>
  )
}
