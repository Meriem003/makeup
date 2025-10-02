"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("Thank you for your message! We will get back to you soon.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="animate-fade-in-up">
      <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="product">Product Question</option>
            <option value="order">Order Support</option>
            <option value="consultation">Book Consultation</option>
            <option value="partnership">Partnership Opportunity</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-all duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
