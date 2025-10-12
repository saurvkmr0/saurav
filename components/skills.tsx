"use client"

import { motion } from "framer-motion"
import { Database, Server, Code, Cloud, GitBranch, Zap, Layers } from "lucide-react"

export function Skills() {
  const skills = [
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "C/C++", icon: Code, category: "Programming" },
    { name: "DSA", icon: Layers, category: "Algorithms" },
    { name: "Redis", icon: Zap, category: "Caching" },
    { name: "GitHub", icon: GitBranch, category: "Version Control" },
    { name: "Google Cloud", icon: Cloud, category: "Cloud Services" },
  ]

  return (
    <section className="py-20 bg-slate-50" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Skills & Tools</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
              }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
            >
              <skill.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <h3 className="font-semibold text-slate-800 mb-2">{skill.name}</h3>
              <p className="text-sm text-slate-500">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
