import { useState } from 'react'
import ApplyModal from './ApplyModal'

const HERO_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB3iD-eVth0apfZ-HdxukUwKSGVcq5ntyXTXaOjZ5MBDdOA7tcOESmnTgWDlfjB7WxWQNli6cJ65FdskoAQM3bfTAe2v7DV8fKWmBkikRLuKO6Y_nxTsK711XyTf1ilQKA2LXxt8SrDVuvrJTpimFC5sm71BwDtzqDS69A7TGBmvRrPCVfwksaagcYLv7Ltiw9IcuqrWTG6LWDbuyb8y8lNrOLQZYTr1zF5g_XDwEjg92oU5LpM97JY2GdZEYXB3CzjxBKNJA5xjQ'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden min-h-[360px] md:min-h-[500px] flex flex-col justify-center items-center text-center p-5 md:p-8 bg-gradient-to-br from-background-dark via-[#1a2333] to-[#0a0f18] border border-slate-800 neon-border">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("${HERO_BG}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        />
        <div className="relative z-10 flex flex-col gap-4 md:gap-6 max-w-3xl">
          <div className="inline-flex items-center self-center px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs md:text-sm font-bold uppercase tracking-widest">
            Developer Exclusive Event
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-none tracking-tighter italic text-shadow-sharp">
            딸깍 해커톤
            <br />
            <span className="text-primary neon-glow">CLICK HACKATHON</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-medium text-slate-300 px-2">
            "아이디어 기획은 끝났다. 이제는 <span className="text-white">'딸깍'</span>
            으로 진짜 제품을 보여줄 때!"
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 md:px-10 md:py-4 bg-primary text-white text-base md:text-lg font-black rounded-xl hover:scale-105 transition-transform shadow-lg shadow-primary/25 text-shadow-sharp hover:bg-violet-600 shadow-violet-500/30 w-full md:w-auto"
            >
              개발 도구 신청하기
            </button>
          </div>
        </div>
      </div>

      <ApplyModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
