"use client"
import { useState } from "react"
import { X, Mail, User, Phone, MessageSquare } from "lucide-react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10,13}\s*,?$/, "Invalid phone number")
    .nullable(),
  message: Yup.string().required("Message is required"),
})

const PopUpForm = ({ isOpen, onClose }) => {
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1e1e]/80 backdrop-blur-sm">
      <div className="bg-[#252526] border border-[#2d2d30] rounded-lg shadow-2xl w-full max-w-lg mx-4 relative font-mono overflow-hidden">
        {/* Title Bar */}
        <div className="bg-[#2d2d30] px-4 py-3 flex items-center justify-between border-b border-[#3e3e42]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-[#cccccc] text-sm font-medium">Contact Form</div>
          <button
            onClick={onClose}
            className="text-[#cccccc] hover:text-red-400 p-1 rounded transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* File Tab */}
        <div className="bg-[#1e1e1e] px-4 py-2 border-b border-[#2d2d30]">
          <div className="inline-flex items-center bg-[#252526] border border-[#2d2d30] px-3 py-1 rounded-t text-blue-400 text-xs">
            contact.js
            <span className="ml-2 text-[#858585]">●</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <Formik
            initialValues={{ name: "", email: "", phone: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              setLoading(true)
              setSuccess("")
              setError("")

              try {
                const res = await fetch("http://localhost:5000/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                })

                const data = await res.json()

                if (res.ok) {
                  setSuccess("Message sent!")
                  resetForm()
                  // Close modal after 1.5 seconds
                  setTimeout(() => {
                    onClose()
                  }, 1500)
                } else {
                  setError(data.error || "Failed to send message.")
                }
              } catch {
                setError("Failed to send message.")
              }

              setLoading(false)
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#cccccc] text-sm">
                    <User size={14} className="text-[#858585]" />
                    Name
                  </div>
                  <Field
                    type="text"
                    name="name"
                    className="w-full h-10 bg-[#1e1e1e] border border-[#2d2d30] rounded px-3 text-[#cccccc] text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                  <ErrorMessage name="name" component="div" className="text-red-400 text-xs" />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#cccccc] text-sm">
                    <Mail size={14} className="text-[#858585]" />
                    Email
                  </div>
                  <Field
                    type="email"
                    name="email"
                    className="w-full h-10 bg-[#1e1e1e] border border-[#2d2d30] rounded px-3 text-[#cccccc] text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                  <ErrorMessage name="email" component="div" className="text-red-400 text-xs" />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#cccccc] text-sm">
                    <Phone size={14} className="text-[#858585]" />
                    Phone
                  </div>
                  <Field
                    type="tel"
                    name="phone"
                    className="w-full h-10 bg-[#1e1e1e] border border-[#2d2d30] rounded px-3 text-[#cccccc] text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-400 text-xs" />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#cccccc] text-sm">
                    <MessageSquare size={14} className="text-[#858585]" />
                    Message
                  </div>
                  <Field
                    as="textarea"
                    name="message"
                    className="w-full bg-[#1e1e1e] border border-[#2d2d30] rounded px-3 py-2 text-[#cccccc] text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/50 transition-colors resize-none"
                    placeholder="Type your message here..."
                    rows={4}
                    required
                  />
                  <ErrorMessage name="message" component="div" className="text-red-400 text-xs" />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#0e639c] hover:bg-[#1177bb] text-white px-4 py-2.5 rounded text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    disabled={loading || isSubmitting}
                  >
                    <Mail size={16} />
                    {loading || isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>

                {success && <div className="text-green-400 text-sm">{success}</div>}
                {error && <div className="text-red-400 text-sm">{error}</div>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default PopUpForm
