export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'WebSquare',
        'JavaScript',
        'HTML/CSS',
        'React 19',
        'TypeScript',
        'Vite',
        'React Query',
        'React Hook Form',
        'DevExtreme',
        'Bootstrap 5',
        'Nx (모노레포)',
        'pnpm',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Java',
        'Spring Boot 2.5.3',
        'Spring Security',
        'Spring Transaction',
        'MyBatis',
        'C#',
        '.NET 6.0',
        'ASP.NET Core',
        'Dapper',
        'SQL Server',
        'JWT',
        'Redis',
        'HashiCorp Vault',
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Jenkins', 'IIS', 'Web Deploy', 'Gradle', 'Git/GitLab', 'SonarQube', 'Axios'],
    },
  ]

  return (
    <section id="skills" className="bg-slate-950 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-50 md:text-4xl">
              실제 프로젝트에서 사용한 기술 스택입니다.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
              대학/공공기관 정보시스템의 구축·고도화 프로젝트를 통해 사용한 기술들입니다.
              <br />
              프론트(WebSquare/React)부터 백엔드(Spring/.NET), 데이터/트랜잭션/성능까지 end-to-end 경험이 있습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-300 shadow-sm">
            현재 관심사 ·{' '}
            <span className="font-semibold text-sky-300">
              모노레포 아키텍처 · 성능 최적화 · CI/CD 파이프라인
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/70 transition hover:-translate-y-1 hover:border-sky-400/70 hover:shadow-2xl"
            >
              <h3 className="mb-4 text-xl font-semibold text-slate-50">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-100 ring-1 ring-slate-700/70 group-hover:bg-sky-500/10 group-hover:text-sky-200 group-hover:ring-sky-400/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
