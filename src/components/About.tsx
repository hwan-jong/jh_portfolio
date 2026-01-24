export default function About() {
  const highlights = [

    '모노레포 아키텍처 설계 및 구축으로 빌드 시간 40% 단축',
    'TypeScript 도입으로 런타임 에러 50% 감소, 코드 품질 개선',
    '대용량 데이터 처리 최적화로 초기 로딩 시간 70% 단축',
  ]

  const timeline = [
    {
      period: '2022 - 현재',
      title: 'UWIN 통합 교육행정 시스템 · 풀스택 개발자',
      description:
        'C# · .NET 6.0 · React 19 · TypeScript 기반 대규모 시스템 개발. 모노레포 아키텍처 설계, 레이어드 아키텍처 기반 백엔드 개발, 인증/인가 시스템 구현',
    },
  ]

  return (
    <section id="about" className="bg-slate-950 py-20 px-4 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row">
        <div className="flex-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            아키텍처와 성능을 고민하며
            <br />
            확장 가능한 시스템을 구축하는 개발자입니다.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 md:text-base">
            단순히 기능을 구현하는 것을 넘어, &quot;어떻게 하면 더 효율적이고 안정적인 시스템을 만들 수 있을까?&quot;를 고민합니다.
            <br />
            모노레포 구조 설계부터 대용량 데이터 처리 최적화까지, 전 과정을 책임지는 풀스택 개발자입니다.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-200 md:text-base">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-slate-900/70">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Experience
            </h3>
            <div className="mt-4 space-y-6">
              {timeline.map((item) => (
                <div key={item.title} className="relative pl-4">
                  <div className="absolute left-0 top-1 h-full w-px bg-slate-700" />
                  <div className="absolute -left-1 top-1 h-2 w-2 rounded-full bg-sky-400" />
                  <p className="text-xs font-medium uppercase tracking-wide text-sky-300">
                    {item.period}
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900/60 p-4 text-xs text-slate-300 md:text-sm">
              주요 성과
              <span className="mx-1 font-semibold text-sky-300">
                빌드 시간 40% 단축 · 개발 시간 30% 단축 · 런타임 에러 50% 감소
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
