"use client"

import { useState } from "react"
import PetQuestions from "./PetQuestions"
import ChatPanel from "./ChatPanel"
import "./CardPageLayout.css"

function CardPageLayout({ title, questions }) {
  const [selectedQuestion, setSelectedQuestion] = useState("")

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question)
  }

  return (
    <div className="card-page">
      <div className="card-page-header">
        <h1>{title}</h1>
      </div>
      <div className="card-page-content">
        <div className="questions-column">
          <PetQuestions questions={questions} onSelectQuestion={handleSelectQuestion} />
        </div>
        <div className="chat-column">
          <ChatPanel key={selectedQuestion} initialQuestion={selectedQuestion} />
        </div>
      </div>
    </div>
  )
}

export default CardPageLayout
