import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioselected, setPortfolioSelected] = useState(false);
  const renderContaint = function () {
    if (resumeSelected) {
      return <Resume />;
    } else if (contactSelected) {
      return <ContactForm />;
    } else if (portfolioselected) {
      return <Portfolio />;
    } else {
      return <About />;
    }
  };

  return (
    <div>
      <Nav
        setResumeSelected={setResumeSelected}
        resumeSelected={resumeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioselected={portfolioselected}
        setPortfolioSelected={setPortfolioSelected}
      ></Nav>
      <main>{renderContaint()}</main>
      <footer>
        <a href="https://github.com" className="exlink">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/" className="exlink">
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://stackoverflow.com/" className="exlink">
          <i class="fab fa-stack-overflow fa-2x"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
