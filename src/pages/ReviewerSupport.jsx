import CardPageLayout from "../components/CardPageLayout"

function ReviewerSupport() {
  const questions = [
    "How can I become a reviewer?",
    "What are the benefits of being a reviewer?",
    "Do I receive a reviewer certificate?",
    "Can I enjoy discounts on APC?",
    "How do I make a live reviewer profile on the website?",
  ]

  return <CardPageLayout title="Reviewer Support" questions={questions} />
}

export default ReviewerSupport
