import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */} {/* todo: be added later */}
      <Skills />
      <Contact />
    </main>
  )
}
