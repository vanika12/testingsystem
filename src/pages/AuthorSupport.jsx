import CardPageLayout from "../components/CardPageLayout"

function AuthorSupport() {
  const questions = [
    "How should I prepare my manuscript to meet RSIS guidelines?",
    "How do I submit my paper?",
    "What fees are associated with submission or publication?",
    "What are the next steps after acceptance?",
    "How do I request corrections or updates post-publication?",
    "Which databases index RSIS publications?",
    "How does the peer review process work here?",
  ]

  return <CardPageLayout title="Author Support" questions={questions} />
}

export default AuthorSupport
