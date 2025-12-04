"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack MERN application with Shopify integration, real-time inventory management, and automated webhook processing.",
      image: "/modern-ecommerce-dashboard.png",
      technologies: ["React", "Node.js", "MongoDB", "Shopify API", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard integrating Instagram and WhatsApp APIs with real-time messaging capabilities and webhook automation.",
      image: "/social-media-analytics-dashboard.png",
      technologies: ["Next.js", "Express.js", "Meta APIs", "Chart.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Cloud Storage Manager",
      description:
        "File management system with Google Cloud Storage integration, featuring drag-and-drop uploads and advanced search.",
      image: "/cloud-storage-file-manager.png",
      technologies: ["React", "Node.js", "Google Cloud", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  return (
    <section className="py-20 bg-slate-50 px-2 md:px-8 lg:px-16" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                rotateX: 2,
              }}
              className={`${project.featured ? "lg:col-span-1" : ""}`}
            >
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      {project.featured && <Badge className="bg-blue-600 hover:bg-blue-700 mb-2">Featured</Badge>}
                    </div>
                    <Code className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="hover:bg-blue-50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
