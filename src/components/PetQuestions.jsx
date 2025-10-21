"use client"

import "./PetQuestions.css"

function PetQuestions({ questions, onSelectQuestion }) {
  return (
    <div className="pet-questions">
      <h3>Suggested Questions</h3>
      <div className="questions-list">
        {questions.map((question, idx) => (
          <button key={idx} className="question-btn" onClick={() => onSelectQuestion(question)} title={question}>
            {question}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PetQuestions
