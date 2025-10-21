import CardPageLayout from "../components/CardPageLayout"

function OpenAccess() {
  const questions = [
    "What is RSIS open access policy?",
    "How is open access distribution handled?",
    "Which licenses are used for OA publications?",
  ]

  return <CardPageLayout title="Open Access" questions={questions} />
}

export default OpenAccess
