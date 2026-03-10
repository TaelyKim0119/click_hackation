export default function Header() {
  return (
    <header className="w-full max-w-6xl flex items-center justify-between px-4 py-4 md:px-6 md:py-6 lg:px-10">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="size-7 md:size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined font-bold text-lg md:text-2xl">mouse</span>
        </div>
        <h2 className="text-base md:text-xl font-black tracking-tight uppercase text-shadow-sharp">
          Click Hackathon
        </h2>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button className="flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 text-white hover:bg-primary transition-colors">
          <span className="material-symbols-outlined text-lg md:text-xl">notifications</span>
        </button>
        <span className="px-3 py-1 md:px-6 md:py-2 text-white font-bold text-sm md:text-lg tracking-tight">
          스피치로그
        </span>
      </div>
    </header>
  )
}
