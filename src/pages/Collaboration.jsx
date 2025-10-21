import CardPageLayout from "../components/CardPageLayout"

function Collaboration() {
  const questions = [
    "How to apply for special issue collaboration?",
    "How to propose a conference partnership?",
    "How to collaborate on publications?",
  ]

  return <CardPageLayout title="Collaboration" questions={questions} />
}

export default Collaboration
