const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB3iD-eVth0apfZ-HdxukUwKSGVcq5ntyXTXaOjZ5MBDdOA7tcOESmnTgWDlfjB7WxWQNli6cJ65FdskoAQM3bfTAe2v7DV8fKWmBkikRLuKO6Y_nxTsK711XyTf1ilQKA2LXxt8SrDVuvrJTpimFC5sm71BwDtzqDS69A7TGBmvRrPCVfwksaagcYLv7Ltiw9IcuqrWTG6LWDbuyb8y8lNrOLQZYTr1zF5g_XDwEjg92oU5LpM97JY2GdZEYXB3CzjxBKNJA5xjQ'

export default function Hero() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden min-h-[500px] flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-background-dark via-[#1a2333] to-[#0a0f18] border border-slate-800 neon-border">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("${HERO_BG}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      />
      <div className="relative z-10 flex flex-col gap-6 max-w-3xl">
        <div className="inline-flex items-center self-center px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest">
          Developer Exclusive Event
        </div>
        <h1 className="text-5xl lg:text-7xl font-black leading-none tracking-tighter italic text-shadow-sharp">
          딸깍 해커톤
          <br />
          <span className="text-primary neon-glow">CLICK HACKATHON</span>
        </h1>
        <p className="text-xl lg:text-2xl font-medium text-slate-300">
          "아이디어 기획은 끝났다. 이제는 <span className="text-white">'딸깍'</span>
          으로 진짜 제품을 보여줄 때!"
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button className="px-10 py-4 bg-primary text-white text-lg font-black rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/25 text-shadow-sharp hover:bg-violet-600 shadow-violet-500/30">
            지금 신청하기
          </button>
          <button className="px-10 py-4 glass-panel text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-colors">
            상세 정보 보기
          </button>
        </div>
      </div>
    </div>
  )
}
