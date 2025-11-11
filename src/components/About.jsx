import { GraduationCap, Award, MapPin } from 'lucide-react'

export default function About() {
  const highlights = [
    { icon: GraduationCap, title: 'Education', desc: 'PhD candidate with a focus on advanced research and scientific rigor.' },
    { icon: Award, title: 'Publications', desc: 'Peer-reviewed papers in top-tier conferences and journals.' },
    { icon: MapPin, title: 'Affiliation', desc: 'Collaborating with interdisciplinary labs and institutions.' },
  ]

  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              I am a researcher passionate about pushing the boundaries of knowledge. My work spans theory, engineering, and data, with a focus on creating reproducible science and open research tools.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
                  <Icon className="text-indigo-600" size={24} />
                  <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-sky-100 border border-gray-200" />
            <div className="absolute -inset-4 -z-10 blur-3xl bg-gradient-to-tr from-indigo-300/30 via-purple-300/30 to-sky-300/30 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
