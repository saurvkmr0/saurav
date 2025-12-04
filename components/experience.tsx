"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Webhook, MessageSquare, ShoppingCart } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Helio-AI",
      role: "Backend Developer",
      period: "Nov 2024 – Present",
      icon: Building,
      achievements: [
        "Built and maintained Meta integrations (Instagram, WhatsApp, Messenger) with Node.js + TypeScript, powering unified messaging for 10+ partner brands and thousands of daily conversations.",
        "Implemented conversational commerce workflows (product cards, dynamic replies, quick actions, guided flows) that boosted in-chat product engagement by 35%+.",
        "Engineered Instagram Comment-to-DM automation using Meta webhooks and TypeScript services, delivering a 2–3x lift in DM-based lead capture.",
        "Developed high-throughput media messaging APIs for multi-channel agent replies, cutting support response time by ~30%.",
        "Designed Helpdesk services for ticketing, customer activity retrieval, and conversation history endpoints to streamline support operations.",
        "Optimized ticket reply tracking with partial database indexes, significantly accelerating resolution workflows.",
        "Built ticket distribution and assignment logic to balance agent workloads and reduce resolution time by 20–30%.",
        "Improved backend performance with Redis caching, queues, async workers, and event-driven Node.js pipelines for low-latency processing.",
        "Developed a scalable email campaign platform integrated with Mailgun and Google Cloud Tasks (rate-limited, template-driven, scheduled dispatch).",
      ],
      technologies: [
        "Node.js",
        "TypeScript",
        "Meta APIs",
        "Redis",
        "MongoDB",
        "Message Queues",
        "Google Cloud Tasks",
        "Mailgun",
      ],
    },
    {
      company: "Webengo",
      role: "Frontend Developer",
      period: "Dec 2023 – Oct 2024",
      icon: Building,
      achievements: [
        "Developed and maintained responsive marketing websites with HTML, CSS, JavaScript, and React.",
        "Integrated REST APIs by partnering closely with backend teams, ensuring data-rich experiences.",
        "Created reusable UI components and design systems to keep UX consistent and reduce build time.",
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "REST APIs", "Design Systems"],
    },
  ]

  const integrations = [
    { name: "Instagram API", icon: MessageSquare, description: "Real-time messaging webhooks" },
    { name: "WhatsApp API", icon: MessageSquare, description: "Business messaging integration" },
    { name: "Shopify Webhooks", icon: ShoppingCart, description: "E-commerce event handling" },
    { name: "Meta APIs", icon: Webhook, description: "Social media platform integration" },
  ]

  return (
    <section className="py-20 bg-white px-2 md:px-8 lg:px-16" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 px-2md:px-8 lg:px-16 py-6 md:py-12">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <exp.icon className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <CardDescription className="text-lg font-medium text-slate-600">{exp.role}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.period}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="hover:bg-blue-50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Integrations Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
              >
                <integration.icon className="h-10 w-10 text-blue-600 mx-auto mb-3 hover:rotate-12 transition-transform duration-300" />
                <h4 className="font-semibold text-slate-800 mb-2">{integration.name}</h4>
                <p className="text-sm text-slate-600">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
