export default function Header() {
  return (
    <header className="w-full max-w-6xl flex items-center justify-between px-6 py-6 lg:px-10">
      <div className="flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined font-bold">mouse</span>
        </div>
        <h2 className="text-xl font-black tracking-tight uppercase text-shadow-sharp">
          Click Hackathon
        </h2>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center justify-center rounded-full w-10 h-10 text-white hover:bg-primary transition-colors">
          <span className="material-symbols-outlined text-xl">notifications</span>
        </button>
        <span className="px-6 py-2 text-white font-bold text-lg tracking-tight">
          스피치로그
        </span>
      </div>
    </header>
  )
}
