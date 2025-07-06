
"use client";
import React, { useState, useEffect } from 'react';
// Import lucide-react icons
import {    Mail, Phone, Linkedin, Github, MapPin, Folder, ChevronDown, User, Code2 } from "lucide-react";
import Image from 'next/image';
import PopUpForm from '../PopUpForm/PopUpForm';

const Home = () => {

  const [displayedText, setDisplayedText] = useState('');
  const [lineNumber, setLineNumber] = useState(1);

   const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const codeLines = [
    "const developer = {",
    "  name: 'Adnan Khan',",
    "  role: 'Full Stack Developer',",
    "  experience: '1.5+ years',",
    "  specialization: [",
    "    'Web Development',",
    "    'Blockchain Development',",
    "    'PlaytoEarn Games'",
    "  ],",
    "  skills: {",
    "    frontend: ['React', 'Next.js', 'TypeScript'],",
    "    backend: ['Node.js', 'Python', 'Solidity'],",
    "    blockchain: ['Ethereum', 'Smart Contracts'],",
    "    leadership: 'Tech Team Management'",
    "  },",
    "  passion: 'Building innovative solutions',",
    "  recruiting: 'Global engineering talent'",
    "};"
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let tempText = '';

    const typeWriter = () => {
      if (currentLine < codeLines.length) {
        if (currentChar < codeLines[currentLine].length) {
          tempText += codeLines[currentLine][currentChar];
          setDisplayedText(tempText);
          currentChar++;
          setTimeout(typeWriter, 30);
        } else {
          tempText += '\n';
          setDisplayedText(tempText);
          currentLine++;
          currentChar = 0;
          setLineNumber(currentLine + 1);
          setTimeout(typeWriter, 100);
        }
      }
    };

    const timer = setTimeout(typeWriter, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className=" bg-[#1e1e1e] pt-20 px-5 font-mono ">
        {/* Main Content Area */}
        <div className="h-full flex">

          {/* Left Panel - Code Editor */}
          <div className="flex-1 flex">
            {/* Line Numbers */}
            <div className="w-12 bg-[#1e1e1e] border-r border-[#2d2d30] flex flex-col items-center py-6 text-[#858585] text-sm">
              {Array.from({ length: Math.max(20, lineNumber) }, (_, i) => (
                <div key={i + 1} className={`h-6 flex items-center ${i + 1 <= lineNumber ? 'text-[#858585]' : 'text-[#3e3e42]'}`}>
                  {i + 1}
                </div>
              ))}
            </div>
            {/* Code Content */}
            <div className="flex-1 bg-[#1e1e1e] p-6 overflow-hidden">
              <div className="max-w-4xl">
                {/* File Tab */}
                <div className="mb-6 flex">
                  <div className="bg-[#252526] border border-[#2d2d30] border-b-0 px-4 py-2 text-[#cccccc] text-sm rounded-t-md">
                    <span className="text-blue-400">developer</span>
                    <span className="text-[#cccccc]">.js</span>
                    <span className="ml-2 text-[#858585]">●</span>
                  </div>
                </div>
                {/* Code Block */}
                <div className="bg-[#1e1e1e] text-sm leading-6">
                  <pre className="text-[#cccccc] whitespace-pre-wrap">
                    <code>
                      {displayedText.split('\n').map((line, index) => (
                        <div key={index} className="flex">
                          <span className="text-[#cccccc]">
                            {line.includes('const') && <span className="text-blue-400"></span>}
                            {line.includes('name:') && (
                              <>
                                <span className="text-[#cccccc]">  </span>
                                <span className="text-[#9cdcfe]">name</span>
                                <span className="text-[#cccccc]">: </span>
                                <span className="text-[#ce9178]">'Anant Joshi'</span>
                              </>
                            )}
                            {line.includes('role:') && (
                              <>
                                <span className="text-[#cccccc]">  </span>
                                <span className="text-[#9cdcfe]">role</span>
                                <span className="text-[#cccccc]">: </span>
                                <span className="text-[#ce9178]">'Full Stack Developer'</span>
                              </>
                            )}
                            {line.includes('experience:') && (
                              <>
                                <span className="text-[#cccccc]">  </span>
                                <span className="text-[#9cdcfe]">experience</span>
                                <span className="text-[#cccccc]">: </span>
                                <span className="text-[#ce9178]">'1.5+ years'</span>
                              </>
                            )}
                            {line.includes('specialization') && (
                              <>
                                <span className="text-[#cccccc]">  </span>
                                <span className="text-[#9cdcfe]">specialization</span>
                                <span className="text-[#cccccc]">: [</span>
                              </>
                            )}
                            {line.includes('Web Development') && (
                              <>
                                <span className="text-[#cccccc]">    </span>
                                <span className="text-[#ce9178]">'Web Development'</span>
                                <span className="text-[#cccccc]">,</span>
                              </>
                            )}
                            {line.includes('Blockchain Development') && (
                              <>
                                <span className="text-[#cccccc]">    </span>
                                <span className="text-[#ce9178]">'Blockchain Development'</span>
                                <span className="text-[#cccccc]">,</span>
                              </>
                            )}
                            {line.includes('PlaytoEarn Games') && (
                              <>
                                <span className="text-[#cccccc]">    </span>
                                <span className="text-[#ce9178]">'PlaytoEarn Games'</span>
                              </>
                            )}
                            {line.includes('skills:') && (
                              <>
                                <span className="text-[#cccccc]">  </span>
                                <span className="text-[#9cdcfe]">skills</span>
                                <span className="text-[#cccccc]">: {`{`}</span>
                              </>
                            )}
                            {line.includes('frontend:') && (
                              <>
                                <span className="text-[#cccccc]">    </span>
                                <span className="text-[#9cdcfe]">frontend</span>
                                <span className="text-[#cccccc]">: [</span>
                                <span className="text-[#ce9178]">'React'</span>
                                <span className="text-[#cccccc]">, </span>
                                <span className="text-[#ce9178]">'Next.js'</span>
                                <span className="text-[#cccccc]">, </span>
                                <span className="text-[#ce9178]">'TypeScript'</span>
                                <span className="text-[#cccccc]">],</span>
                              </>
                            )}
                            {line.includes('backend:') && (
                              <>
                                <span className="text-[#cccccc]">    </span>
                                <span className="text-[#9cdcfe]">backend</span>
                                <span className="text-[#cccccc]">: [</span>
                                <span className="text-[#ce9178]">'Node.js'</span>
                                <span className="text-[#cccccc]">, </span>
                                <span className="text-[#ce9178]">'Python'</span>
                                <span className="text-[#cccccc]">, </span>
                                <span className="text-[#ce9178]">'Solidity'</span>
                                <span className="text-[#cccccc]">],</span>
                              </>
                            )}
                            {line.includes('blockchain:') && (
                              <>
                                <span className="text-[#cccccc]">    </span>
                                <span className="text-[#9cdcfe]">blockchain</span>
                                <span className="text-[#cccccc]">: [</span>
                                <span className="text-[#ce9178]">'Ethereum'</span>
                                <span className="text-[#cccccc]">, </span>
                                <span className="text-[#ce9178]">'Smart Contracts'</span>
                                <span className="text-[#cccccc]">],</span>
                              </>
                            )}
                            {line.includes('leadership:') && (
                              <>
                                <span className="text-[#cccccc]">    </span>
                                <span className="text-[#9cdcfe]">leadership</span>
                                <span className="text-[#cccccc]">: </span>
                                <span className="text-[#ce9178]">'Tech Team Management'</span>
                              </>
                            )}
                            {line.includes('passion:') && (
                              <>
                                <span className="text-[#cccccc]">  </span>
                                <span className="text-[#9cdcfe]">passion</span>
                                <span className="text-[#cccccc]">: </span>
                                <span className="text-[#ce9178]">'Building innovative solutions'</span>
                                <span className="text-[#cccccc]">,</span>
                              </>
                            )}
                            {line.includes('recruiting:') && (
                              <>
                                <span className="text-[#cccccc]">  </span>
                                <span className="text-[#9cdcfe]">recruiting</span>
                                <span className="text-[#cccccc]">: </span>
                                <span className="text-[#ce9178]">'Global engineering talent'</span>
                              </>
                            )}
                           
                            {line === "};" && <span className="text-[#cccccc]">{`}`};</span>}
                            {line === "const developer = {" && (
                              <>
                                <span className="text-blue-400">const</span>
                                <span className="text-[#cccccc]"> </span>
                                <span className="text-[#4fc1ff]">developer</span>
                                <span className="text-[#cccccc]"> = {`{`}</span>
                              </>
                            )}
                          </span>
                        </div>
                      ))}
                    </code>
                  </pre>
                  {/* Typing Cursor */}
                  <span className="inline-block w-2 h-5 bg-[#cccccc] animate-pulse ml-1"></span>
                </div>
                {/* Action Buttons */}
                <div className="mt-8 flex gap-4">
                  <button   onClick={() => setIsPopUpOpen(true)} className="bg-[#0e639c] hover:bg-[#1177bb] text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 flex items-center gap-2">
                    <span>▶</span> Contact Me
                  </button>
                  <button className="bg-[#2d2d30] hover:bg-[#3e3e42] text-[#cccccc] px-6 py-2 rounded text-sm font-medium transition-colors duration-200 border border-[#454545]">
                    View Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Right Panel - Image Space */}
           <div className="w-96 bg-[#252526] border-l border-[#2d2d30] flex flex-col shadow-2xl">
      {/* Explorer Tab */}
      <div className="h-10 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center px-4 py-5 text-[#cccccc] text-sm font-medium">
        <Folder className="w-4 h-4 mr-2 text-[#dcb67a]" />
        <span className="text-[#cccccc] tracking-wide">EXPLORER</span>
        <ChevronDown className="w-4 h-4 ml-auto text-[#858585]" />
      </div>

      {/* File Tree Header */}
      <div className="bg-[#1e1e1e] border-b border-[#2d2d30] px-4 py-2">
        <div className="flex items-center text-[#cccccc] text-xs">
          <ChevronDown className="w-3 h-3 mr-1 text-[#858585]" />
          <Code2 className="w-3 h-3 mr-2 text-[#4fc1ff]" />
          <span className="font-mono">_amolsonawane/</span>
        </div>
      </div>

      {/* Image/Content Area */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-[#252526] to-[#1e1e1e]">
        {/* Profile Section */}
        <div className="w-full max-w-xs mb-6 relative">
          <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-[#4fc1ff]/20 to-[#7c3aed]/20 rounded-lg blur-sm"></div>
          <div className="relative w-full h-80 bg-[#1e1e1e] border border-[#2d2d30] rounded-lg flex items-center justify-center overflow-hidden">
            <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <img
              src="/Images/ProfileImage.webp"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="w-full grid gap-3 text-sm mb-6">
          <div className="bg-gradient-to-r from-[#1e1e1e] to-[#252526] border border-[#2d2d30] rounded-lg p-4 hover:border-[#4fc1ff]/50 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#4fc1ff] rounded-full"></div>
              <div className="text-[#4fc1ff] text-xs uppercase tracking-wider font-mono">Experience</div>
            </div>
            <div className="text-[#cccccc] font-medium text-lg group-hover:text-[#4fc1ff] transition-colors">1.5+ Years</div>
          </div>

          <div className="bg-gradient-to-r from-[#1e1e1e] to-[#252526] border border-[#2d2d30] rounded-lg p-4 hover:border-green-400/50 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="text-green-400 text-xs uppercase tracking-wider font-mono">Projects</div>
            </div>
            <div className="text-[#cccccc] font-medium text-lg group-hover:text-green-400 transition-colors">25+ Completed</div>
          </div>

          <div className="bg-gradient-to-r from-[#1e1e1e] to-[#252526] border border-[#2d2d30] rounded-lg p-4 hover:border-orange-400/50 transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="text-orange-400 text-xs uppercase tracking-wider font-mono">Specialization</div>
            </div>
            <div className="text-[#cccccc] font-medium text-lg group-hover:text-orange-400 transition-colors">MERN Stack</div>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="w-full bg-gradient-to-br from-[#18181b] via-[#1e1e1e] to-[#18181b] border border-[#383838] rounded-lg shadow-xl p-5 relative overflow-hidden">
          {/* Subtle animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4fc1ff]/5 to-transparent animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="text-[#7dd3fc] text-xs uppercase tracking-wider font-bold mb-4 flex items-center gap-2 font-mono">
              <div className="w-1 h-4 bg-[#7dd3fc] rounded-full"></div>
              <User className="w-4 h-4" />
              Contact Info
            </div>
            
            <div className="flex flex-col gap-3 text-[#cccccc] text-sm">
              <div className="flex items-center gap-3 p-2 rounded hover:bg-[#2d2d30]/50 transition-colors group">
                <Mail className="w-4 h-4 text-[#60a5fa] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs group-hover:text-[#60a5fa] transition-colors">amolsonawane1026@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3 p-2 rounded hover:bg-[#2d2d30]/50 transition-colors group">
                <Phone className="w-4 h-4 text-[#34d399] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs group-hover:text-[#34d399] transition-colors">+91 7558379918</span>
              </div>
              
              <div className="flex items-center gap-3 p-2 rounded hover:bg-[#2d2d30]/50 transition-colors group">
                <Linkedin className="w-4 h-4 text-[#2563eb] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs group-hover:text-[#2563eb] transition-colors">/in/amolsonawane</span>
              </div>
              
              <div className="flex items-center gap-3 p-2 rounded hover:bg-[#2d2d30]/50 transition-colors group">
                <Github className="w-4 h-4 text-[#facc15] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs group-hover:text-[#facc15] transition-colors">@amolsonawane</span>
              </div>
              
              <div className="flex items-center gap-3 p-2 rounded hover:bg-[#2d2d30]/50 transition-colors group">
                <MapPin className="w-4 h-4 text-[#f472b6] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs group-hover:text-[#f472b6] transition-colors">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-8 bg-gradient-to-r from-[#007acc] to-[#0080ff] flex items-center justify-between px-4 text-white text-xs font-mono border-t border-[#0080ff]/30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Connected</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-75">UTF-8</span>
          <span className="opacity-75">LF</span>
          <span className="text-green-400">●</span>
        </div>
      </div>
    </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="h-6 bg-[#007acc] text-white text-xs flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <span>● main</span>
            <span>No problems</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Ln {lineNumber}, Col 1</span>
            <span>Spaces: 2</span>
            <span>JavaScript</span>
          </div>
        </div>
        {/* PopUpForm */}
      <PopUpForm isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} />
      </div>
    </>
  );
}

export default Home
