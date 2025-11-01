// RSIS International Knowledge Base
// This file contains all RSIS policies, FAQs, and information for the chatbot

// RSIS International Knowledge Base
// Contains all RSIS journals with clearly defined keywords for classification

export const rsisKnowledgeBase = {
  journals: [
    {
      name: "International Journal of Research and Innovation in Social Science",
      abbr: "IJRISS",
      focus: "Social science research, innovation, policy studies",
      scope:
        "Publishes original research in sociology, psychology, economics, political science, education, and related fields.",
      keywords: [
        "sociology",
        "psychology",
        "economics",
        "education",
        "social",
        "policy",
        "society",
        "behavior",
        "culture",
        "humanities",
      ],
    },
    {
      name: "International Journal of Research and Scientific Innovation",
      abbr: "IJRSI",
      focus: "Scientific research across all disciplines",
      scope:
        "Covers physics, chemistry, biology, mathematics, computer science, and interdisciplinary scientific research.",
      keywords: [
        "science",
        "scientific",
        "innovation",
        "biology",
        "chemistry",
        "physics",
        "mathematics",
        "data",
        "quantum",
        "nanotechnology",
        "artificial intelligence",
        "machine learning",
        "research",
      ],
    },
    {
      name: "International Journal of Research and Innovation in Applied Science",
      abbr: "IJRIAS",
      focus: "Applied science and practical research",
      scope:
        "Focuses on engineering applications, technology transfer, industrial research, and practical innovations.",
      keywords: [
        "applied",
        "implementation",
        "practical",
        "experiment",
        "industrial",
        "agriculture",
        "chemical",
        "materials",
        "environmental",
        "sensor",
        "battery",
        "automation",
        "testing",
      ],
    },
    {
      name: "International Journal of Latest Technology in Engineering, Management & Applied Science",
      abbr: "IJLTEMAS",
      focus: "Latest technology, engineering, management",
      scope:
        "Covers cutting-edge technology, engineering innovations, software, management practices, and business applications.",
      keywords: [
        "engineering",
        "mechanical",
        "civil",
        "electrical",
        "technology",
        "management",
        "software",
        "robotics",
        "industrial",
        "automation",
        "hardware",
        "manufacturing",
        "ai",
        "iot",
        "blockchain",
        "supply chain",
      ],
    },
  ],

 manuscriptPreparation: {
  question: "How should I prepare my manuscript to meet RSIS guidelines?",
  answer: `Dear Author,

Greetings!!!

To ensure a smooth submission process and that your manuscript meets our standards, please follow these guidelines:

https://rsisinternational.org/journals/ijriss/author-style-guidelines/

If you have any questions or need further assistance, please do not hesitate to contact us.

Best regards,
Editorial Office`,

},

  submission: {
   question: "How do I submit my paper?",
   answer:`Thank you for your interest in publishing with RSIS International.
You can submit your paper directly through our online submission portal at
https://rsisinternational.org/find-journal/ `,
  },

   peerReview: {
   question: "How does the peer review process work here?",
   answer:`At RSIS International, all submitted manuscripts undergo a double-blind peer review process to ensure quality and originality:
         
         Initial Screening: The editorial team reviews the paper for scope, formatting, and plagiarism.
         
         Assignment to Reviewers: The manuscript is then sent to at least two qualified peer reviewers who are experts in the relevant field.

         Double-Blind Review: Both the reviewers and authors remain anonymous during the evaluation process.

         Reviewer Feedback: Reviewers assess the paper’s originality, methodology, clarity, and contribution to the field, providing constructive comments.

         Decision Communication: Based on the reviewers’ reports, the editor makes a decision—Accept, Minor Revision, Major Revision, or Reject—and communicates it to the author.

         Revision & Final Acceptance: Authors revise and resubmit (if required). Once the revised version meets the reviewers’ and editor’s expectations, it is accepted for publication.`,
  },

  openAccess: {
    policy: "All RSIS journals are open access. Published articles are freely available to readers worldwide.",
    license: "Articles are published under Creative Commons Attribution License (CC-BY 4.0).",
    benefits: "Increased visibility, citations, and impact. No reader subscription fees.",
    archiving: "Articles are archived in PubMed Central, Google Scholar, and institutional repositories.",
  },

  fees: {
    question: "What fees are associated with submission or publication?",
  answer:`For RSIS International, here are the relevant fee details:
          Once your paper is accepted for publication, a publication/registration fee of USD 30 is stated for most articles. 
          Additional services: A DOI charge of USD 5 is listed (Optional)`,
  },

  indexing: {
    databases: "RSIS journals are indexed in PubMed, Google Scholar, DOAJ, and major academic databases.",
    impact: "Impact factors available on journal websites. H-index tracked annually.",
    visibility: "Articles appear in search results within 2-4 weeks of publication.",
    doi: "Each article receives a unique DOI for permanent identification and citation.",
  },

  collaboration: {
    multiAuthor: "Multiple authors welcome. Clearly indicate corresponding author and author contributions.",
    international: "RSIS encourages international collaboration and publishes research from authors worldwide.",
    institutions: "Institutional affiliations should be clearly listed for all authors.",
    ethics: "All authors must agree to the manuscript and declare any conflicts of interest.",
  },

  paymentOptions: {
    creditCard: "Visa, MasterCard, American Express accepted online.",
    bankTransfer: "Direct bank transfer available. Contact finance@rsis.org for details.",
    paypal: "PayPal payments accepted for all fees.",
    invoice: "Invoices issued upon request for institutional payments.",
    currency: "All fees in USD. Currency conversion handled by payment processor.",
  },

  journalSelection: {
    guidance: "Choose journal based on research focus and scope. Use our journal finder tool.",
    ijriss: "Best for social science, humanities, and policy research.",
    ijrsi: "Best for pure science and fundamental research across disciplines.",
    ijrias: "Best for applied science, engineering, and technology research.",
    ijltemas: "Best for latest technology, management innovation, and business applications.",
  },

  support: {
    email: "support@rsis.org",
    phone: "+1-800-RSIS-123",
    hours: "Monday-Friday, 9 AM - 5 PM EST",
    response: "We respond to inquiries within 24 business hours.",
    faq: "Visit www.rsis.org/faq for common questions.",
  },

  commonQuestions: [
    {
      question: "How long does the review process take?",
      answer:
        "Initial screening takes 2-4 weeks. Peer review typically takes 4-8 weeks. Total time from submission to decision is usually 6-12 weeks.",
    },
    {
      question: "What are the next steps after acceptance?",
      answer:
        `Thank you for your query. Once your paper is accepted for publication, the next steps are as follows:
         Acceptance Notification: You will receive an official acceptance email from RSIS International.
         Publication Fee Payment: Details for the publication/registration fee (USD 30) will be shared.
         Author Declaration Form: You will be asked to complete and submit the author declaration form to confirm originality and authorship.
         Final Formatting & Proofing: Our editorial team will format your paper according to journal standards and share the final proof for your confirmation.
         Online Publication: After confirmation, your paper will be published online in the upcoming issue, typically within one month from the acceptance date.
         Publication Certificate: A soft copy of the publication certificate will be emailed to you.`,
    },
    {
      question: "How do I request corrections or updates post-publication?",
      answer: `If you wish to request corrections or updates to your paper after publication, please email us at editorialoffice@rsis-international.org with the following details:
               Paper title
               Journal name
               Volume and issue number
               Exact correction(s) required
               Our editorial team will review your request. Minor corrections (such as typographical or affiliation updates) are handled promptly, while major revisions may require an official corrigendum or updated version to maintain the integrity of the published record.`,
    },
   
     {
      question: " Which databases index RSIS publications?",
      answer: `Thank you for your query regarding the indexing and abstracting of our journal.
               You may view the complete list of databases and platforms
          🔗 https://rsisinternational.org/journals/ijriss/indexing-abstracting/
          
            Please feel free to go through the page for detailed information on all indexing services and scholarly databases associated with the journal.`,
    },
    {
      question: "What is the acceptance rate?",
      answer: "Acceptance rates vary by journal (15-30%). IJRISS: 20%, IJRSI: 18%, IJRIAS: 22%, IJLTEMAS: 25%.",
    },
    {
      question: "Can I submit to multiple journals?",
      answer:
        "No. Manuscripts must be submitted to only one RSIS journal at a time. Simultaneous submissions are not permitted.",
    },
    {
      question: "What if my manuscript is rejected?",
      answer:
        "You can appeal with substantial new evidence or submit to another RSIS journal if appropriate. Rejection feedback is provided to help improve your work.",
    },
    {
      question: "Are there fees for open access?",
      answer: "No. All RSIS journals are open access at no cost to readers. Authors pay publication fees, not readers.",
    },
    {
      question: "How do I track my manuscript?",
      answer: "Log into your account on www.rsis.org/submit to track your manuscript status in real-time.",
    },
    {
      question: "Can I get a fee waiver?",
      answer:
        "Yes. Authors from low-income countries can request fee waivers. Contact support@rsis.org with your request and justification.",
    },
    {
      question: "What citation format should I use?",
      answer: "Use Harvard or APA citation style. Ensure consistency throughout your manuscript.",
    },
  ],
}

