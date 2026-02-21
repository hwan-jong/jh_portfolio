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

          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pass1039@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              이메일로 연락하기
            </a>
            <p className="text-sm font-medium text-slate-200">pass1039@gmail.com</p>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            연락은 이메일로 부탁드립니다.
          </p>
        </div>
      </div>
    </section>
  )
}
