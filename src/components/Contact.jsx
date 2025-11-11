import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-t from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Let’s connect</h2>
            <p className="mt-4 text-gray-700">I’m open to research collaborations, talks, and consulting. Reach out and I’ll get back soon.</p>
            <div className="mt-6 space-y-3">
              <a className="inline-flex items-center gap-2 text-gray-900 hover:underline" href="mailto:you@example.com">
                <Mail size={18} /> you@example.com
              </a>
              <a className="inline-flex items-center gap-2 text-gray-900 hover:underline" href="#" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 text-gray-900 hover:underline" href="#" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="relative">
            <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <input className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Name" />
                <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Email" />
                <textarea rows="4" className="w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Message" />
                <button type="button" className="rounded-md bg-gray-900 text-white px-4 py-2 font-medium">Send</button>
              </div>
            </form>
            <div className="absolute -inset-4 -z-10 blur-3xl bg-gradient-to-tr from-indigo-300/30 via-purple-300/30 to-sky-300/30 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
