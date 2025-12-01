"use client"
import { useState } from "react"
import {
  Github,
  Globe,
  Search,
  ChevronRight,
  X,
  Folder,
} from "lucide-react"

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard for e-commerce management with real-time analytics",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "Live",
      github: "https://github.com/username/ecommerce-dashboard",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      color: "#4fc1ff",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with drag-and-drop functionality",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "Live",
      github: "https://github.com/username/task-manager",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      color: "#4ec9b0",
    },
    {
      id: 3,
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication and rate limiting",
      tech: ["Node.js", "Express", "Redis", "JWT"],
      status: "Development",
      github: "https://github.com/username/api-gateway",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      color: "#f9e2af",
    },
    {
      id: 4,
      title: "Weather Mobile App",
      description: "Cross-platform weather app with location-based forecasts",
      tech: ["React Native", "Expo", "Weather API"],
      status: "Live",
      github: "https://github.com/username/weather-app",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      color: "#c586c0",
    },
    {
      id: 5,
      title: "Code Snippet Manager",
      description: "VS Code extension for managing and sharing code snippets",
      tech: ["TypeScript", "VS Code API", "SQLite"],
      status: "Live",
      github: "https://github.com/username/snippet-manager",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      color: "#007acc",
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Analytics dashboard for social media performance tracking",
      tech: ["Next.js", "PostgreSQL", "Chart.js", "Prisma"],
      status: "Live",
      github: "https://github.com/username/social-analytics",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      color: "#f48771",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesSearch
  })

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono pt-20 pb-12">
      {/* Simple Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-8 bg-[#007acc] rounded-full"></div>
          <h1 className="text-3xl font-bold text-[#cccccc]">Projects</h1>
        </div>
        <p className="text-[#858585] ml-7">Building solutions that matter</p>
      </div>

      {/* Search Bar Only */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between">
          <p className="text-[#858585] text-sm">
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
          
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#858585]" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#252526] border border-[#2d2d30] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#d4d4d4] placeholder-[#858585] focus:border-[#007acc] focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid - Clean & Minimal */}
      <div className="max-w-6xl mx-auto px-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <Folder className="w-16 h-16 text-[#858585] mx-auto mb-4 opacity-50" />
            <p className="text-[#858585]">No projects found</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-[#252526] border border-[#2d2d30] rounded-lg overflow-hidden hover:border-[#007acc]/50 transition-all duration-300 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-[#1e1e1e] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  />
                  
                  {/* Overlay with Status */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <div className="px-3 py-1 rounded-full text-xs font-medium bg-[#1e1e1e]/80 backdrop-blur-sm border border-[#2d2d30] text-[#4ec9b0]">
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-[#cccccc] font-semibold mb-2 group-hover:text-[#4fc1ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#858585] text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack - Simplified */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs text-[#858585] bg-[#1e1e1e] px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-[#858585] bg-[#1e1e1e] px-2 py-1 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Hint */}
                  <div className="flex items-center gap-2 text-[#007acc] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal - Minimal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1e1e]/95 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-[#252526] border border-[#2d2d30] rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#1e1e1e] px-6 py-4 border-b border-[#2d2d30] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-[#007acc] rounded-full"></div>
                <h2 className="text-lg font-semibold text-[#cccccc]">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#858585] hover:text-[#cccccc] transition-colors p-1 hover:bg-[#2d2d30] rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Image */}
              <div className="mb-6">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg border border-[#2d2d30]"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-[#cccccc] font-medium mb-2 text-sm uppercase tracking-wide text-[#858585]">
                  About
                </h3>
                <p className="text-[#cccccc] leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wide text-[#858585] mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[#1e1e1e] text-[#cccccc] text-sm rounded border border-[#2d2d30]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#1e1e1e] hover:bg-[#2d2d30] text-[#cccccc] rounded-lg border border-[#2d2d30] transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">View Code</span>
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#007acc] hover:bg-[#005a9e] text-white rounded-lg transition-all"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
