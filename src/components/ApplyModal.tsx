import { useState } from 'react'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxq98u-E3GlqL0SZWlF4DrX9xEaHJFjIsksCHaHephi51zKGhH_3iH9zByB0TEtsZ4/exec'

const toolOptions = [
  { value: 'claude', label: 'Claude MAX 지원' },
  { value: 'jocoding', label: 'JoCoding 유료 구독 지원' },
  { value: 'both', label: '둘 다 지원' },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function ApplyModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', org: '', email: '', tool: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const params = new URLSearchParams({
        name: form.name,
        org: form.org,
        email: form.email,
        tool: form.tool,
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
    setForm({ name: '', org: '', email: '', tool: '' })
    setDone(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md glass-panel rounded-3xl p-8 border-primary/30 shadow-2xl shadow-primary/10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {done ? (
          <div className="flex flex-col items-center gap-6 py-8">
            <div className="size-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-green-400 text-4xl">
                check_circle
              </span>
            </div>
            <h3 className="text-2xl font-black text-shadow-sharp">신청 완료!</h3>
            <p className="text-slate-400 text-center">
              개발 도구 신청이 완료되었습니다.<br />
              등록하신 이메일로 안내드리겠습니다.
            </p>
            <p className="text-xs text-slate-500 text-center">
              확인 메일이 오지 않을 경우 관리자에게 문의해주세요.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-violet-600 transition-colors"
            >
              확인
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 mb-8">
              <h3 className="text-2xl font-black text-shadow-sharp">
                개발 도구 신청
              </h3>
              <p className="text-sm text-slate-400">
                아래 정보를 입력하고 개발 도구를 신청하세요.<br />
                <span className="text-amber-400 font-bold">* 확인 메일 발송을 위해 Gmail 주소로 신청해주세요.</span>
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-300">소속</label>
                <input
                  type="text"
                  required
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  placeholder="회사/학교명"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-300">이메일</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-300">신청 내역</label>
                {toolOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                      form.tool === option.value
                        ? 'border-primary bg-primary/10 text-white'
                        : 'border-slate-700 bg-white/5 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tool"
                      value={option.value}
                      required
                      checked={form.tool === option.value}
                      onChange={(e) => setForm({ ...form, tool: e.target.value })}
                      className="hidden"
                    />
                    <div className={`size-5 rounded-full border-2 flex items-center justify-center ${
                      form.tool === option.value ? 'border-primary' : 'border-slate-600'
                    }`}>
                      {form.tool === option.value && (
                        <div className="size-2.5 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="font-bold text-sm">{option.label}</span>
                  </label>
                ))}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 px-8 py-4 bg-primary text-white text-lg font-black rounded-xl hover:bg-violet-600 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? '제출 중...' : '신청하기'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
