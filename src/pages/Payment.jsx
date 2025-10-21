import CardPageLayout from "../components/CardPageLayout"

function Payment() {
  const questions = [
    "What payment options are available for authors?",
    "Do you support country-specific payment methods?",
    "Where can I view fees and invoices?",
    "Is there an internet banking / card option?",
  ]

  return <CardPageLayout title="Payment" questions={questions} />
}

export default Payment