export const formatKnowledgeBase = () => {
  let formatted = "RSIS INTERNATIONAL KNOWLEDGE BASE:\n\n"

  formatted += "JOURNALS:\n"
  rsisKnowledgeBase.journals.forEach((j) => {
    formatted += `- ${j.name} (${j.abbr}): ${j.scope}\n`
  })

  formatted += "\nMANUSCRIPT PREPARATION:\n"
  Object.entries(rsisKnowledgeBase.manuscriptPreparation).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nSUBMISSION PROCESS:\n"
  Object.entries(rsisKnowledgeBase.submission).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nPEER REVIEW:\n"
  Object.entries(rsisKnowledgeBase.peerReview).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nOPEN ACCESS POLICY:\n"
  Object.entries(rsisKnowledgeBase.openAccess).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nFEES:\n"
  Object.entries(rsisKnowledgeBase.fees).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nINDEXING:\n"
  Object.entries(rsisKnowledgeBase.indexing).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nCOLLABORATION:\n"
  Object.entries(rsisKnowledgeBase.collaboration).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nPAYMENT OPTIONS:\n"
  Object.entries(rsisKnowledgeBase.paymentOptions).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })

  formatted += "\nJOURNAL SELECTION GUIDE:\n"
  Object.entries(rsisKnowledgeBase.journalSelection).forEach(([key, value]) => {
    formatted += `${key}: ${value}\n`
  })
   formatted += "\nCOMMON QUESTIONS:\n"
  rsisKnowledgeBase.commonQuestions.forEach((item) => {
    formatted += `Q: ${item.question}\nA: ${item.answer}\n\n`
  })

  return formatted
}


