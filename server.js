import express from "express"
import "dotenv/config"
import cors from "cors"
import { formatKnowledgeBase } from "./data/rsis-knowledge-base.js"
const app = express()
app.use(cors())
app.use(express.json())



const GROQ_API_KEY = process.env.GROQ_API_KEY

if (!GROQ_API_KEY) {
  console.warn("WARNING: GROQ_API_KEY environment variable is not set. Chat functionality will not work.")
}
// ✅ Define journal knowledge base with relevant keywords
const journals = [
  {
    id: 1,
    name: "International Journal of Research and Innovation in Social Science",
    abbr: "IJRISS",
    description: "Focuses on social science research and innovation",
    keywords: [
      "education", "sociology", "psychology", "economics", "social",
      "management", "policy", "culture", "behavior", "society",
      "communication", "gender", "political", "ethics"
    ],
  },
  {
    id: 2,
    name: "International Journal of Research and Scientific Innovation",
    abbr: "IJRSI",
    description: "Covers scientific research and innovation across disciplines",
    keywords: [
      "science", "physics", "chemistry", "biology", "mathematics", "ai",
      "artificial intelligence", "ml", "machine learning", "data", "nanotechnology",
      "biotechnology", "research", "innovation", "quantum"
    ],
  },
  {
    id: 3,
    name: "International Journal of Research and Innovation in Applied Science",
    abbr: "IJRIAS",
    description: "Specializes in applied science research and innovation",
    keywords: [
      "applied", "engineering", "technology", "application", "mechanical",
      "civil", "electrical", "electronics", "automation", "robotics",
      "chemical", "energy", "industrial", "renewable", "smart"
    ],
  },
  {
    id: 4,
    name: "International Journal of Latest Technology in Engineering, Management & Applied Science",
    abbr: "IJLTEMAS",
    description: "Focuses on latest technology in engineering and management",
    keywords: [
      "engineering", "technology", "latest", "management", "business",
      "innovation", "ai", "blockchain", "automation", "iot",
      "software", "network", "supply chain", "machine", "computing"
    ],
  },
]
// ✅ Journal suggestion endpoint
app.post("/api/suggest-journal", async (req, res) => {
  const { title, keywords } = req.body

  if (!title) {
    return res.status(400).json({ error: "Title is required" })
  }

  const text = (title + " " + (keywords || "")).toLowerCase()

  let bestMatch = journals[0]
  let highestScore = 0

  // 🧠 Compute keyword match score
  for (const journal of journals) {
    let score = 0
    for (const kw of journal.keywords) {
      if (text.includes(kw.toLowerCase())) score++
    }

    if (score > highestScore) {
      highestScore = score
      bestMatch = journal
    }
  }

  // 🧩 Confidence level logic
  let confidence = "low"
  if (highestScore >= 4) confidence = "high"
  else if (highestScore >= 2) confidence = "medium"

  // 🧾 Fallback: if no strong technical or applied science words, use IJRISS
  if (highestScore === 0) {
    bestMatch = journals.find((j) => j.abbr === "IJRISS")
  }

  res.json({
    journal: bestMatch,
    confidence,
    reason:
      highestScore > 0
        ? `Matched ${highestScore} keyword(s) for ${bestMatch.abbr}.`
        : `No technical or applied keywords found — defaulted to IJRISS (social sciences).`,
  })
})

