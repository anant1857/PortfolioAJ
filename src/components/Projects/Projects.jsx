"use client"
import { useState } from "react"
import {
  Code2,
  Terminal,
  FileText,
  Folder,
  FolderOpen,
  GitBranch,
  Star,
  Eye,
  ExternalLink,
  Github,
  Globe,
  Calendar,
  Search,
  ChevronDown,
  ChevronRight,
  Clock,
  Award,
  Settings,
  Database,
  Smartphone,
  Monitor,
  Layers,
} from "lucide-react"

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedFolders, setExpandedFolders] = useState({
    frontend: true,
    backend: true,
    fullstack: true,
    mobile: false,
    tools: false,
  })

  const categories = [
    { id: "all", name: "All Projects", icon: <Folder className="w-4 h-4" />, count: 12 },
    { id: "frontend", name: "Frontend", icon: <Monitor className="w-4 h-4" />, count: 5 },
    { id: "backend", name: "Backend", icon: <Database className="w-4 h-4" />, count: 3 },
    { id: "fullstack", name: "Full Stack", icon: <Layers className="w-4 h-4" />, count: 3 },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="w-4 h-4" />, count: 1 },
    { id: "tools", name: "Tools & Utils", icon: <Settings className="w-4 h-4" />, count: 2 },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "fullstack",
      description: "Modern admin dashboard for e-commerce management with real-time analytics",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      status: "completed",
      stars: 124,
      views: 2340,
      github: "https://github.com/username/ecommerce-dashboard",
      live: "https://ecommerce-dashboard.vercel.app",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-15",
      featured: true,
      color: "#4fc1ff",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "frontend",
      description: "Collaborative task management with drag-and-drop functionality",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "completed",
      stars: 89,
      views: 1560,
      github: "https://github.com/username/task-manager",
      live: "https://task-manager-demo.vercel.app",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-02-20",
      featured: false,
      color: "#4ec9b0",
    },
    {
      id: 3,
      title: "API Gateway Service",
      category: "backend",
      description: "Microservices API gateway with authentication and rate limiting",
      tech: ["Node.js", "Express", "Redis", "JWT"],
      status: "in-progress",
      stars: 67,
      views: 890,
      github: "https://github.com/username/api-gateway",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-03-10",
      featured: false,
      color: "#f9e2af",
    },
    {
      id: 4,
      title: "Weather Mobile App",
      category: "mobile",
      description: "Cross-platform weather app with location-based forecasts",
      tech: ["React Native", "Expo", "Weather API"],
      status: "completed",
      stars: 45,
      views: 670,
      github: "https://github.com/username/weather-app",
      live: null,
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-01-30",
      featured: false,
      color: "#c586c0",
    },
    {
      id: 5,
      title: "Code Snippet Manager",
      category: "tools",
      description: "VS Code extension for managing and sharing code snippets",
      tech: ["TypeScript", "VS Code API", "SQLite"],
      status: "completed",
      stars: 156,
      views: 3200,
      github: "https://github.com/username/snippet-manager",
      live: "https://marketplace.visualstudio.com/items?itemName=username.snippet-manager",
      image: "/placeholder.svg?height=200&width=300",
      date: "2023-12-15",
      featured: true,
      color: "#007acc",
    },
    {
      id: 6,
      title: "Social Media Analytics",
      category: "fullstack",
      description: "Analytics dashboard for social media performance tracking",
      tech: ["Next.js", "PostgreSQL", "Chart.js", "Prisma"],
      status: "completed",
      stars: 78,
      views: 1240,
      github: "https://github.com/username/social-analytics",
      live: "https://social-analytics-demo.vercel.app",
      image: "/placeholder.svg?height=200&width=300",
      date: "2024-02-05",
      featured: false,
      color: "#f48771",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleFolder = (folderId) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [folderId]: !prev[folderId],
    }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-[#4ec9b0]"
      case "in-progress":
        return "text-[#f9e2af]"
      case "planning":
        return "text-[#858585]"
      default:
        return "text-[#d4d4d4]"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <Award className="w-4 h-4" />
      case "in-progress":
        return <Clock className="w-4 h-4" />
      case "planning":
        return <Settings className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono mt-14">
      {/* Header */}
      <div className="border-b border-[#2d2d30] bg-[#252526]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#007acc] to-[#0e639c] rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#cccccc]">My Projects</h1>
                <p className="text-[#6a9955]">// Building the future, one commit at a time</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-[#858585]">
                <Terminal className="w-4 h-4" />
                <span>projects.tsx</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#1e1e1e] px-3 py-1 rounded border border-[#2d2d30]">
                <GitBranch className="w-4 h-4 text-[#4ec9b0]" />
                <span className="text-[#4ec9b0] text-sm">main</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* VS Code Tab Navigation */}
        <div className="mb-8">
          <div className="bg-[#2d2d30] rounded-t-lg border-b border-[#3e3e42] flex items-center">
            <div className="flex items-center space-x-1 px-2">
              <div className="flex items-center space-x-2 bg-[#252526] px-4 py-2 text-sm border-r border-[#3e3e42]">
                <Folder className="w-4 h-4 text-[#dcb67a]" />
                <span className="text-[#cccccc]">portfolio</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#1e1e1e] px-4 py-2 text-sm border-r border-[#3e3e42]">
                <FileText className="w-4 h-4 text-[#4fc1ff]" />
                <span className="text-[#4fc1ff]">projects.tsx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - File Explorer */}
          <div className="lg:col-span-1">
            <div className="bg-[#252526] rounded-lg border border-[#2d2d30] overflow-hidden">
              {/* Explorer Header */}
              <div className="bg-[#2d2d30] px-4 py-3 border-b border-[#3e3e42] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Folder className="w-4 h-4 text-[#dcb67a]" />
                  <span className="text-[#cccccc] text-sm font-medium">EXPLORER</span>
                </div>
                <button className="text-[#858585] hover:text-[#cccccc] transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              {/* Search */}
              <div className="p-4 border-b border-[#2d2d30]">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#858585]" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1e1e1e] border border-[#2d2d30] rounded px-9 py-2 text-sm text-[#d4d4d4] placeholder-[#858585] focus:border-[#007acc] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* File Tree */}
              <div className="p-2">
                <div className="space-y-1">
                  {categories.map((category) => (
                    <div key={category.id}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category.id)
                          if (category.id !== "all") {
                            toggleFolder(category.id)
                          }
                        }}
                        className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-sm hover:bg-[#2d2d30] transition-colors ${
                          selectedCategory === category.id ? "bg-[#2d2d30] text-[#cccccc]" : "text-[#d4d4d4]"
                        }`}
                      >
                        {category.id !== "all" &&
                          (expandedFolders[category.id] ? (
                            <ChevronDown className="w-3 h-3" />
                          ) : (
                            <ChevronRight className="w-3 h-3" />
                          ))}
                        {expandedFolders[category.id] || category.id === "all" ? (
                          <FolderOpen className="w-4 h-4 text-[#dcb67a]" />
                        ) : (
                          <Folder className="w-4 h-4 text-[#dcb67a]" />
                        )}
                        <span className="flex-1 text-left">{category.name}</span>
                        <span className="text-[#858585] text-xs">{category.count}</span>
                      </button>

                      {/* Project Files */}
                      {(expandedFolders[category.id] || category.id === "all") && category.id !== "all" && (
                        <div className="ml-6 space-y-1">
                          {projects
                            .filter((project) => project.category === category.id)
                            .map((project) => (
                              <button
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="w-full flex items-center space-x-2 px-2 py-1 rounded text-sm hover:bg-[#2d2d30] transition-colors text-[#d4d4d4]"
                              >
                                <FileText className="w-3 h-3 text-[#4fc1ff]" />
                                <span className="flex-1 text-left truncate">{project.title}</span>
                              </button>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="border-t border-[#2d2d30] p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#858585]">Total Projects:</span>
                    <span className="text-[#4ec9b0]">{projects.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#858585]">Completed:</span>
                    <span className="text-[#4ec9b0]">{projects.filter((p) => p.status === "completed").length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#858585]">In Progress:</span>
                    <span className="text-[#f9e2af]">{projects.filter((p) => p.status === "in-progress").length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#858585]">Total Stars:</span>
                    <span className="text-[#f9e2af]">{projects.reduce((sum, p) => sum + p.stars, 0)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Projects Grid */}
          <div className="lg:col-span-3">
            <div className="bg-[#252526] rounded-lg border border-[#2d2d30] overflow-hidden">
              {/* Editor Header */}
              <div className="bg-[#2d2d30] px-4 py-3 border-b border-[#3e3e42] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-[#007acc]" />
                    <span className="text-[#cccccc] text-sm">Project Portfolio</span>
                  </div>
                  <div className="text-[#858585] text-xs">
                    {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#858585]">
                  <span>TypeScript React</span>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="p-6">
                {filteredProjects.length === 0 ? (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-[#858585] mx-auto mb-4" />
                    <p className="text-[#858585] text-lg">No projects found</p>
                    <p className="text-[#858585] text-sm">Try adjusting your search or filter criteria</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        className="bg-[#1e1e1e] border border-[#2d2d30] rounded-lg overflow-hidden hover:border-[#007acc]/50 transition-all duration-300 group"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 bg-[#2d2d30] overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/80 to-transparent" />

                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <div
                              className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)} bg-[#1e1e1e]/80 backdrop-blur-sm`}
                            >
                              {getStatusIcon(project.status)}
                              <span className="capitalize">{project.status.replace("-", " ")}</span>
                            </div>
                          </div>

                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-3 right-3">
                              <div className="flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium text-[#f9e2af] bg-[#1e1e1e]/80 backdrop-blur-sm">
                                <Star className="w-3 h-3 fill-current" />
                                <span>Featured</span>
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="absolute bottom-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#1e1e1e]/80 backdrop-blur-sm rounded hover:bg-[#2d2d30] transition-colors"
                              >
                                <Github className="w-4 h-4 text-[#cccccc]" />
                              </a>
                            )}
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#1e1e1e]/80 backdrop-blur-sm rounded hover:bg-[#2d2d30] transition-colors"
                              >
                                <ExternalLink className="w-4 h-4 text-[#cccccc]" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-5">
                          {/* Title and Description */}
                          <div className="mb-4">
                            <h3 className="text-lg font-bold text-[#cccccc] mb-2 group-hover:text-[#4fc1ff] transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-[#858585] text-sm leading-relaxed">{project.description}</p>
                          </div>

                          {/* Tech Stack */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-[#2d2d30] text-[#d4d4d4] text-xs rounded border border-[#3e3e42]"
                                  style={{ borderColor: project.color + "40" }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Stats */}
                          <div className="flex items-center justify-between text-sm text-[#858585]">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4" />
                                <span>{project.stars}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{project.views}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(project.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-[#858585] text-sm">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <GitBranch className="w-4 h-4" />
            <span>// Crafted with passion and precision</span>
          </div>
          <div>Each project tells a story of innovation and problem-solving</div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1e1e]/80 backdrop-blur-sm p-4">
          <div className="bg-[#252526] border border-[#2d2d30] rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#2d2d30] px-6 py-4 border-b border-[#3e3e42] flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-[#4fc1ff]" />
                <h2 className="text-lg font-bold text-[#cccccc]">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#858585] hover:text-[#cccccc] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded border border-[#2d2d30]"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#cccccc] font-medium mb-2">Description</h3>
                    <p className="text-[#858585] text-sm">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h3 className="text-[#cccccc] font-medium mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#1e1e1e] text-[#d4d4d4] text-sm rounded border border-[#2d2d30]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-[#1e1e1e] hover:bg-[#2d2d30] text-[#cccccc] rounded border border-[#2d2d30] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-[#007acc] hover:bg-[#005a9e] text-white rounded transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
