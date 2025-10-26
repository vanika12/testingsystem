"use client"

import { useState, useEffect } from "react"
import "./FindJournal.css"

function FindJournal() {
  const [title, setTitle] = useState("")
  const [keywords, setKeywords] = useState("")
  const [suggestion, setSuggestion] = useState(null)
  const [loading, setLoading] = useState(false)

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const journals = [
    {
      id: 1,
      name: "International Journal of Research and Innovation in Social Science",
      abbr: "IJRISS",
      description: "Focuses on social science research and innovation",
    },
    {
      id: 2,
      name: "International Journal of Research and Scientific Innovation",
      abbr: "IJRSI",
      description: "Covers scientific research and innovation across disciplines",
    },
    {
      id: 3,
      name: "International Journal of Research and Innovation in Applied Science",
      abbr: "IJRIAS",
      description: "Specializes in applied science research and innovation",
    },
    {
      id: 4,
      name: "International Journal of Latest Technology in Engineering, Management & Applied Science",
      abbr: "IJLTEMAS",
      description: "Focuses on latest technology in engineering and management",
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return

    setLoading(true)
    try {
      const response = await fetch("http://localhost:3001/api/suggest-journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, keywords }),
      })

      if (!response.ok) throw new Error("Failed to get suggestion")

      const data = await response.json()
      setSuggestion(data)
    } catch (error) {
      setSuggestion({
        journal: journals[0],
        confidence: "medium",
        reason: "Based on your input, this journal may be a good fit.",
      })
    } finally {
      setLoading(false)
      // Scroll to top again when result shows up
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <div className="find-journal">
      <div className="find-journal-header">
        <h1>Find a Journal</h1>
        <p>Let us help you find the perfect journal for your research</p>
      </div>

      <div className="find-journal-content">
        <div className="form-section">
          <form onSubmit={handleSubmit} className="journal-form">
            <div className="form-group">
              <label htmlFor="title">Paper Title *</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your paper title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="keywords">Keywords (optional)</label>
              <input
                id="keywords"
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="e.g., machine learning, social impact, innovation"
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? "Analyzing..." : "Get Recommendation"}
            </button>
          </form>

          {suggestion && (
            <div className="suggestion-result">
              <h3>Recommended Journal</h3>
              <div className={`journal-card confidence-${suggestion.confidence}`}>
                <div className="confidence-badge">
                  {suggestion.confidence.toUpperCase()}
                </div>
                <h4>{suggestion.journal.name}</h4>
                <p className="journal-abbr">{suggestion.journal.abbr}</p>
                <p className="journal-desc">{suggestion.journal.description}</p>
                <p className="reason">
                  <strong>Why:</strong> {suggestion.reason}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="journals-list">
          <h3>Our Journals</h3>
          <div className="all-journals">
            {journals.map((journal) => (
              <div key={journal.id} className="journal-item">
                <h4>{journal.name}</h4>
                <p className="abbr">{journal.abbr}</p>
                <p>{journal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindJournal


// "use client"

// import { useState } from "react"
// import "./FindJournal.css"

// function FindJournal() {
//   const [title, setTitle] = useState("")
//   const [keywords, setKeywords] = useState("")
//   const [suggestion, setSuggestion] = useState(null)
//   const [loading, setLoading] = useState(false)

//   const journals = [
//     {
//       id: 1,
//       name: "International Journal of Research and Innovation in Social Science",
//       abbr: "IJRISS",
//       description: "Focuses on social science research and innovation",
//     },
//     {
//       id: 2,
//       name: "International Journal of Research and Scientific Innovation",
//       abbr: "IJRSI",
//       description: "Covers scientific research and innovation across disciplines",
//     },
//     {
//       id: 3,
//       name: "International Journal of Research and Innovation in Applied Science",
//       abbr: "IJRIAS",
//       description: "Specializes in applied science research and innovation",
//     },
//     {
//       id: 4,
//       name: "International Journal of Latest Technology in Engineering, Management & Applied Science",
//       abbr: "IJLTEMAS",
//       description: "Focuses on latest technology in engineering and management",
//     },
//   ]

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!title.trim()) return

//     setLoading(true)
//     try {
//       const response = await fetch("http://localhost:3001/api/suggest-journal", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, keywords }),
//       })

//       if (!response.ok) throw new Error("Failed to get suggestion")

//       const data = await response.json()
//       setSuggestion(data)
//     } catch (error) {
//       // Fallback: suggest IJRISS
//       setSuggestion({
//         journal: journals[0],
//         confidence: "medium",
//         reason: "Based on your input, this journal may be a good fit.",
//       })
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="find-journal">
//       <div className="find-journal-header">
//         <h1>Find a Journal</h1>
//         <p>Let us help you find the perfect journal for your research</p>
//       </div>

//       <div className="find-journal-content">
//         <div className="form-section">
//           <form onSubmit={handleSubmit} className="journal-form">
//             <div className="form-group">
//               <label htmlFor="title">Paper Title *</label>
//               <input
//                 id="title"
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Enter your paper title"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="keywords">Keywords (optional)</label>
//               <input
//                 id="keywords"
//                 type="text"
//                 value={keywords}
//                 onChange={(e) => setKeywords(e.target.value)}
//                 placeholder="e.g., machine learning, social impact, innovation"
//               />
//             </div>

//             <button type="submit" disabled={loading} className="submit-btn">
//               {loading ? "Analyzing..." : "Get Recommendation"}
//             </button>
//           </form>

//           {suggestion && (
//             <div className="suggestion-result">
//               <h3>Recommended Journal</h3>
//               <div className={`journal-card confidence-${suggestion.confidence}`}>
//                 <div className="confidence-badge">{suggestion.confidence.toUpperCase()}</div>
//                 <h4>{suggestion.journal.name}</h4>
//                 <p className="journal-abbr">{suggestion.journal.abbr}</p>
//                 <p className="journal-desc">{suggestion.journal.description}</p>
//                 <p className="reason">
//                   <strong>Why:</strong> {suggestion.reason}
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="journals-list">
//           <h3>Our Journals</h3>
//           <div className="all-journals">
//             {journals.map((journal) => (
//               <div key={journal.id} className="journal-item">
//                 <h4>{journal.name}</h4>
//                 <p className="abbr">{journal.abbr}</p>
//                 <p>{journal.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FindJournal
