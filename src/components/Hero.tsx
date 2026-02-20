export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden"
    >
      {/* 배경 장식 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-600/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pt-24 pb-24 md:flex-row md:items-center">
        {/* 왼쪽: 소개 텍스트 */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            포트폴리오 · 4년차 풀스택 개발자
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="block text-slate-200">아키텍처와 성능을 고민하는</span>
            <span className="mt-2 block bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              풀스택 개발자
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-300 md:text-lg">
            모노레포 아키텍처 설계부터 대용량 데이터 처리 최적화까지,
            <br />
            확장 가능한 시스템을 구축하는 개발자입니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              대표 프로젝트 보러가기
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
            >
              함께 일해요
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-400 md:text-sm">
            <div>
              <div className="font-semibold text-slate-200">경력</div>
              <div className="mt-1">4년차 · 대학/공공 프로젝트 5건(2021.11 ~ 2026.02)</div>
            </div>
            <div>
              <div className="font-semibold text-slate-200">주요 스택</div>
              <div className="mt-1">Java · Spring Boot · Oracle · MyBatis · React/WebSquare</div>
            </div>
          </div>
        </div>

        {/* 오른쪽: 카드형 프로필 / 하이라이트 */}
        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-sky-500/60 via-indigo-500/40 to-purple-500/40 opacity-80 blur-xl" />
            <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-2xl font-bold text-slate-950">
                  Dev
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    Fullstack Developer
                  </p>
                  <p className="text-lg font-semibold text-slate-100">
                    4년차 개발자
                  </p>
                  <p className="text-xs text-slate-400">
                    Backend & Frontend
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    강점
                  </p>
                  <p className="text-sm">
                    모노레포 아키텍처 설계, 대용량 데이터 처리 최적화, 레이어드 아키텍처 기반 백엔드 개발까지 전 과정을 담당합니다.
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    자주 쓰는 기술
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'Oracle', 'MyBatis', 'React', 'WebSquare'].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200 ring-1 ring-slate-700/70"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4 text-xs text-slate-400">
                <div>
                  <p className="font-semibold text-slate-200">현재 프로젝트</p>
                  <p>울산대학교 전산시스템 고도화(글로컬 2·3차)</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
