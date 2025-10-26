
"use client"

import { useState, useRef, useEffect } from "react"
import "./ChatPanel.css"

function ChatPanel({ initialQuestion = "" }) {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages")
    return saved ? JSON.parse(saved) : []
  })
  const [input, setInput] = useState(initialQuestion)
  const [loading, setLoading] = useState(false)
  const containerRef = useRef(null)
  // store DOM refs per message index
  const messageRefs = useRef({})

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api/chat"

  // persist messages
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
  }, [messages])

 

  // When the last message is a USER message, scroll that message into view so the user
  // sees where their question starts. We DO NOT auto-scroll on assistant messages.
  useEffect(() => {
    if (!messages || messages.length === 0) return
    const lastIndex = messages.length - 1
    const lastMsg = messages[lastIndex]

    if (lastMsg.role === "user") {
      const el = messageRefs.current[lastIndex]
      if (el && containerRef.current) {
        // Scroll the user's message into view at the top of the container.
        // `block: "start"` keeps the message at the top so the answer appears below it.
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    // If assistant message arrives, do nothing -> prevents weird jump to bottom.
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setInput("")

    // Add user message
    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage, timestamp: new Date() },
    ])

    setLoading(true)
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) {
        const err = await response.json().catch(() => ({}))
        throw new Error(err.message || `Request failed: ${response.status}`)
      }

      const data = await response.json()
      // Add assistant message (we don't scroll here; we let the user read from the user message start)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response, timestamp: new Date() },
      ])
    } catch (error) {
      console.error("Chat Error:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
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
      <div className="chat-messages" ref={containerRef}>
        {messages.length === 0 && (
          <div className="chat-welcome">
            <p>Hello! How can I assist you today?</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            ref={(el) => (messageRefs.current[idx] = el)}
            className={`message message-${msg.role} ${msg.isError ? "error" : ""}`}
          >
            <div className="message-content">{msg.content}</div>
            <div className="message-time">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
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
        <button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="send-button"
        >
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
