import React from "react";

function Nav(props) {
  const {
    resumeSelected,
    setResumeSelected,
    contactSelected,
    setContactSelected,
    portfolioselected,
    setPortfolioSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <h2>Nancy Wang</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span
              data-testid="about"
              onClick={() => {
                setContactSelected(false);
                setPortfolioSelected(false);
                setResumeSelected(false);
              }}
            >
              About me
            </span>
          </li>
          <li className={`mx-2 ${contactSelected && "navActive"}`}>
            <span
              onClick={() => {
                setContactSelected(true);
                setPortfolioSelected(false);
                setResumeSelected(false);
              }}
            >
              Contact
            </span>
          </li>
          <li className={`mx-2 ${portfolioselected && "navActive"}`}>
            <span
              onClick={() => {
                setPortfolioSelected(true);
                setContactSelected(false);
                setResumeSelected(false);
              }}
            >
              Portfolio
            </span>
          </li>
          <li className={`mx-2 ${resumeSelected && "navActive"}`}>
            <span
              onClick={() => {
                setResumeSelected(true);
                setContactSelected(false);
                setPortfolioSelected(false);
              }}
            >
              Resume
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
