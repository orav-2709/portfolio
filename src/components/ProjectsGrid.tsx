import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Technology {
  name: string;
  color?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectsGridProps {
  projects?: Project[];
  title?: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "AI-Based Crop Disease Detection",
    description:
      "Deep learning model to identify plant diseases from leaf images, helping farmers take timely action to prevent crop loss.",
    image:
      "public/crop.png",
    technologies: [
      { name: "Python", color: "bg-blue-500" },
      { name: "TensorFlow", color: "bg-orange-500" },
      { name: "OpenCV", color: "bg-green-500" },
      { name: "Streamlit", color: "bg-gray-500" },
    ],
    githubUrl: "https://github.com/orav-2709/cropdisease",
  },
  {
    id: "2",
    title: "IoT-Based Lab Automation",
    description:
      "Smart laboratory system using IoT devices to automate equipment control, data collection, and environmental monitoring.",
    image:
      "https://assets.skyfilabs.com/images/displaypictures/home-automation-system-working.png",
    technologies: [
      { name: "Arduino", color: "bg-teal-500" },
      { name: "Raspberry Pi", color: "bg-red-500" },
      { name: "MQTT", color: "bg-purple-500" },
      { name: "Node.js", color: "bg-green-600" },
    ],
    githubUrl: "https://github.com/example/lab-automation",
  },
  {
    id: "3",
    title: "QR Code Generator",
    description:
      "Web application that generates custom QR codes with various styling options and tracking capabilities.",
    image:
      "public/qr.png",
    technologies: [
      { name: "Python", color: "bg-yellow-500" },
      { name: "Tkinder", color: "bg-blue-400" },
      { name: "QR code", color: "bg-green-600" },
      { name: "Google colab", color: "bg-green-500" },
    ],
    githubUrl: "https://github.com/orav-2709/QR",
    demoUrl: "https://github.com/orav-2709/QR",
  },
  {
    id: "4",
    title: "Hotel Management System",
    description:
      "Comprehensive solution for hotel operations including booking, room management, billing, and customer service.",
    image:
      "public/hotel.png",
    technologies: [
      { name: "HTML", color: "bg-red-500" },
      { name: "JS ", color: "bg-green-500" },
      { name: "MySQL", color: "bg-blue-600" },
      { name: "CSS", color: "bg-green-400" },
    ],
    githubUrl: "https://github.com/orav-2709/foodwebsite",
    demoUrl: "https://orav-2709.github.io/foodwebsite/"
  },
  {
    id: "5",
    title: "Air Quality Monitoring",
    description:
      "IoT system that collects and analyzes air quality data, providing real-time alerts and historical trends.",
    image:
      "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?w=800&q=80",
    technologies: [
      { name: "Python", color: "bg-blue-500" },
      { name: "ESP32", color: "bg-purple-500" },
      { name: "InfluxDB", color: "bg-blue-400" },
      { name: "Grafana", color: "bg-orange-500" },
    ],
    githubUrl: "https://github.com/example/air-quality-monitor",
  },
  {
    id: "6",
    title: "Portfolio side",
    description:
      "I'm A developer ",
    image:
      "public/port.png",
    technologies: [
      { name: "React", color: "bg-blue-500" },
      { name: "node js", color: "bg-purple-500" },
      { name: "HTML", color: "bg-blue-400" },
      { name: "CSS", color: "bg-orange-500" },
    ],
    githubUrl: "https://github.com/orav-2709?tab=repositories",
  },
];

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects = defaultProjects,
  title = "Projects",
}) => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="h-full overflow-hidden glass rounded-2xl ios-shadow hover:ios-shadow-lg transition-all duration-500 border-0">
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating action buttons */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full glass"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-blue-500 to-teal-500 border-0"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </motion.div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-4">
                  <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="glass rounded-full px-3 py-1 text-xs font-medium border-0 hover:scale-105 transition-transform duration-200"
                        >
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex gap-2 w-full">
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 rounded-xl glass border-slate-200"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        className="flex-1 rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 border-0"
                        asChild
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