//   peerReview: {
//     process: "All manuscripts undergo double-blind peer review by at least 2 experts in the field.",
//     timeline: "Peer review typically takes 4-8 weeks.",
//     criteria: "Reviewers assess originality, methodology, significance, clarity, and contribution to the field.",
//     decisions: "Possible outcomes: Accept, Minor Revisions, Major Revisions, or Reject.",
//     appeals: "Authors can appeal decisions with substantial new evidence or corrections.",
//   },

//   openAccess: {
//     policy: "All RSIS journals are open access. Published articles are freely available to readers worldwide.",
//     license: "Articles are published under Creative Commons Attribution License (CC-BY 4.0).",
//     benefits: "Increased visibility, citations, and impact. No reader subscription fees.",
//     archiving: "Articles are archived in PubMed Central, Google Scholar, and institutional repositories.",
//   },

//   fees: {
//     submission: "Free",
//     processing: "$50 USD (non-refundable)",
//     publication: "$200-500 USD depending on journal and article length",
//     waiver: "Fee waivers available for authors from low-income countries. Contact support@rsis.org",
//     payment: "Accepted: Credit card, bank transfer, PayPal. Payment required upon acceptance.",
//   },

//   indexing: {
//     databases: "RSIS journals are indexed in PubMed, Google Scholar, DOAJ, and major academic databases.",
//     impact: "Impact factors available on journal websites. H-index tracked annually.",
//     visibility: "Articles appear in search results within 2-4 weeks of publication.",
//     doi: "Each article receives a unique DOI for permanent identification and citation.",
//   },

//   collaboration: {
//     multiAuthor: "Multiple authors welcome. Clearly indicate corresponding author and author contributions.",
//     international: "RSIS encourages international collaboration and publishes research from authors worldwide.",
//     institutions: "Institutional affiliations should be clearly listed for all authors.",
//     ethics: "All authors must agree to the manuscript and declare any conflicts of interest.",
//   },

