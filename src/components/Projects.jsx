import { Code2, Cpu, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Interactive Data Tool',
    icon: Globe,
    desc: 'An open-source visualization tool for large-scale datasets.',
    tags: ['React', 'D3', 'Open Data']
  },
  {
    title: 'Efficient Model Library',
    icon: Cpu,
    desc: 'Lightweight research codebase for rapid prototyping and benchmarking.',
    tags: ['Python', 'PyTorch']
  },
  {
    title: 'Reproducible Pipelines',
    icon: Code2,
    desc: 'End-to-end pipelines with robust evaluation and tracking.',
    tags: ['MLFlow', 'Docker']
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Projects</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">Selected projects that reflect my research interests and engineering craft.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, icon: Icon, desc, tags }) => (
            <div key={title} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <Icon className="text-indigo-600" size={24} />
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-gray-700 text-sm">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{t}</span>
                ))}
              </div>
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-indigo-100/0 via-purple-100/0 to-sky-100/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
