"use client";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageSquare,
  Terminal,
  Code2,
  CheckCircle,
  AlertCircle,
  Play,
  FileText,
  Folder,
  GitBranch,
  Coffee,
  Zap,
  Globe
} from "lucide-react";

// Mock Formik and Yup since they're not available in this environment
// In a real project, you would import these:
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// Mock validation schema (replace with actual Yup schema)
const validationSchema = {
  name: { required: true, minLength: 2 },
  email: { required: true, email: true },
  phone: { required: true, minLength: 10 },
  query: { required: true, minLength: 10 }
};

// Mock axios (replace with actual axios)
const axios = {
  post: async (url, data) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { success: true, message: "Message sent successfully!" } });
      }, 2000);
    });
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentLine, setCurrentLine] = useState(1);

  // Mock validation function (replace with Formik/Yup)
  const validateField = (name, value) => {
    const fieldSchema = validationSchema[name];
    if (!fieldSchema) return '';

    if (fieldSchema.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (fieldSchema.minLength && value.length < fieldSchema.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${fieldSchema.minLength} characters`;
    }

    if (fieldSchema.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }

    return '';
  };

  const validateForm = (data) => {
    const newErrors = {};
    Object.keys(data).forEach(key => {
      const error = validateField(key, data[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async () => {
    
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('/api/contact', formData);
      setSubmitStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', phone: '', query: '' });
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "amolsonawane1026@gmail.com",
      href: "mailto:amolsonawane1026@gmail.com",
      color: "text-[#4fc1ff]"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-[#4ec9b0]"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Maharashtra, India",
      href: "#",
      color: "text-[#f9e2af]"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "www.amolsonawane.dev",
      href: "https://amolsonawane.dev",
      color: "text-[#dcb67a]"
    }
  ];

  const getCurrentLineNumber = () => {
    let lineCount = 1;
    // Header comment
    lineCount += 2;
    // Form declaration
    lineCount += 2;
    // Form fields
    Object.keys(formData).forEach((key, index) => {
      lineCount += 1; // field line
      if (formData[key]) lineCount += 1; // value line if has content
      if (errors[key]) lineCount += 1; // error line if has error
    });
    return lineCount;
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono mt-14">
      
      {/* Header */}
      <div className="border-b border-[#2d2d30] bg-[#252526]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#007acc] to-[#0e639c] rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#cccccc]">Contact Me</h1>
                <p className="text-[#6a9955]">// Let's build something amazing together</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-[#858585]">
              <Terminal className="w-4 h-4" />
              <span>contact.tsx</span>
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
                <span className="text-[#cccccc]">contact-form</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#1e1e1e] px-4 py-2 text-sm border-r border-[#3e3e42]">
                <FileText className="w-4 h-4 text-[#4fc1ff]" />
                <span className="text-[#4fc1ff]">contact.tsx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Form - Main Editor */}
          <div className="lg:col-span-2">
            <div className="bg-[#252526] rounded-lg border border-[#2d2d30] overflow-hidden">
              
              {/* Editor Header */}
              <div className="bg-[#2d2d30] px-4 py-2 border-b border-[#3e3e42] flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-[#007acc]" />
                    <span className="text-[#cccccc] text-sm">Contact Form Component</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-[#858585]">
                  <span>TypeScript React</span>
                </div>
              </div>

              {/* Code Editor */}
              <div className="p-6">
                <div className="space-y-6">
                  
                  {/* Code Header */}
                  <div className="flex">
                    <div className="text-[#858585] text-right pr-4 select-none text-sm leading-6 min-w-[3rem]">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                    </div>
                    <div className="flex-1 text-sm leading-6">
                      <div className="text-[#6a9955]">// Contact Form Interface</div>
                      <div className="text-[#cccccc]">
                        <span className="text-[#c586c0]">interface</span>{" "}
                        <span className="text-[#4ec9b0]">ContactForm</span>{" "}
                        <span className="text-[#cccccc]">{`{`}</span>
                      </div>
                      <div className="text-[#cccccc] pl-4">
                        <span className="text-[#9cdcfe]">name</span>
                        <span className="text-[#cccccc]">: </span>
                        <span className="text-[#4ec9b0]">string</span>
                        <span className="text-[#cccccc]">;</span>
                      </div>
                      <div className="text-[#cccccc] pl-4">
                        <span className="text-[#9cdcfe]">email</span>
                        <span className="text-[#cccccc]">: </span>
                        <span className="text-[#4ec9b0]">string</span>
                        <span className="text-[#cccccc]">;</span>
                      </div>
                      <div className="text-[#cccccc]">{`}`}</div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-6 pl-12">
                    
                    {/* Name Field */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-[#007acc]" />
                        <label className="text-[#cccccc] font-medium">
                          <span className="text-[#6a9955]">// </span>Full Name
                        </label>
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name..."
                        className="w-full bg-[#1e1e1e] border border-[#3e3e42] rounded px-4 py-3 text-[#d4d4d4] placeholder-[#858585] focus:border-[#007acc] focus:outline-none transition-colors font-mono"
                      />
                      {errors.name && (
                        <div className="flex items-center space-x-2 text-[#f48771] text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[#007acc]" />
                        <label className="text-[#cccccc] font-medium">
                          <span className="text-[#6a9955]">// </span>Email Address
                        </label>
                      </div>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full bg-[#1e1e1e] border border-[#3e3e42] rounded px-4 py-3 text-[#d4d4d4] placeholder-[#858585] focus:border-[#007acc] focus:outline-none transition-colors font-mono"
                      />
                      {errors.email && (
                        <div className="flex items-center space-x-2 text-[#f48771] text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-[#007acc]" />
                        <label className="text-[#cccccc] font-medium">
                          <span className="text-[#6a9955]">// </span>Phone Number
                        </label>
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#1e1e1e] border border-[#3e3e42] rounded px-4 py-3 text-[#d4d4d4] placeholder-[#858585] focus:border-[#007acc] focus:outline-none transition-colors font-mono"
                      />
                      {errors.phone && (
                        <div className="flex items-center space-x-2 text-[#f48771] text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Query Field */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <MessageSquare className="w-5 h-5 text-[#007acc]" />
                        <label className="text-[#cccccc] font-medium">
                          <span className="text-[#6a9955]">// </span>Your Message
                        </label>
                      </div>
                      <textarea
                        value={formData.query}
                        onChange={(e) => handleInputChange('query', e.target.value)}
                        placeholder="Tell me about your project ideas, questions, or how we can work together..."
                        rows={6}
                        className="w-full bg-[#1e1e1e] border border-[#3e3e42] rounded px-4 py-3 text-[#d4d4d4] placeholder-[#858585] focus:border-[#007acc] focus:outline-none transition-colors font-mono resize-vertical"
                      />
                      {errors.query && (
                        <div className="flex items-center space-x-2 text-[#f48771] text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.query}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="flex items-center space-x-3 bg-[#007acc] hover:bg-[#005a9e] disabled:bg-[#005a9e] disabled:opacity-50 text-white px-6 py-3 rounded transition-colors font-medium"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus && (
                      <div className={`flex items-center space-x-3 p-4 rounded-lg ${
                        submitStatus.type === 'success' 
                          ? 'bg-[#4ec9b0]/10 border border-[#4ec9b0]/30 text-[#4ec9b0]' 
                          : 'bg-[#f48771]/10 border border-[#f48771]/30 text-[#f48771]'
                      }`}>
                        {submitStatus.type === 'success' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <AlertCircle className="w-5 h-5" />
                        )}
                        <span>{submitStatus.message}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Contact Info & Stats */}
          <div className="space-y-6">
            
            {/* Contact Information */}
            <div className="bg-[#252526] rounded-lg border border-[#2d2d30] p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Terminal className="w-5 h-5 text-[#007acc]" />
                <h3 className="text-lg font-bold text-[#cccccc]">Contact Info</h3>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-3 p-3 bg-[#1e1e1e] rounded hover:bg-[#2d2d30] transition-colors border border-[#2d2d30] hover:border-[#007acc]/50 group"
                  >
                    <div className={`${info.color} group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[#858585] text-xs uppercase tracking-wider">{info.label}</div>
                      <div className="text-[#cccccc] font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#252526] rounded-lg border border-[#2d2d30] p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="w-5 h-5 text-[#007acc]" />
                <h3 className="text-lg font-bold text-[#cccccc]">Response Stats</h3>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#858585]">Response Time:</span>
                  <span className="text-[#4ec9b0]"> 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#858585]">Availability:</span>
                  <span className="text-[#4ec9b0]">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#858585]">Timezone:</span>
                  <span className="text-[#d4d4d4]">IST (UTC+5:30)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#858585]">Languages:</span>
                  <span className="text-[#d4d4d4]">EN, HI, MR</span>
                </div>
              </div>
            </div>

            {/* Coffee Counter */}
            <div className="bg-[#252526] rounded-lg border border-[#2d2d30] p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="w-5 h-5 text-[#f9e2af]" />
                <h3 className="text-lg font-bold text-[#cccccc]">Fuel Level</h3>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f9e2af] mb-2">∞</div>
                <div className="text-[#858585] text-sm">Cups of coffee today</div>
                <div className="mt-4 w-full bg-[#2d2d30] rounded-full h-2">
                  <div className="bg-[#f9e2af] h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-[#858585] text-sm">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <GitBranch className="w-4 h-4" />
            <span>// Built with ❤️ and lots of ☕</span>
          </div>
          <div>Ready to collaborate? Let's turn your ideas into reality!</div>
        </div>

      </div>
    </div>
  );
};

export default Contact;