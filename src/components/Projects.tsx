type Project = {
  title: string
  description: string
  period: string
  client?: string
  role?: string
  tech?: string[]
  achievements?: string[]
  responsibilities?: string[]
  link?: string
  highlight?: boolean
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: '글로컬대학 실행계획서 기반 전산시스템 고도화 (2차·3차)',
      client: '울산대학교',
      period: '2024.12 ~ 2026.02',
      role: '풀스택 개발자',
      description:
        '교육행정 전산시스템 고도화. 레이어드 아키텍처 기반 백엔드와 React 기반 프론트엔드를 개발하며, 인증/보안 및 성능 개선을 포함한 기능 확장과 안정화 작업을 수행했습니다.',
      tech: [
        'C#',
        '.NET 6.0',
        'ASP.NET Core Web API',
        'Dapper',
        'SQL Server',
        'Redis',
        'HashiCorp Vault',
        'React',
        'TypeScript',
        'Vite',
        'React Query',
        'DevExtreme',
        'Jenkins',
        'IIS',
      ],
      achievements: [
        'JWT + Cookie 기반 하이브리드 인증 및 SSO 연동 경험',
        'CSRF 보호 필터 구현 및 보안 설정 강화',
        '대용량 그리드 렌더링 최적화(가상 스크롤/페이징) 및 불필요한 호출 감소',
      ],
      responsibilities: [
        'Controller → Service → Repository 레이어드 아키텍처 기반 백엔드 개발',
        '트랜잭션 처리/에러 핸들링 표준화 및 데이터 무결성 보장',
        'React + TypeScript 기반 화면/폼/그리드 기능 구현',
        'CI/CD 파이프라인(Jenkins) 및 배포(IIS/Web Deploy) 흐름 대응',
      ],
      highlight: true,
    },
    {
      title: '금융인증서(개인/사업자) 도입',
      client: '기술보증기금',
      period: '2025.03 ~ 2025.09',
      role: '풀스택 개발(협업 지원)',
      description:
        '금융인증서(개인/사업자) 도입을 위한 기능 개발 및 연동/검증 업무를 수행했습니다. 리다이렉트 기반 인증 흐름과 실패 케이스 처리 기준을 정리해 운영 반영을 지원했습니다.',
      tech: ['Spring 기반 API', 'React', 'TypeScript', '금융인증 SDK 연동'],
      achievements: [
        '인증 실패/취소/재요청 케이스 처리 기준을 정리해 운영 전달 품질 개선',
        '통합 테스트 케이스 및 결과서 작성으로 반영 전 검증 체계 보강',
        '보안상 상세 비공개(협업 지원 성격)',
      ],
      responsibilities: [
        '금융인증 SDK 연동 및 전자서명/본인인증(개인·사업자) 흐름 전환',
        '리다이렉트 기반 인증 UX 동선 정리',
        '오류코드 기반 실패 메시지/분기 처리 정비',
      ],
    },
    {
      title: '산학협력통합정보시스템(UNI-ON) 기능 개선 및 성능 강화',
      client: '강원대학교 산학협력단',
      period: '2024.08 ~ 2024.11',
      role: '백엔드 개발',
      description:
        '산학협력통합정보시스템의 기능 개선 및 성능 강화를 위한 개선 작업을 수행했습니다. 대량 조회 페이징 정비와 권한/승인 저장 검증 흐름 분리를 중심으로 안정화했습니다.',
      tech: ['Java 17', 'Spring Boot 2.7', 'Oracle', 'MyBatis', 'PageHelper', 'Redis', 'WebSquare'],
      achievements: [
        'ROW_NUMBER 기반 페이징 정비로 대량 조회 구간 응답 안정화',
        '권한·승인·기업정보 저장 분기의 검증/저장 단계 분리로 추적성 개선',
        '반복 장애 구간 예외 처리 보강',
      ],
      responsibilities: [
        'pageNum/pageSize 기준 페이징 쿼리 정비',
        '검증 단계와 저장 단계를 분리해 저장 로직 정비',
        '권한관리/승인/기업정보 저장 실패 분기 정리',
      ],
    },
    {
      title: '마산대학교 차세대 통합정보시스템 구축 용역',
      client: '마산대학교',
      period: '2022.02 ~ 2024.09',
      role: '학사업무 개발자',
      description:
        '대학 통합 정보시스템 구축. 학사업무 모듈 전반 개발에 참여했고, 현장실습 파트는 “기본정보 → 계획 → 승인 → 진행 → 평가·만족도·성찰” 흐름이 끊기지 않도록 단계 간 연계/정합성을 책임 관리했습니다.',
      tech: ['WebSquare', 'Spring Boot 2.5.3', 'Java', 'MyBatis', 'Gradle', 'SonarQube', 'GitLab'],
      achievements: [
        '현장실습 전 과정 업무 흐름 정의 및 단계 간 데이터 연계/정합성 책임',
        '다단계 승인 워크플로우 구현 및 변경 영향 범위 관리',
        'MyBatis 동적 쿼리/조인 최적화 및 대용량 페이징 적용',
        'Spring Transaction 기반 트랜잭션 경계 설정 및 롤백 처리로 데이터 무결성 보장',
      ],
      responsibilities: [
        '학사업무 모듈(내부 모듈명: mu-bach) 기능 개발/유지보수(학적/수강/성적/교과/신청 등)',
        '현장실습 파트: 교통비 책정표, 기본정보, 계획/승인, 진행, 만족도/성찰 기능 개발',
        'REST API 설계/구현 및 예외 처리 표준화',
        '요구사항 변경 시 전체 프로세스 영향 분석 및 화면/기능 일관성 유지',
      ],
    },
    {
      title: '경북대학교 차세대 통합정보시스템 구축 용역 사업',
      client: '경북대학교',
      period: '2021.11 ~ 2022.02',
      role: '단기 투입 지원',
      description:
        '차세대 통합정보시스템 구축 프로젝트에 단기 투입으로 참여했습니다. 증명서/리포트 출력, 발급내역 적재, 엑셀 업로드 검증과 공통 결재·파일업로드 연동 업무를 수행했습니다.',
      tech: ['WebSquare', 'Oracle'],
      achievements: [
        '단기 기간 내 핵심 업무 흐름 정리 및 인수인계 가능 상태로 마무리',
        '증명서·수강료·장학 처리의 입력/출력 검증 기준 보강',
      ],
      responsibilities: [
        '증명서/리포트 출력 및 발급내역 적재',
        '강의료/장학 생성 로직 및 엑셀 업로드 검증',
        '공통 결재/파일업로드 연동',
      ],
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
              단순히 “기능을 만든 경험”을 넘어서,
              업무 흐름이 끊기지 않도록 설계하고 운영 관점에서 개선해 온 과정을 담았습니다.
              <br />
              아키텍처·트랜잭션·인증/보안·성능을 함께 고려하며 안정적인 시스템을 만드는 데 집중했습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-300 shadow-sm">
            프로젝트 기간 · 2021.11 ~ 2026.02
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => {
            const isHighlight = project.highlight ?? index === 0
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
                  <div className="flex items-center gap-2">
                    {project.client && (
                      <span className="rounded-full bg-slate-800/70 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                        {project.client}
                      </span>
                    )}
                    {isHighlight && (
                      <span className="rounded-full bg-sky-500/15 px-2.5 py-1 text-[11px] font-semibold text-sky-300">
                        대표 프로젝트
                      </span>
                    )}
                  </div>
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

                {project.tech?.length ? (
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
                ) : null}

                <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                  <span>
                    {project.period}
                    {project.role ? ` · ${project.role}` : ''}
                  </span>
                  {project.link && project.link !== '#' && (
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
