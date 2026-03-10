import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ToolBanner from './components/ToolBanner'
import Prizes from './components/Prizes'
import Timeline from './components/Timeline'
import Notice from './components/Notice'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col items-center">
          <Header />
          <main className="w-full max-w-6xl px-4 md:px-6 lg:px-10 flex flex-col gap-8 md:gap-12 py-6 md:py-10">
            <Hero />
            <Highlights />
            <ToolBanner />
            <Prizes />
            <Timeline />
            <Notice />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
