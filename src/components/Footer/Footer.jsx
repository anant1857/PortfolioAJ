"use client";
import Link from "next/link";
import { useState } from "react";
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState("social");

  const socialLinks = [
    {
      name: "_instagram",
      href: "https://www.instagram.com/a_n_a_n_t_1857/",
      icon: Instagram,
      color: "text-pink-400"
    },
    {
      name: "_linkedin",
      href: "https://www.linkedin.com/in/anant-joshi-a847b6201/",
      icon: Linkedin,
      color: "text-blue-400"
    },
    {
      name: "_facebook",
      href: "https://www.facebook.com/anant.joshi.524381",
      icon: Facebook,
      color: "text-blue-500"
    },
    {
      name: "_email",
      value: "joshianant1857@gmail.com",
      icon: Mail,
      href: "mailto:joshianant1857@gmail.com",
      color: "text-green-400"
    },
    {
      name: "_phone",
      value: "+91 8847769979",
      icon: Phone,
      href: "tel:+918847769979",
      color: "text-orange-400"
    }
  ];

  const getDisplayValue = () => {
    const activeLink = socialLinks.find(link => link.name === activeSection);
    if (activeLink?.value) return activeLink.value;
    return activeSection.replace("_", "");
  };

  return (
    <footer className="bg-[#1e1e1e] border-t border-[#2d2d30] w-full flex flex-col lg:flex-row h-auto lg:h-14 items-stretch shadow-sm font-mono text-sm">
      {/* Social Links and Contact Section */}
      <div className="flex flex-1 h-auto lg:h-full">
        {/* All Links */}
        <div className="flex flex-1 min-w-0">
          {socialLinks.map((social, index) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setActiveSection(social.name)}
              className={`
                flex-1 px-2 sm:px-4 py-3 lg:py-0 h-auto lg:h-full flex items-center justify-center text-sm 
                border-r border-[#2d2d30] transition-all duration-200 relative group min-w-0
                ${activeSection === social.name
                  ? `${social.color} bg-[#252526] font-medium`
                  : "text-[#969696] hover:text-[#cccccc] hover:bg-[#252526]"
                }
              `}
            >
              <span className="relative flex items-center gap-2 whitespace-nowrap overflow-hidden">
                <social.icon size={16} className="flex-shrink-0" />
                <span className="hidden sm:inline truncate">{social.name}</span>
                {activeSection === social.name && (
                  <div className={`absolute -bottom-[12px] lg:-bottom-[14px] left-0 right-0 h-0.5 ${social.color.replace('text-', 'bg-')}`}></div>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Display and Status */}
      <div className="w-full lg:w-auto lg:min-w-[320px] h-auto lg:h-full bg-[#1e1e1e] flex items-center justify-between px-4 py-3 lg:py-0 border-t lg:border-t-0 lg:border-l border-[#2d2d30]">
        {/* Contact Info Display */}
        <div className="flex items-center space-x-1 text-[#969696] text-xs flex-1 min-w-0">
          <span className="flex-shrink-0">~/contact</span>
          <span className="flex-shrink-0">/</span>
          <span className="text-[#cccccc] truncate">
            {getDisplayValue()}
          </span>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center space-x-2 ml-4 flex-shrink-0">
          <div className="w-2 h-2 bg-[#27ca3f] rounded-full animate-pulse"></div>
          <span className="text-[#cccccc] text-xs">Online</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;