// --------------------- CHAT ENDPOINT ---------------------
app.post("/api/chat", async (req, res) => {
  const { message } = req.body
  console.log("[v0] Received chat request:", message)

  if (!message) return res.status(400).json({ error: "Message is required" })

  if (!GROQ_API_KEY) {
    console.error("[v0] ERROR: GROQ_API_KEY is not set")
    return res.status(500).json({
      error: "API key not configured",
      details: "GROQ_API_KEY environment variable is not set",
    })
  }

  try {
    const knowledgeBase = formatKnowledgeBase()

    console.log("[v0] Calling Groq API...")

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant for RSIS International, a research publishing organization.

${knowledgeBase}

INSTRUCTIONS:
- Answer questions about manuscript preparation, submission, fees, peer review, indexing, open access policy, collaboration, payment options, and journal selection.
- Keep answers concise (2–4 sentences), professional, and cite the journal name when appropriate.
- Use the knowledge base above to provide accurate information.
- If a question is not covered in the knowledge base, suggest contacting support@rsis.org.
- Always be helpful and professional.
- Do not invent policies or information not in the knowledge base.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    console.log("[v0] Groq API response status:", response.status)

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Groq API error:", errorData)
      throw new Error(`Groq API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
    }

    const data = await response.json()
    const assistantMessage = data.choices[0].message.content

    console.log("[v0] Groq response received successfully")
    res.json({ response: assistantMessage })
  } catch (error) {
    console.error("[v0] Error calling Groq API:", error.message)
    res.status(500).json({
      error: "Failed to get response from AI",
      details: error.message,
    })
  }
})

// --------------------- JOURNAL SUGGESTION ENDPOINT ---------------------


// --------------------- SUPPORT ENDPOINT ---------------------
app.post("/api/support", async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message)
    return res.status(400).json({ error: "All fields are required" })

  console.log("Support ticket received:", { name, email, subject, message })
  res.json({ success: true, message: "Support ticket submitted successfully" })
})

// --------------------- SERVER SETUP ---------------------
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`✓ RSIS Assistant server running on port ${PORT}`)
  if (GROQ_API_KEY) console.log("✓ Groq API key loaded successfully")
  else console.error("ERROR: GROQ_API_KEY is not set. Please set it in your .env file.")
})

// import express from "express"
// import "dotenv/config"; 
// import cors from "cors"
// import { formatKnowledgeBase } from "./data/rsis-knowledge-base.js"

// const app = express()
// app.use(cors())
// app.use(express.json())

// const GROQ_API_KEY = process.env.GROQ_API_KEY

// if (!GROQ_API_KEY) {
//   console.warn("WARNING: GROQ_API_KEY environment variable is not set. Chat functionality will not work.")
// }

// app.post("/api/chat", async (req, res) => {
//   const { message } = req.body

//   console.log("[v0] Received chat request:", message)

//   if (!message) {
//     return res.status(400).json({ error: "Message is required" })
//   }

//   if (!GROQ_API_KEY) {
//     console.error("[v0] ERROR: GROQ_API_KEY is not set")
//     return res.status(500).json({
//       error: "API key not configured",
//       details: "GROQ_API_KEY environment variable is not set",
//     })
//   }

//   try {
//     const knowledgeBase = formatKnowledgeBase()

//     console.log("[v0] Calling Groq API...")

//     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${GROQ_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "llama-3.3-70b-versatile",
//         messages: [
//           {
//             role: "system",
//             content: `You are a helpful assistant for RSIS International, a research publishing organization. 

// ${knowledgeBase}

// INSTRUCTIONS:
// - Answer questions about manuscript preparation, submission, fees, peer review, indexing, open access policy, collaboration, payment options, and journal selection.
// - Keep answers concise (2-4 sentences), professional, and cite the journal name when appropriate.
// - Use the knowledge base above to provide accurate information.
// - If a question is not covered in the knowledge base, suggest contacting support@rsis.org.
// - Always be helpful and professional.
// - Do not invent policies or information not in the knowledge base.`,
//           },
//           {
//             role: "user",
//             content: message,
//           },
//         ],
//         temperature: 0.7,
//         max_tokens: 500,
//       }),
//     })

//     console.log("[v0] Groq API response status:", response.status)

//     if (!response.ok) {
//       const errorData = await response.json()
//       console.error("[v0] Groq API error:", errorData)
//       throw new Error(`Groq API error: ${response.statusText} - ${JSON.stringify(errorData)}`)
//     }

//     const data = await response.json()
//     const assistantMessage = data.choices[0].message.content

//     console.log("[v0] Groq response received successfully")

//     res.json({ response: assistantMessage })
//   } catch (error) {
//     console.error("[v0] Error calling Groq API:", error.message)
//     res.status(500).json({
//       error: "Failed to get response from AI",
//       details: error.message,
//     })
//   }
// })

// // Journal suggestion endpoint
// app.post("/api/suggest-journal", async (req, res) => {
//   const { title, keywords } = req.body

//   if (!title) {
//     return res.status(400).json({ error: "Title is required" })
//   }

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

//   try {
//     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${GROQ_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "mixtral-8x7b-32768",
//         messages: [
//           {
//             role: "system",
//             content: `You are a journal recommendation assistant. Based on the paper title and keywords, recommend one of these RSIS journals:
// ${journals.map((j) => `- ${j.name} (${j.abbr}): ${j.description}`).join("\n")}

// Respond in JSON format: {"journalAbbr": "ABBR", "confidence": "high|medium|low", "reason": "brief explanation"}`,
//           },
//           {
//             role: "user",
//             content: `Paper title: "${title}"${keywords ? `\nKeywords: ${keywords}` : ""}`,
//           },
//         ],
//         temperature: 0.5,
//         max_tokens: 200,
//       }),
//     })

//     if (!response.ok) {
//       throw new Error(`Groq API error: ${response.statusText}`)
//     }

//     const data = await response.json()
//     const responseText = data.choices[0].message.content

//     // Parse JSON from response
//     const jsonMatch = responseText.match(/\{[\s\S]*\}/)
//     const recommendation = jsonMatch ? JSON.parse(jsonMatch[0]) : null

//     if (!recommendation) {
//       return res.json({
//         journal: journals[0],
//         confidence: "medium",
//         reason: "Based on your input, this journal may be a good fit.",
//       })
//     }

//     const journal = journals.find((j) => j.abbr === recommendation.journalAbbr) || journals[0]

//     res.json({
//       journal,
//       confidence: recommendation.confidence,
//       reason: recommendation.reason,
//     })
//   } catch (error) {
//     console.error("Error suggesting journal:", error)
//     res.json({
//       journal: journals[0],
//       confidence: "medium",
//       reason: "Based on your input, this journal may be a good fit.",
//     })
//   }
// })

// // Support ticket endpoint
// app.post("/api/support", async (req, res) => {
//   const { name, email, subject, message } = req.body

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ error: "All fields are required" })
//   }

//   // In a real app, save to database
//   console.log("Support ticket received:", { name, email, subject, message })

//   res.json({ success: true, message: "Support ticket submitted successfully" })
// })

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`✓ RSIS Assistant server running on port ${PORT}`)
//   if (GROQ_API_KEY) {
//     console.log("✓ Groq API key loaded successfully")
//   } else {
//     console.error("ERROR: GROQ_API_KEY is not set. Please set it in your .env file.")
//   }
// })



// import express from "express"
// import cors from "cors"

// const app = express()
// app.use(cors())
// app.use(express.json())

// const GROK_API_KEY = process.env.GROK_API_KEY || "your-grok-api-key-here"

// // Chat endpoint
// app.post("/api/chat", async (req, res) => {
//   const { message } = req.body

//   if (!message) {
//     return res.status(400).json({ error: "Message is required" })
//   }

//   try {
//     const response = await fetch("https://api.x.ai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${GROK_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "grok-beta",
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are a helpful assistant for RSIS International, a research publishing organization. Answer questions about manuscript preparation, submission, fees, peer review, indexing, open access policy, collaboration, payment options, and journal selection. Keep answers concise (2-4 sentences), professional, and cite the journal name when appropriate. If unsure, suggest contacting support.",
//           },
//           {
//             role: "user",
//             content: message,
//           },
//         ],
//         temperature: 0.7,
//         max_tokens: 500,
//       }),
//     })

//     if (!response.ok) {
//       throw new Error(`Grok API error: ${response.statusText}`)
//     }

//     const data = await response.json()
//     const assistantMessage = data.choices[0].message.content

//     res.json({ response: assistantMessage })
//   } catch (error) {
//     console.error("Error calling Grok API:", error)
//     res.status(500).json({
//       error: "Failed to get response from AI",
//       details: error.message,
//     })
//   }
// })

// // Journal suggestion endpoint
// app.post("/api/suggest-journal", async (req, res) => {
//   const { title, keywords } = req.body

//   if (!title) {
//     return res.status(400).json({ error: "Title is required" })
//   }

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

//   try {
//     const response = await fetch("https://api.x.ai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${GROK_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "grok-beta",
//         messages: [
//           {
//             role: "system",
//             content: `You are a journal recommendation assistant. Based on the paper title and keywords, recommend one of these RSIS journals:
// ${journals.map((j) => `- ${j.name} (${j.abbr}): ${j.description}`).join("\n")}

// Respond in JSON format: {"journalAbbr": "ABBR", "confidence": "high|medium|low", "reason": "brief explanation"}`,
//           },
//           {
//             role: "user",
//             content: `Paper title: "${title}"${keywords ? `\nKeywords: ${keywords}` : ""}`,
//           },
//         ],
//         temperature: 0.5,
//         max_tokens: 200,
//       }),
//     })

//     if (!response.ok) {
//       throw new Error(`Grok API error: ${response.statusText}`)
//     }

//     const data = await response.json()
//     const responseText = data.choices[0].message.content

//     // Parse JSON from response
//     const jsonMatch = responseText.match(/\{[\s\S]*\}/)
//     const recommendation = jsonMatch ? JSON.parse(jsonMatch[0]) : null

//     if (!recommendation) {
//       return res.json({
//         journal: journals[0],
//         confidence: "medium",
//         reason: "Based on your input, this journal may be a good fit.",
//       })
//     }

//     const journal = journals.find((j) => j.abbr === recommendation.journalAbbr) || journals[0]

//     res.json({
//       journal,
//       confidence: recommendation.confidence,
//       reason: recommendation.reason,
//     })
//   } catch (error) {
//     console.error("Error suggesting journal:", error)
//     res.json({
//       journal: journals[0],
//       confidence: "medium",
//       reason: "Based on your input, this journal may be a good fit.",
//     })
//   }
// })

// // Support ticket endpoint
// app.post("/api/support", async (req, res) => {
//   const { name, email, subject, message } = req.body

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ error: "All fields are required" })
//   }

//   // In a real app, save to database
//   console.log("Support ticket received:", { name, email, subject, message })

//   res.json({ success: true, message: "Support ticket submitted successfully" })
// })

// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
//   console.log(`RSIS Assistant server running on port ${PORT}`)
// })
