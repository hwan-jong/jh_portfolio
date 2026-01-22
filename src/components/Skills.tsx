export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST API', 'Database'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Figma', 'Docker'],
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
              자주 사용하는 기술 스택입니다.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
              새로운 기술을 빠르게 학습하고, 프로젝트에 안정적으로 녹여내는 것을 좋아합니다.
              아래 스택은 실제 프로젝트에서 사용한 경험을 바탕으로 정리했습니다.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-300 shadow-sm">
            현재 관심사 ·{' '}
            <span className="font-semibold text-sky-300">
              성능 최적화 · DX 개선 · 클린 아키텍처
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
