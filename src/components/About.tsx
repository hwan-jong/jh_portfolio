export default function About() {
  const highlights = [
    '사용자 경험 중심의 인터랙티브 UI 설계',
    '비즈니스 요구사항을 코드로 빠르게 검증하는 프로토타이핑',
    '협업을 고려한 클린 코드와 문서화',
  ]

  const timeline = [
    {
      period: '2022 - 현재',
      title: '웹 프론트엔드 & 풀스택 프로젝트',
      description:
        'Next.js · TypeScript 기반 서비스 개발, 디자인 시스템 정리, 반응형 UI 구축 경험',
    },
    {
      period: '2020 - 2022',
      title: '웹 애플리케이션 개발',
      description:
        'React, Node.js, REST API를 활용한 다양한 사이드 프로젝트와 실무 지원',
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
            함께 문제를 정의하고
            <br />
            해결 방법을 설계하는 개발자입니다.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 md:text-base">
            단순히 기능을 구현하는 수준을 넘어, &quot;왜 이 기능이 필요할까?&quot;를 함께
            고민하는 것을 좋아합니다.
            <br />
            기획·디자인·개발이 자연스럽게 이어지는 흐름을 만드는 것이 목표입니다.
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
              최근에는
              <span className="mx-1 font-semibold text-sky-300">
                퍼포먼스 최적화, 디자인 시스템, 접근성
              </span>
              에 관심을 가지고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
