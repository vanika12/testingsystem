"use client"

import { useState, useRef, useEffect } from "react"
import "./ChatPanel.css"

function ChatPanel({ initialQuestion = "" }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState(initialQuestion)
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/chat";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = input
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage, timestamp: new Date() }])
    setLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      console.log("[v0] Response status:", response.status)

      if (!response.ok) {
        const errorData = await response.json()
        console.log("[v0] Error response:", errorData)
        throw new Error(`Failed to get response: ${response.status} - ${JSON.stringify(errorData)}`)
      }

      const data = await response.json()
      console.log("[v0] Success response:", data)
      setMessages((prev) => [...prev, { role: "assistant", content: data.response, timestamp: new Date() }])
    } catch (error) {
      console.error("[v0] Chat error:", error.message)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again or contact support.",
          timestamp: new Date(),
          isError: true,
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="chat-panel">
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-welcome">
            <p>Hello! How can I assist you today?</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div key={idx} className={`message message-${msg.role} ${msg.isError ? "error" : ""}`}>
            <div className="message-content">{msg.content}</div>
            <div className="message-time">
              {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        ))}
        {loading && (
          <div className="message message-assistant loading">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your question here..."
          className="chat-input"
          rows="3"
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()} className="send-button">
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  )
}

export default ChatPanel

// "use client"

// import { useState, useRef, useEffect } from "react"
// import "./ChatPanel.css"

// function ChatPanel({ initialQuestion = "" }) {
//   const [messages, setMessages] = useState([])
//   const [input, setInput] = useState(initialQuestion)
//   const [loading, setLoading] = useState(false)
//   const messagesEndRef = useRef(null)

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

//   const sendMessage = async () => {
//     if (!input.trim()) return

//     const userMessage = input
//     setInput("")
//     setMessages((prev) => [...prev, { role: "user", content: userMessage, timestamp: new Date() }])
//     setLoading(true)

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage }),
//       })

//       if (!response.ok) throw new Error("Failed to get response")

//       const data = await response.json()
//       setMessages((prev) => [...prev, { role: "assistant", content: data.response, timestamp: new Date() }])
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Sorry, I encountered an error. Please try again or contact support.",
//           timestamp: new Date(),
//           isError: true,
//         },
//       ])
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault()
//       sendMessage()
//     }
//   }

//   return (
//     <div className="chat-panel">
//       <div className="chat-messages">
//         {messages.length === 0 && (
//           <div className="chat-welcome">
//             <p>Hello! How can I assist you today?</p>
//           </div>
//         )}
//         {messages.map((msg, idx) => (
//           <div key={idx} className={`message message-${msg.role} ${msg.isError ? "error" : ""}`}>
//             <div className="message-content">{msg.content}</div>
//             <div className="message-time">
//               {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div className="message message-assistant loading">
//             <div className="loading-dots">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       <div className="chat-input-area">
//         <textarea
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Type your question here..."
//           className="chat-input"
//           rows="3"
//         />
//         <button onClick={sendMessage} disabled={loading || !input.trim()} className="send-button">
//           {loading ? "Sending..." : "Send"}
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ChatPanel
