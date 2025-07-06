"use client";
import Link from "next/link";
import { useState } from "react";
import { Instagram, Linkedin, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [activeSection, setActiveSection] = useState("social");

  const socialLinks = [
    {
      name: "_instagram",
      href: "https://instagram.com/amolsonawane",
      icon: Instagram,
      color: "text-pink-400"
    },
    {
      name: "_linkedin",
      href: "https://linkedin.com/in/amolsonawane",
      icon: Linkedin,
      color: "text-blue-400"
    },
    {
      name: "_facebook",
      href: "https://facebook.com/amolsonawane",
      icon: Facebook,
      color: "text-blue-500"
    },
    {
      name: "_twitter",
      href: "https://twitter.com/amolsonawane",
      icon: Twitter,
      color: "text-sky-400"
    }
  ];

  const contactInfo = [
    {
      name: "_email",
      value: "amolsonawane1026@gmail.com",
      icon: Mail,
      href: "mailto:amolsonawane1026@gmail.com",
      color: "text-green-400"
    },
    {
      name: "_phone",
      value: "+91 7558379918",
      icon: Phone,
      href: "tel:+917558379918",
      color: "text-orange-400"
    }
  ];

  return (
    <footer className="bg-[#1e1e1e] border-t border-[#2d2d30] w-full flex flex-col sm:flex-row h-auto sm:h-14 items-center shadow-sm font-mono text-sm">
      {/* Center: Social Icons and Contact */}
      <div className="flex flex-wrap sm:flex-nowrap h-auto sm:h-full w-full sm:flex-1">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setActiveSection(social.name)}
            className={`
              px-3 py-2 sm:py-0 h-auto sm:h-full flex items-center text-sm border-b sm:border-b-0 sm:border-r border-[#2d2d30] min-w-[100px] sm:min-w-[120px] justify-center
              transition-all duration-200 relative group
              ${activeSection === social.name
                ? `${social.color} bg-[#1e1e1e] font-medium`
                : "text-[#969696] hover:text-[#cccccc] hover:bg-[#252526]"
              }
            `}
          >
            <span className="relative flex items-center gap-2 whitespace-nowrap">
              <social.icon size={16} />
              {social.name}
              {activeSection === social.name && (
                <div className={`absolute -bottom-[14px] left-0 right-0 h-0.5 ${social.color.replace('text-', 'bg-')}`}></div>
              )}
            </span>
          </Link>
        ))}

        {contactInfo.map((contact) => (
          <Link
            key={contact.name}
            href={contact.href}
            onClick={() => setActiveSection(contact.name)}
            className={`
              px-3 py-2 sm:py-0 h-auto sm:h-full flex items-center text-sm border-b sm:border-b-0 sm:border-r border-[#2d2d30] min-w-[140px] sm:min-w-[180px] justify-center
              transition-all duration-200 relative group
              ${activeSection === contact.name
                ? `${contact.color} bg-[#1e1e1e] font-medium`
                : "text-[#969696] hover:text-[#cccccc] hover:bg-[#252526]"
              }
            `}
          >
            <span className="relative flex items-center gap-2 whitespace-nowrap">
              <contact.icon size={16} />
              {contact.name}
              {activeSection === contact.name && (
                <div className={`absolute -bottom-[14px] left-0 right-0 h-0.5 ${contact.color.replace('text-', 'bg-')}`}></div>
              )}
            </span>
          </Link>
        ))}
      </div>

      {/* Right: Contact Display */}
      <div className="w-full sm:w-auto h-auto sm:h-full bg-[#1e1e1e] flex items-center justify-center sm:justify-end px-4 border-t sm:border-t-0 sm:border-l border-[#2d2d30] min-w-[auto] sm:min-w-[280px] mt-2 sm:mt-0">
        {/* Contact Info Display */}
        <div className="flex items-center space-x-1 text-[#969696] text-xs mr-0 sm:mr-6 whitespace-nowrap">
          <span>~/contact</span>
          <span>/</span>
          <span className="text-[#cccccc]">
            {activeSection === "_email" ? "amolsonawane1026@gmail.com" :
             activeSection === "_phone" ? "+91 7558379918" :
             activeSection.replace("_", "")}
          </span>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center space-x-2 ml-4">
          <div className="w-2 h-2 bg-[#27ca3f] rounded-full animate-pulse"></div>
          <span className="text-[#cccccc] text-xs">Online</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