//   paymentOptions: {
//     creditCard: "Visa, MasterCard, American Express accepted online.",
//     bankTransfer: "Direct bank transfer available. Contact finance@rsis.org for details.",
//     paypal: "PayPal payments accepted for all fees.",
//     invoice: "Invoices issued upon request for institutional payments.",
//     currency: "All fees in USD. Currency conversion handled by payment processor.",
//   },

//   journalSelection: {
//     guidance: "Choose journal based on research focus and scope. Use our journal finder tool.",
//     ijriss: "Best for social science, humanities, and policy research.",
//     ijrsi: "Best for pure science and fundamental research across disciplines.",
//     ijrias: "Best for applied science, engineering, and technology research.",
//     ijltemas: "Best for latest technology, management innovation, and business applications.",
//   },

//   support: {
//     email: "support@rsis.org",
//     phone: "+1-800-RSIS-123",
//     hours: "Monday-Friday, 9 AM - 5 PM EST",
//     response: "We respond to inquiries within 24 business hours.",
//     faq: "Visit www.rsis.org/faq for common questions.",
//   },

//   commonQuestions: [
//     {
//       question: "How long does the review process take?",
//       answer:
//         "Initial screening takes 2-4 weeks. Peer review typically takes 4-8 weeks. Total time from submission to decision is usually 6-12 weeks.",
//     },
//     {
//       question: "What is the acceptance rate?",
//       answer: "Acceptance rates vary by journal (15-30%). IJRISS: 20%, IJRSI: 18%, IJRIAS: 22%, IJLTEMAS: 25%.",
//     },
//     {
//       question: "Can I submit to multiple journals?",
//       answer:
//         "No. Manuscripts must be submitted to only one RSIS journal at a time. Simultaneous submissions are not permitted.",
//     },
//     {
//       question: "What if my manuscript is rejected?",
//       answer:
//         "You can appeal with substantial new evidence or submit to another RSIS journal if appropriate. Rejection feedback is provided to help improve your work.",
//     },
//     {
//       question: "Are there fees for open access?",
//       answer: "No. All RSIS journals are open access at no cost to readers. Authors pay publication fees, not readers.",
//     },
//     {
//       question: "How do I track my manuscript?",
//       answer: "Log into your account on www.rsis.org/submit to track your manuscript status in real-time.",
//     },
//     {
//       question: "Can I get a fee waiver?",
//       answer:
//         "Yes. Authors from low-income countries can request fee waivers. Contact support@rsis.org with your request and justification.",
//     },
//     {
//       question: "What citation format should I use?",
//       answer: "Use Harvard or APA citation style. Ensure consistency throughout your manuscript.",
//     },
//   ],
// }

// export const formatKnowledgeBase = () => {
//   let formatted = "RSIS INTERNATIONAL KNOWLEDGE BASE:\n\n"

//   formatted += "JOURNALS:\n"
//   rsisKnowledgeBase.journals.forEach((j) => {
//     formatted += `- ${j.name} (${j.abbr}): ${j.scope}\n`
//   })

//   formatted += "\nMANUSCRIPT PREPARATION:\n"
//   Object.entries(rsisKnowledgeBase.manuscriptPreparation).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nSUBMISSION PROCESS:\n"
//   Object.entries(rsisKnowledgeBase.submission).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nPEER REVIEW:\n"
//   Object.entries(rsisKnowledgeBase.peerReview).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nOPEN ACCESS POLICY:\n"
//   Object.entries(rsisKnowledgeBase.openAccess).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nFEES:\n"
//   Object.entries(rsisKnowledgeBase.fees).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nINDEXING:\n"
//   Object.entries(rsisKnowledgeBase.indexing).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nCOLLABORATION:\n"
//   Object.entries(rsisKnowledgeBase.collaboration).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nPAYMENT OPTIONS:\n"
//   Object.entries(rsisKnowledgeBase.paymentOptions).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   formatted += "\nJOURNAL SELECTION GUIDE:\n"
//   Object.entries(rsisKnowledgeBase.journalSelection).forEach(([key, value]) => {
//     formatted += `${key}: ${value}\n`
//   })

//   return formatted
// }
