import { useState } from 'react'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw5r_3weZVoy1m7iegygrRaYCd7b68uPQBNyoyc5AmJAIgbsCWHg20BgLvIhO7BRM70/exec'

interface Props {
  open: boolean
  onClose: () => void
}

export default function SubmitModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', project: '', link: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const params = new URLSearchParams({
        type: 'submit',
        name: form.name,
        project: form.project,
        link: form.link,
      })
      await fetch(`${APPS_SCRIPT_URL}?${params.toString()}`, {
        method: 'GET',
        mode: 'no-cors',
      })
      setDone(true)
    } catch {
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    setForm({ name: '', project: '', link: '' })
    setDone(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative w-full max-w-md glass-panel rounded-3xl p-8 border-cyan-400/30 shadow-2xl shadow-cyan-500/10">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {done ? (
          <div className="flex flex-col items-center gap-6 py-8">
            <div className="size-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-cyan-400 text-4xl">
                rocket_launch
              </span>
            </div>
            <h3 className="text-2xl font-black text-shadow-sharp">제출 완료!</h3>
            <p className="text-slate-400 text-center">
              프로덕트가 성공적으로 제출되었습니다.<br />
              심사 결과는 추후 안내드리겠습니다.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-xl hover:bg-cyan-600 transition-colors"
            >
              확인
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 mb-8">
              <h3 className="text-2xl font-black text-shadow-sharp">
                프로덕트 제출
              </h3>
              <p className="text-sm text-slate-400">
                완성된 프로덕트 링크를 제출해주세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-300">이름</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-300">프로젝트명</label>
                <input
                  type="text"
                  required
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  placeholder="프로젝트 이름"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-300">
                  프로덕트 링크
                </label>
                <input
                  type="url"
                  required
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg font-black rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? '제출 중...' : '제출하기'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
