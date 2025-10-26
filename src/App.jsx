import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import AuthorSupport from "./pages/AuthorSupport"
import ReviewerSupport from "./pages/ReviewerSupport"
import OpenAccess from "./pages/OpenAccess"
import Payment from "./pages/Payment"
import Collaboration from "./pages/Collaboration"
import FindJournal from "./pages/FindJournal"
import Jobs from "./pages/Jobs"
import OJS from "./pages/OJS"
import AboutUs from "./pages/AboutUs"
import Support from "./pages/Support"

import "./App.css"

function App() {
  return (
    <Router>
        <ScrollToTop/>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/author-support" element={<AuthorSupport />} />
            <Route path="/reviewer-support" element={<ReviewerSupport />} />
            <Route path="/open-access" element={<OpenAccess />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/find-journal" element={<FindJournal />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/ojs" element={<OJS />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
