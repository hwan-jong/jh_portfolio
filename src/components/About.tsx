export default function About() {
  const highlights = [
    '대학/공공기관 정보시스템 구축·고도화 프로젝트 경험',
    '복잡한 업무 프로세스를 기능 단위로 구조화하고, 저장/검증/롤백 기준을 정리해 정합성 이슈를 줄인 경험',
    'Java/Spring 구축과 .NET/React 고도화 경험을 모두 보유',
  ]

  const timeline = [
    {
      period: '2025.10 ~ 2026.02',
      title: '글로컬대학 실행계획서 기반 전산시스템 고도화 3차',
      description: '울산대학교 · 교육행정 시스템 고도화(개선/확장)',
    },
    {
      period: '2025.03 ~ 2025.09',
      title: '금융인증서(개인/사업자) 도입',
      description: '기술보증기금 · 인증/보안 기능 도입',
    },
    {
      period: '2024.12 ~ 2025.02',
      title: '글로컬대학 실행계획서 기반 전산시스템 고도화 2차',
      description: '울산대학교 · 교육행정 시스템 고도화(개선/확장)',
    },
    {
      period: '2024.08 ~ 2024.11',
      title: '산학협력통합정보시스템(UNI-ON) 기능 개선 및 성능 강화',
      description: '강원대학교 산학협력단 · 기능 개선 및 성능 강화',
    },
    {
      period: '2022.02 ~ 2024.09',
      title: '마산대학교 차세대 통합정보시스템 구축 용역',
      description:
        '대학 통합 정보시스템 구축. 학사업무 개발 및 현장실습 파트 업무 흐름 정리, 데이터 연계/정합성 이슈 최소화',
    },
    {
      period: '2021.11 ~ 2022.02',
      title: '경북대학교 차세대 통합정보시스템 구축 용역 사업',
      description: '차세대 통합정보시스템 구축 참여',
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
            운영형 백엔드 시스템을 개선하는 개발자입니다.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 md:text-base">
            단순히 기능을 구현하는 것을 넘어, 사용자의 업무가 자연스럽게 이어지고 운영까지 안정적인
            &quot;현업형 시스템&quot;을 만드는 데 집중합니다.
            <br />
            신규 구축부터 고도화, 인증 기능 도입까지의 경험을 바탕으로 요구사항을 구조화하고,
            데이터 정합성과 성능을 함께 챙기는 개발을 지향합니다.
            <br />
            데이터가 신뢰되어야 운영이 자동화된다고 생각해, 정합성과 예외 처리를 특히 신경 씁니다.
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
              강점 키워드:
              <span className="mx-1 font-semibold text-sky-300">
                업무 흐름/정합성 · 성능 개선 · 인증/보안 · 협업/문서화
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
