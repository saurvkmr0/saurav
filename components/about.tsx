"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Smartphone } from "lucide-react"

export function About() {
  const highlights = [
    { icon: Code, text: "Full-Stack Development" },
    { icon: Database, text: "Database Design" },
    { icon: Server, text: "API Integration" },
    { icon: Smartphone, text: "Responsive Design" },
  ]

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I'm a passionate Full-Stack MERN Developer with expertise in building scalable web applications. My
              technical foundation includes proficiency in <strong>MongoDB, Express.js, React, and Node.js</strong>,
              complemented by strong skills in <strong>C, C++, and Data Structures & Algorithms</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I have hands-on experience with modern tools including <strong>Redis</strong> for caching,
              <strong>GitHub</strong> for version control, and <strong>Google Cloud Storage</strong> for scalable file
              management. My webhook integration experience spans <strong>Instagram & WhatsApp Meta APIs</strong> and
              <strong>Shopify webhook events</strong>, gained during my time at Helio-AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3 hover:rotate-12 transition-transform duration-300" />
                <p className="text-slate-700 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
