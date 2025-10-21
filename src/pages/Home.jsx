import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const cards = [
    { title: "Author Support", path: "/author-support", icon: "✍️" },
    { title: "Reviewer Support", path: "/reviewer-support", icon: "🔍" },
    { title: "Open Access", path: "/open-access", icon: "🔓" },
    { title: "Payment", path: "/payment", icon: "💳" },
    { title: "Collaboration", path: "/collaboration", icon: "🤝" },
    { title: "Find a Journal", path: "/find-journal", icon: "📚" },
    { title: "Jobs", path: "/jobs", icon: "💼" },
    { title: "Open Journal System", path: "/ojs", icon: "📰" },
    { title: "About Us", path: "/about-us", icon: "ℹ️" },
    { title: "Support", path: "/support", icon: "🆘" },
  ];

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to RSIS International</h1>
          <p className="hero-subtitle">Your gateway to research excellence and publication support</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for journals or services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              aria-label="Search services"
            />
          </div>
        </div>
      </section>
      <div className="cards-section">
        <div className="cards-grid">
          {filteredCards.map((card, index) => (
            <Link key={card.path} to={card.path} className="card-link">
              <div className={`card ${index}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="card-icon">{card.icon}</span>
                <span className="card-title">{card.title}</span>
              </div>
            </Link>
          ))}
          {filteredCards.length === 0 && searchTerm && (
            <p className="no-results">No services found. Try another search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;


// import { Link } from "react-router-dom"
// import "./Home.css"

// function Home() {
//   const cards = [
//     { title: "Author Support", path: "/author-support" },
//     { title: "Reviewer Support", path: "/reviewer-support" },
//     { title: "Open Access", path: "/open-access" },
//     { title: "Payment", path: "/payment" },
//     { title: "Collaboration", path: "/collaboration" },
//     { title: "Find a Journal", path: "/find-journal" },
//     { title: "Jobs", path: "/jobs" },
//     { title: "Open Journal System", path: "/ojs" },
//     { title: "About Us", path: "/about-us" },
//     { title: "Support", path: "/support" },
//   ]

//   return (
//     <div className="home">
//       <div className="home-header">
//         <h1>Welcome to RSIS International</h1>
//         <p>Your gateway to research excellence and publication support</p>
//       </div>
//       <div className="cards-grid">
//         {cards.map((card) => (
//           <Link key={card.path} to={card.path} className="card-link">
//             <div className="card">
//               <span className="card-title">{card.title}</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home
