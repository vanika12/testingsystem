"use client"

import { useState } from "react";
import "./AboutUs.css";

function AboutUs() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      content: "RSIS International is dedicated to advancing research and innovation across multiple disciplines through high-quality peer-reviewed publications and collaborative platforms.",
      icon: "🎯",
      type: "timeline",
    },
    {
      id: "history",
      title: "Our History",
      content: "Founded with a vision to democratize research publishing, RSIS International has grown to become a leading platform for researchers, authors, and reviewers worldwide.",
      icon: "⏳",
      type: "timeline",
    },
    {
      id: "team",
      title: "Our Team",
      content: "Our team comprises experienced editors, researchers, and publishing professionals committed to maintaining the highest standards of academic excellence.",
      icon: "👥",
      type: "team",
    },
    {
      id: "contact",
      title: "Contact Information",
      content: "Reach out for inquiries or support.",
      icon: "📞",
      type: "contact",
    },
   
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const teamMembers = [
    { name: "Dr. Jane Smith", role: "Chief Editor", avatar: "👩‍💼" },
    { name: "Prof. John Doe", role: "Research Director", avatar: "👨‍💼" },
    { name: "Sarah Lee", role: "Publishing Manager", avatar: "👩‍🔬" },
  ];

  return (
    <div className="about-us">
      <section className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">About RSIS International</h1>
          <p className="hero-subtitle">Discover our journey, mission, and commitment to research excellence</p>
        </div>
      </section>

      <div className="about-content">
        {sections.map((section, index) => (
          <div key={section.id} className={`section-wrapper ${section.type} ${expandedSection === section.id ? 'expanded' : ''}`}>
            {section.type === "timeline" ? (
              <>
                <div className="timeline-dot" style={{ top: index === 0 ? '2rem' : '0' }}></div>
                <button
                  className={`timeline-header ${expandedSection === section.id ? "active" : ""}`}
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="section-icon">{section.icon}</span>
                  <span className="section-title">{section.title}</span>
                  <span className="accordion-icon">+</span>
                </button>
                {expandedSection === section.id && (
                  <div className="timeline-content">
                    <p>{section.content}</p>
                  </div>
                )}
                {index < 1 && <div className="timeline-line"></div>}
              </>
            ) : (
              <div className={`card-item ${section.type}`}>
                <button
                  className={`card-header ${expandedSection === section.id ? "active" : ""}`}
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="section-icon">{section.icon}</span>
                  <span className="section-title">{section.title}</span>
                  <span className="accordion-icon">+</span>
                </button>
                {expandedSection === section.id && (
                  <div className="card-content">
                    {section.type === "team" ? (
                      <div className="team-grid">
                        {teamMembers.map((member) => (
                          <div key={member.name} className="team-card">
                            <span className="avatar">{member.avatar}</span>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                          </div>
                        ))}
                      </div>
                    ) : section.type === "contact" ? (
                      <div className="contact-links">
                        <a href="mailto:info@rsis.org">Email: info@rsis.org</a>
                        <a href="tel:+1800RSISINT">Phone: +1-800-RSIS-INT</a>
                        <p>Address: Research & Innovation Hub, Global City</p>
                        <button className="inquiry-btn">Quick Inquiry</button>
                      </div>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;



// "use client"

// import { useState } from "react"
// import "./AboutUs.css"

// function AboutUs() {
//   const [expandedSection, setExpandedSection] = useState(null)

//   const sections = [
//     {
//       id: "mission",
//       title: "Our Mission",
//       content:
//         "RSIS International is dedicated to advancing research and innovation across multiple disciplines through high-quality peer-reviewed publications and collaborative platforms.",
//     },
//     {
//       id: "history",
//       title: "Our History",
//       content:
//         "Founded with a vision to democratize research publishing, RSIS International has grown to become a leading platform for researchers, authors, and reviewers worldwide.",
//     },
//     {
//       id: "team",
//       title: "Our Team",
//       content:
//         "Our team comprises experienced editors, researchers, and publishing professionals committed to maintaining the highest standards of academic excellence.",
//     },
//     {
//       id: "contact",
//       title: "Contact Information",
//       content: "Email: info@rsis.org | Phone: +1-800-RSIS-INT | Address: Research & Innovation Hub, Global City",
//     },
//     {
//       id: "policies",
//       title: "Our Policies",
//       content:
//         "We maintain strict ethical standards, ensure transparency in peer review, and are committed to open access principles and research integrity.",
//     },
//   ]

//   const toggleSection = (id) => {
//     setExpandedSection(expandedSection === id ? null : id)
//   }

//   return (
//     <div className="about-us">
//       <div className="about-header">
//         <h1>About RSIS International</h1>
//         <p>Learn more about our organization, mission, and values</p>
//       </div>

//       <div className="accordion">
//         {sections.map((section) => (
//           <div key={section.id} className="accordion-item">
//             <button
//               className={`accordion-header ${expandedSection === section.id ? "active" : ""}`}
//               onClick={() => toggleSection(section.id)}
//             >
//               <span>{section.title}</span>
//               <span className="accordion-icon">+</span>
//             </button>
//             {expandedSection === section.id && (
//               <div className="accordion-content">
//                 <p>{section.content}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AboutUs
