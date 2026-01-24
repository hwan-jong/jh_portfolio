export default function Projects() {
  const projects = [
    {
      title: 'UWIN 통합 교육행정 시스템',
      description:
        '울산대학교 통합 교육행정 시스템 개발 프로젝트. 모노레포 아키텍처 기반으로 다중 도메인(GEFF, SCFF, ADFF, ECFF) 모듈을 관리하는 대규모 시스템입니다. 레이어드 아키텍처 기반 백엔드와 React 19 기반 프론트엔드를 개발하며, 빌드 시간 40% 단축, 런타임 에러 50% 감소 등의 성과를 달성했습니다.',
      tech: [
        'React 19',
        'TypeScript',
        '.NET 6.0',
        'C#',
        'Dapper',
        'SQL Server',
        'Redis',
        'Nx',
        'Jenkins',
      ],
      link: '#',
      period: '2022 - 현재',
      role: '풀스택 개발자 (4년차)',
      achievements: [
        '모노레포 아키텍처 설계로 빌드 시간 40% 단축',
        'TypeScript 도입으로 런타임 에러 50% 감소',
        '대용량 데이터 처리 최적화로 초기 로딩 시간 70% 단축',
        '공통 컴포넌트 라이브러리로 개발 시간 30% 단축',
      ],
      responsibilities: [
        '모노레포 아키텍처 설계 및 구축 (pnpm workspace, Nx)',
        '레이어드 아키텍처 기반 백엔드 개발 (Controller → Service → Repository)',
        'React 19 + TypeScript 기반 프론트엔드 개발',
        'JWT + Cookie 기반 인증/인가 시스템 구현',
        'CI/CD 파이프라인 구축 (Jenkins)',
        '성능 최적화 및 코드 리뷰',
      ],
    },
    {
      title: '일정 관리 시스템 (UME003)',
      description:
        '학사 일정 등록/조회/수정/삭제 기능을 제공하는 시스템입니다. DevExtreme DataGrid를 활용한 대용량 데이터 처리와 React Hook Form 기반 폼 검증을 구현했습니다.',
      tech: ['React 19', 'TypeScript', '.NET 6.0', 'SQL Server', 'DevExtreme'],
      link: '#',
      period: '2022 - 현재',
      role: '풀스택 개발자',
    },
    {
      title: '예산 관리 시스템',
      description:
        '예산 편성, 집행, 결산 프로세스를 관리하는 시스템입니다. 복잡한 비즈니스 규칙을 프로시저와 서비스 레이어로 분리하여 구현했으며, 대용량 데이터 일괄 처리 기능을 포함합니다.',
      tech: ['React 19', 'TypeScript', '.NET 6.0', 'Dapper', 'SQL Server'],
      link: '#',
      period: '2022 - 현재',
      role: '풀스택 개발자',
    },
  ]

  return (
    <section id="projects" className="bg-slate-950 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-50 md:text-4xl">
              실제 프로젝트에서 구현한 시스템들입니다.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
              대규모 교육행정 시스템 개발을 통해 아키텍처 설계부터 성능 최적화까지 전 과정을 경험했습니다.
              <br />
              단순 기능 구현을 넘어 확장성과 유지보수성을 고려한 개발을 진행했습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-300 shadow-sm">
            팀 규모 · 8명 (백엔드 4명, 프론트엔드 3명, 인프라 1명)
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => {
            const isHighlight = index === 0
            return (
              <article
                key={project.title}
                className={`group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/70 transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-2xl ${
                  isHighlight ? 'md:col-span-2' : ''
                }`}
              >
                <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-[11px] font-medium">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  {isHighlight && (
                    <span className="rounded-full bg-sky-500/15 px-2.5 py-1 text-[11px] font-semibold text-sky-300">
                      대표 프로젝트
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-slate-50 md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {project.achievements && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold text-slate-400">주요 성과</p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-sky-400" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.responsibilities && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-semibold text-slate-400">주요 담당 업무</p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {project.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-sky-400" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] text-slate-100 ring-1 ring-slate-700/70 group-hover:bg-sky-500/10 group-hover:text-sky-200 group-hover:ring-sky-400/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                  <span>
                    {project.period && `${project.period} · `}
                    {project.role || '풀스택 개발자'}
                  </span>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-300 transition group-hover:text-sky-200"
                    >
                      자세히 보기
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
