import { BookOpenCheck, Beaker, FileText } from 'lucide-react'

export default function Research() {
  const items = [
    {
      title: 'Research Focus',
      icon: Beaker,
      desc: 'Summarize your domains: e.g., machine learning for healthcare, computational biology, HCI, etc.'
    },
    {
      title: 'Key Publications',
      icon: FileText,
      desc: 'List selected papers with venues and years. Provide links to PDFs or DOIs.'
    },
    {
      title: 'Teaching & Service',
      icon: BookOpenCheck,
      desc: 'Include teaching assistantships, invited talks, and reviewing service.'
    },
  ]

  return (
    <section id="research" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Academic Research</h2>
            <p className="mt-3 text-gray-700 max-w-2xl">A concise overview of my research agenda and selected outcomes.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium">Request CV</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="text-indigo-600" size={28} />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900">Featured Publications</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li>
              <a className="hover:underline" href="#">Surname, N. et al. (2024). Title of the paper. Venue XYZ.</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Surname, N. et al. (2023). Another impactful study. Journal ABC.</a>
            </li>
            <li>
              <a className="hover:underline" href="#">Surname, N. et al. (2022). Methodological contribution. Conf DEF.</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
