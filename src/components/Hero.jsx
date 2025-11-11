import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
            PhD Researcher • Portfolio
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            Exploring ideas at the edge of science
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I investigate complex problems and turn insights into publications, tools, and open datasets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="pointer-events-auto inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 font-medium shadow-lg shadow-black/20 hover:bg-black transition">
              View my research
            </a>
            <a href="#projects" className="pointer-events-auto inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50">
              See projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
