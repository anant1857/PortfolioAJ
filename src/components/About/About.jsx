"use client";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin, 
  Database, 
  Server, 
  Globe, 
  Zap, 
  GitBranch, 
  Terminal, 
  Layers, 
  Cloud, 
  Calendar,
  TrendingUp,
  Award,
  Coffee,
  Play,
  Folder,
  FileText,
  GitCommit
} from "lucide-react";

const AboutPage = () => {
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [visibleExperience, setVisibleExperience] = useState(0);

  // Skills data with icons and progress bars
  const skills = [
    { name: "JavaScript", level: 92, icon: <Code2 className="w-5 h-5" />, color: "bg-yellow-400" },
    { name: "React.js", level: 90, icon: <Globe className="w-5 h-5" />, color: "bg-cyan-400" },
    { name: "Next.js", level: 85, icon: <Server className="w-5 h-5" />, color: "bg-gray-400" },
    { name: "Node.js", level: 82, icon: <Terminal className="w-5 h-5" />, color: "bg-green-400" },
    { name: "MongoDB", level: 75, icon: <Database className="w-5 h-5" />, color: "bg-green-500" },
    { name: "Git", level: 85, icon: <GitBranch className="w-5 h-5" />, color: "bg-red-400" },
  ];

  // Experience data with coding theme
  const experience = [
    {
    id: 6,
    position: "Intern Web Developer",
    company: "Encryptix",
    duration: "Internship",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Built several small projects using HTML, CSS, and JavaScript to strengthen foundational web development skills.",
    commits: 0,
    linesOfCode: "N/A",
    projects: 3,
    level: "intern",
    folder: "intern-projects",
    mainFile: "index.html"
  },
  {
    id: 5,
    position: "Frontend Developer",
    company: "SevenMentor Services",
    duration: "2024 - Present",
    technologies: ["HTML", "CSS", "JavaScript", "React", "CMS", "LMS", "Billing Systems"],
    description: "Currently working as a Frontend Developer with nearly 1 year of experience. Developed educational websites like Sevenmentor.com and IT Education Center. Created internal projects including CMS, LMS, and Billing systems to streamline operations.",
    commits: 0,
    linesOfCode: "N/A",
    projects: 5,
    level: "mid",
    folder: "sevenmentor-projects",
    mainFile: "main.js"
  },
  ];

  // Typing effect
  useEffect(() => {
    const fullText = "console.log('Hello World! I\\'m Anant Joshi - Full Stack Developer');";
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, []);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    return () => clearInterval(cursorInterval);
  }, []);

  // Experience animation
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleExperience(prev => {
        if (prev < experience.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, []);

  const getLevelIcon = (level) => {
    switch (level) {
      case 'senior': return <Award className="w-5 h-5 text-yellow-400" />;
      case 'mid': return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case 'junior': return <Code2 className="w-5 h-5 text-green-400" />;
      case 'entry': return <Terminal className="w-5 h-5 text-orange-400" />;
      default: return <Code2 className="w-5 h-5 text-gray-400" />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'senior': return 'border-yellow-400/50 bg-yellow-400/5';
      case 'mid': return 'border-blue-400/50 bg-blue-400/5';
      case 'junior': return 'border-green-400/50 bg-green-400/5';
      case 'entry': return 'border-orange-400/50 bg-orange-400/5';
      default: return 'border-gray-400/50 bg-gray-400/5';
    }
  };

  const getFileExtensionColor = (filename) => {
    const ext = filename.split('.').pop();
    switch (ext) {
      case 'tsx': return 'text-blue-400';
      case 'js': return 'text-yellow-400';
      case 'vue': return 'text-green-400';
      case 'html': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

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
                <h1 className="text-2xl font-bold text-[#cccccc]">Anant Joshi</h1>
                <p className="text-[#6a9955]">Full Stack Developer</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-[#858585]">
              <MapPin className="w-4 h-4" />
              <span>Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Code Header with Typing Effect */}
        <div className="bg-[#252526] rounded-lg border border-[#2d2d30] p-6 mb-8">
          <div className="flex items-start">
            <div className="text-[#858585] text-right pr-4 select-none min-w-[3rem] leading-6">
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div className="flex-1">
              <div className="text-[#6a9955] mb-2">// Welcome to my developer profile</div>
              <div className="text-[#cccccc] mb-2">
                <span className="text-[#569cd6]">const</span>{" "}
                <span className="text-[#4fc1ff]">developer</span>{" "}
                <span className="text-[#cccccc]">=</span>{" "}
                <span className="text-[#cccccc]">{`{`}</span>
              </div>
              <div className="text-[#ce9178] pl-4">
                {typingText}
                <span className="text-[#007acc]" style={{opacity: showCursor ? 1 : 0}}>|</span>
              </div>
            </div>
          </div>
        </div>

       {/* Stats Dashboard */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
  <div className="bg-[#252526] border border-[#2d2d30] rounded-lg p-4">
    <div className="flex items-center space-x-2 mb-2">
      <Code2 className="w-5 h-5 text-[#007acc]" />
      <span className="text-[#858585] text-sm">Lines of Code</span>
    </div>
    <div className="text-2xl font-bold text-[#cccccc]">15K+</div>
  </div>
  <div className="bg-[#252526] border border-[#2d2d30] rounded-lg p-4">
    <div className="flex items-center space-x-2 mb-2">
      <GitBranch className="w-5 h-5 text-[#007acc]" />
      <span className="text-[#858585] text-sm">Total Commits</span>
    </div>
    <div className="text-2xl font-bold text-[#cccccc]">800+</div>
  </div>
  <div className="bg-[#252526] border border-[#2d2d30] rounded-lg p-4">
    <div className="flex items-center space-x-2 mb-2">
      <Calendar className="w-5 h-5 text-[#007acc]" />
      <span className="text-[#858585] text-sm">Experience</span>
    </div>
    <div className="text-2xl font-bold text-[#cccccc]">1 Year</div>
  </div>
  <div className="bg-[#252526] border border-[#2d2d30] rounded-lg p-4">
    <div className="flex items-center space-x-2 mb-2">
      <Coffee className="w-5 h-5 text-[#007acc]" />
      <span className="text-[#858585] text-sm">Coffee Cups</span>
    </div>
    <div className="text-2xl font-bold text-[#cccccc]">∞</div>
  </div>
</div>


        {/* About Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          
          {/* Personal Info */}
          <div className="lg:col-span-2 bg-[#252526] rounded-lg border border-[#2d2d30] p-6">
            <h2 className="text-xl font-bold text-[#cccccc] mb-4 flex items-center">
              <Terminal className="w-5 h-5 mr-2 text-[#007acc]" />
              About Me
            </h2>
            <div className="space-y-4 text-[#d4d4d4]">
              <p>
               I’m a passionate Frontend Developer with over 1 year of hands-on experience building dynamic, responsive, and user-friendly web applications. I specialize in React.js, JavaScript, HTML5, and CSS3, creating seamless interfaces that enhance user experience and drive engagement.
              </p>
              <p>
                Throughout my journey, I’ve contributed to educational platforms, internal tools (like CMS, LMS, and billing systems), and client-facing websites, focusing on clean code, performance, and accessibility.
              </p>
              <p>
                I’m always eager to learn new technologies, collaborate with teams, and turn ideas into interactive, modern web experiences. My goal is to create interfaces that not only look great but also deliver value to users and businesses alike.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Web Development", "Cloud Architecture", "Team Leadership", "Open Source"].map((interest, index) => (
                  <span key={index} className="bg-[#2d2d30] border border-[#3e3e42] text-[#d4d4d4] px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-[#252526] rounded-lg border border-[#2d2d30] p-6">
            <h2 className="text-xl font-bold text-[#cccccc] mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-[#007acc]" />
              Quick Stats
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#858585]">Name:</span>
                <span className="text-[#d4d4d4]">Anant Joshi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858585]">Role:</span>
                <span className="text-[#d4d4d4]">Full Stack Dev</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858585]">Location:</span>
                <span className="text-[#d4d4d4]">Maharashtra, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858585]">Status:</span>
                <span className="text-[#4ec9b0]">Available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858585]">Projects:</span>
                <span className="text-[#d4d4d4]">40+ Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#cccccc] mb-6 flex items-center">
            <Code2 className="w-6 h-6 mr-2 text-[#007acc]" />
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#252526] rounded-lg border border-[#2d2d30] p-4 hover:border-[#007acc] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="text-[#007acc]">{skill.icon}</div>
                    <span className="text-[#d4d4d4] font-medium text-sm">{skill.name}</span>
                  </div>
                  <span className="text-[#858585] text-xs">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#2d2d30] rounded-full h-2">
                  <div 
                    className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#cccccc] mb-8 flex items-center">
            <GitBranch className="w-6 h-6 mr-2 text-[#007acc]" />
            Career Timeline
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div 
                key={exp.id}
                className={`transition-all duration-700 ${
                  index < visibleExperience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className={`bg-[#252526] rounded-lg border-2 ${getLevelColor(exp.level)} p-0 relative overflow-hidden group hover:border-[#007acc]/30 transition-all duration-300`}>
                  
                  {/* VS Code Tab Header */}
                  <div className="bg-[#2d2d30] px-4 py-2 border-b border-[#3e3e42] flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Folder className="w-4 h-4 text-[#dcb67a]" />
                        <span className="text-[#cccccc] text-sm font-medium">{exp.folder}</span>
                      </div>
                      <div className="text-[#858585]">/</div>
                      <div className="flex items-center space-x-2">
                        <FileText className={`w-4 h-4 ${getFileExtensionColor(exp.mainFile)}`} />
                        <span className={`text-sm ${getFileExtensionColor(exp.mainFile)}`}>{exp.mainFile}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getLevelIcon(exp.level)}
                      <span className="text-xs text-[#858585] uppercase tracking-wider">{exp.level}</span>
                    </div>
                  </div>
                  
                  {/* Code Editor Content */}
                  <div className="p-6">
                    {/* Line numbers and code */}
                    <div className="flex mb-6">
                      <div className="text-[#858585] text-right pr-4 select-none text-sm leading-6">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                      </div>
                      <div className="flex-1 text-sm leading-6">
                        <div className="text-[#6a9955]">// {exp.position}</div>
                        <div className="text-[#cccccc]">
                          <span className="text-[#569cd6]">const</span>{" "}
                          <span className="text-[#4fc1ff]">experience</span>{" "}
                          <span className="text-[#cccccc]">=</span>{" "}
                          <span className="text-[#cccccc]">{`{`}</span>
                        </div>
                        <div className="text-[#cccccc] pl-4">
                          <span className="text-[#9cdcfe]">company</span>
                          <span className="text-[#cccccc]">: </span>
                          <span className="text-[#ce9178]">"{exp.company}"</span>
                          <span className="text-[#cccccc]">,</span>
                        </div>
                        <div className="text-[#cccccc] pl-4">
                          <span className="text-[#9cdcfe]">duration</span>
                          <span className="text-[#cccccc]">: </span>
                          <span className="text-[#ce9178]">"{exp.duration}"</span>
                        </div>
                        <div className="text-[#cccccc]">{`};`}</div>
                      </div>
                    </div>
                    
                    <p className="text-[#d4d4d4] mb-6 leading-relaxed">{exp.description}</p>
                    
                    {/* Terminal-style metrics */}
                    <div className="bg-[#1e1e1e] rounded border border-[#3e3e42] p-4 mb-6 font-mono">
                      <div className="flex items-center mb-3">
                        <Terminal className="w-4 h-4 text-[#007acc] mr-2" />
                        <span className="text-[#007acc] text-sm">Development Stats</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <GitCommit className="w-4 h-4 text-[#4ec9b0]" />
                          <span className="text-[#858585]">commits:</span>
                          <span className="text-[#4fc1ff]">{exp.commits}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Code2 className="w-4 h-4 text-[#f9e2af]" />
                          <span className="text-[#858585]">lines:</span>
                          <span className="text-[#4fc1ff]">{exp.linesOfCode}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Folder className="w-4 h-4 text-[#dcb67a]" />
                          <span className="text-[#858585]">projects:</span>
                          <span className="text-[#4fc1ff]">{exp.projects}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <span className="text-[#6a9955] text-sm">// Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-[#2d2d30] border border-[#3e3e42] text-[#d4d4d4] px-3 py-1 rounded text-xs hover:border-[#007acc] transition-colors font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative code highlight */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#007acc] to-transparent opacity-50"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#252526] rounded-lg border border-[#2d2d30] p-6">
          <h2 className="text-2xl font-bold text-[#cccccc] mb-6 flex items-center">
            <Mail className="w-6 h-6 mr-2 text-[#007acc]" />
            Let's Connect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="mailto:joshianant1857@gmail.com" 
              className="flex items-center space-x-3 p-4 bg-[#1e1e1e] rounded-lg hover:bg-[#2d2d30] transition-colors border border-[#2d2d30] hover:border-[#007acc] group"
            >
              <Mail className="w-5 h-5 text-[#007acc] group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-[#cccccc] font-medium">Email</div>
                <div className="text-[#858585] text-xs">Get in touch</div>
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/anant-joshi-a847b6201/" 
              className="flex items-center space-x-3 p-4 bg-[#1e1e1e] rounded-lg hover:bg-[#2d2d30] transition-colors border border-[#2d2d30] hover:border-[#007acc] group"
            >
              <Linkedin className="w-5 h-5 text-[#007acc] group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-[#cccccc] font-medium">LinkedIn</div>
                <div className="text-[#858585] text-xs">Professional network</div>
              </div>
            </a>
            <a 
              href="https://github.com/anant1857" 
              className="flex items-center space-x-3 p-4 bg-[#1e1e1e] rounded-lg hover:bg-[#2d2d30] transition-colors border border-[#2d2d30] hover:border-[#007acc] group"
            >
              <Github className="w-5 h-5 text-[#007acc] group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-[#cccccc] font-medium">GitHub</div>
                <div className="text-[#858585] text-xs">Code repository</div>
              </div>
            </a>
            <a 
              href="tel:+918847769979" 
              className="flex items-center space-x-3 p-4 bg-[#1e1e1e] rounded-lg hover:bg-[#2d2d30] transition-colors border border-[#2d2d30] hover:border-[#007acc] group"
            >
              <Phone className="w-5 h-5 text-[#007acc] group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-[#cccccc] font-medium">Phone</div>
                <div className="text-[#858585] text-xs">Direct contact</div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;