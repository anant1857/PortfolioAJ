"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { name: "_home", href: "/", color: "text-orange-400" },
  { name: "_about", href: "/about", color: "text-green-400" },
  { name: "_contact", href: "/contact", color: "text-blue-400" },
  { name: "_projects", href: "/projects", color: "text-yellow-400" },
  { name: "_github", href: "/github", color: "text-red-400" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("_home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Retro typing effect for name
  useEffect(() => {
    const fullText = "Anant Joshi";
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => clearInterval(cursorInterval);
  }, []);

  // Current time display
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px) rotateX(-10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .terminal-cursor {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      
      <nav className="fixed top-0 left-0 right-0 bg-[#1e1e1e] border-b border-[#333333] w-full h-14 flex items-center shadow-lg font-mono text-sm z-50">
        
        {/* Left: Logo/Name with typing effect */}
        <div className="px-3 sm:px-6  py-0 border-r border-[#333333] h-full flex items-center bg-[#252526] min-w-[120px] sm:min-w-[180px] relative">
          <span className="text-[#cccccc] text-sm sm:text-base font-bold tracking-wider select-none">
            <span className="inline-block">{typingText}</span>
            <span className="terminal-cursor text-[#007acc] inline-block w-2 text-center" style={{opacity: showCursor ? 1 : 0}}>|</span>
          </span>
        </div>

        {/* Center: Navigation Tabs - Hidden on mobile */}
        <div className="hidden md:flex h-full flex-1">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`
                px-2 lg:px-4 py-0 h-full flex items-center text-sm border-r border-[#333333] min-w-[80px] lg:min-w-[120px] justify-center
                transition-all duration-200 ease-in-out relative group
                ${activeTab === item.name
                  ? `${item.color} bg-[#1e1e1e] font-semibold`
                  : "text-[#cccccc] hover:text-[#ffffff] hover:bg-[#2d2d30]"
                }
              `}
            >
              <span className="relative font-medium tracking-wide">
                {item.name}
              </span>
              {activeTab === item.name && (
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${item.color.replace('text-', 'bg-')}`}></div>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <div className="md:hidden flex-1 flex justify-end pr-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#cccccc] hover:text-[#ffffff] transition-all duration-200 ease-in-out p-2 hover:bg-[#2d2d30] rounded"
          >
            <svg className={`w-5 h-5 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Right: System Info and Controls - Hidden on mobile */}
        <div className="hidden md:flex h-full bg-[#1e1e1e] items-center justify-end px-2 lg:px-4 min-w-[150px] lg:min-w-[250px] border-l border-[#333333]">
          {/* System Time */}
          <div className="hidden lg:flex items-center space-x-2 text-[#cccccc] text-xs mr-4 font-medium">
            <span className="w-2 h-2 bg-[#007acc] rounded-full"></span>
            <span>{currentTime}</span>
          </div>
          
          {/* File Path */}
          <div className="hidden lg:flex items-center space-x-1 text-[#888888] text-xs mr-6 font-mono">
            <span className="text-[#007acc]">~/</span>
            <span>anantjoshi1857:</span>
            <span className="text-[#cccccc]">
              {activeTab.replace("_", "").replace("-", "_")}.jsx
            </span>
          </div>
                
          {/* MacBook Style Window Controls */}
          <div className="flex items-center space-x-2">
            <button className="w-3 h-3 bg-[#ff5f57] rounded-full hover:bg-[#ff6b63] transition-colors duration-200 shadow-sm"></button>
            <button className="w-3 h-3 bg-[#ffbd2e] rounded-full hover:bg-[#ffc542] transition-colors duration-200 shadow-sm"></button>
            <button className="w-3 h-3 bg-[#28ca42] rounded-full hover:bg-[#36d451] transition-colors duration-200 shadow-sm"></button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-[#1e1e1e] border-b border-[#333333] z-40 animate-slideDown shadow-2xl">
          <div className="bg-[#252526] p-2">
            {/* <div className="text-[#007acc] text-xs mb-2 font-semibold text-center">
              VS Code Mobile Menu
            </div> */}
            
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  block px-6 py-4 text-sm border-b border-[#333333] last:border-b-0
                  transition-all duration-200 ease-in-out relative
                  ${activeTab === item.name
                    ? `${item.color} bg-[#1e1e1e] font-semibold`
                    : "text-[#cccccc] hover:text-[#ffffff] hover:bg-[#2d2d30]"
                  }
                `}
              >
                <span className="font-medium">{item.name}</span>
                {activeTab === item.name && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-current`}></div>
                )}
              </Link>
            ))}
            
            {/* Mobile System Info */}
            <div className="px-6 py-4 bg-[#1e1e1e] border-t border-[#333333] mt-2">
              <div className="flex items-center justify-between text-[#cccccc] text-xs font-medium">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#007acc] rounded-full"></span>
                  <span>File:</span>
                  <span className="text-[#ffffff]">
                    {activeTab.replace("_", "").replace("-", "_")}.jsx
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Time:</span>
                  <span className="text-[#ffffff]">{currentTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;