import CardPageLayout from "../components/CardPageLayout"

function Jobs() {
  const questions = ["How to join as a reviewer?", "How to join as an author/contributor?", "What open roles exist?"]

  return <CardPageLayout title="Jobs" questions={questions} />
}

export default Jobs
