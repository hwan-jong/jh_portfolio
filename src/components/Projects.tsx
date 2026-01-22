export default function Projects() {
  const projects = [
    {
      title: '프로젝트 1',
      description: '웹 애플리케이션 개발 프로젝트입니다. React와 Node.js를 활용하여 구현했습니다.',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      title: '프로젝트 2',
      description: '반응형 웹사이트 제작 프로젝트입니다. 모던한 UI/UX를 적용했습니다.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: '프로젝트 3',
      description: '풀스택 웹 애플리케이션입니다. 사용자 인증과 데이터 관리를 포함합니다.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL'],
      link: '#',
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
              실제로 사용해 본 기술로 만든 프로젝트들입니다.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-base">
              아래 프로젝트들은 단순 토이 프로젝트가 아니라, 구조·확장성·협업을 고민하며 구현한
              결과물들입니다.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-300 shadow-sm">
            각 카드의 내용은 실제 본인 프로젝트로 자유롭게 수정해서 사용하면 됩니다.
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
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>

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
                  <span>역할 · Frontend / Fullstack</span>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-sky-300 transition group-hover:text-sky-200"
                  >
                    자세히 보기
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
