export default function About() {
  const highlights = [
    '교육/행정/산학협력 시스템의 구축·고도화 프로젝트 수행 (대학/공공기관)',
    '복잡한 업무 프로세스의 흐름 정의·연계 및 데이터 정합성 책임 관리 경험',
    '.NET/React 기반 고도화와 Java/Spring 기반 구축 경험을 모두 보유',
  ]

  const timeline = [
    {
      period: '2025.10 ~ 2026.02',
      title: '글로컬대학 실행계획서 기반 전산시스템 고도화 3차',
      description: '울산대학교 · 교육행정 시스템 고도화(개선/확장) 프로젝트 수행',
    },
    {
      period: '2025.03 ~ 2025.09',
      title: '금융인증서(개인/사업자) 도입',
      description: '기술보증기금 · 인증/보안 기능 도입 프로젝트 수행',
    },
    {
      period: '2024.12 ~ 2025.02',
      title: '글로컬대학 실행계획서 기반 전산시스템 고도화 2차',
      description: '울산대학교 · 교육행정 시스템 고도화(개선/확장) 프로젝트 수행',
    },
    {
      period: '2024.08 ~ 2024.11',
      title: '산학협력통합정보시스템(UNI-ON) 기능 개선 및 성능 강화',
      description: '강원대학교 산학협력단 · 기능 개선 및 성능 강화 프로젝트 수행',
    },
    {
      period: '2022.02 ~ 2024.09',
      title: '마산대학교 차세대 통합정보시스템 구축 용역',
      description:
        '대학 통합 정보시스템 구축(2년/25억/51명). 학사업무 개발 및 현장실습 파트 전체 흐름·정합성 책임 관리',
    },
    {
      period: '2021.11 ~ 2022.02',
      title: '경북대학교 차세대 통합정보시스템 구축 용역 사업',
      description:
        '차세대 통합정보시스템 구축 프로젝트 참여',
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
            단순히 기능을 구현하는 것을 넘어, &quot;업무 흐름이 끊기지 않는 시스템&quot;과
            &quot;유지보수 가능한 구조&quot;를 만들기 위해 고민합니다.
            <br />
            신규 구축(대학 통합 정보시스템)부터 고도화(대학 전산시스템), 인증 기능 도입까지 다양한 도메인의 프로젝트를 경험했습니다.
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
              강점 키워드
              <span className="mx-1 font-semibold text-sky-300">
                업무 흐름/정합성 책임 · 성능 개선 · 인증/보안 · 협업/문서화
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
