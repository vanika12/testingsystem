"use client"

import { useState } from "react"
import ChatPanel from "../components/ChatPanel"
import "./Support.css"

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const questions = [
    "How to contact support?",
    "How to track submission status?",
    "How to report a technical issue?",
    "How to request a refund?",
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setFormStatus({ type: "success", message: "Your support ticket has been submitted successfully!" })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setFormStatus({
        type: "success",
        message: "Thank you for contacting us. We will get back to you soon!",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="support-page">
      <div className="support-header">
        <h1>Support</h1>
        <p>Get help from our team or use the chat below</p>
      </div>

      <div className="support-content">
        <div className="support-left">
          <div className="questions-section">
            <h3>Quick Questions</h3>
            <div className="quick-questions">
              {questions.map((q, idx) => (
                <div key={idx} className="quick-q">
                  {q}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Submit a Ticket</h3>
            <form onSubmit={handleSubmitForm} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                />
              </div>

              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? "Submitting..." : "Submit Ticket"}
              </button>

              {formStatus && <div className={`form-status ${formStatus.type}`}>{formStatus.message}</div>}
            </form>
          </div>
        </div>

        <div className="support-right">
          <ChatPanel />
        </div>
      </div>
    </div>
  )
}

export default Support
