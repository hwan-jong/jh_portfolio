import { LIVE_URL } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-center shadow-xl shadow-slate-950/80">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-50 md:text-4xl">
            함께 만들고 싶은 서비스가 있으신가요?
          </h2>
          <p className="mt-4 text-sm text-slate-300 md:text-base">
            새로운 아이디어, 고도화 과제, 협업 제안 모두 환영합니다.
            <br />
            문제를 빠르게 정의하고, 현실적인 범위에서 꾸준히 개선해 나가는 방식으로 함께하겠습니다.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-500/60 bg-sky-500/10 px-4 py-2 text-xs font-medium text-sky-300 transition hover:border-sky-400 hover:bg-sky-500/20 hover:text-sky-200"
            >
              <span aria-hidden>🔗</span>
              포트폴리오 배포 사이트
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              이메일로 연락하기
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-sky-500/70 bg-slate-900/70 px-4 py-2 text-xs font-medium text-sky-300 transition hover:border-sky-300 hover:text-sky-100"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            이메일 주소와 링크는 실제 사용하는 정보로 교체해서 사용하세요.
          </p>
        </div>
      </div>
    </section>
  )
}
