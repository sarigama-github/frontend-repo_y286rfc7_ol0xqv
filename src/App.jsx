import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name — PhD Researcher</footer>
    </div>
  )
}

export default App
