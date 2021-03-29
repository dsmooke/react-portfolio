import React from "react";

const PortfolioWork = () => (
  <div>
    {/*<!-- !PAGE CONTENT! --></div>*/}
    <main className="w3-main" style={{ marginLeft: 300 + "px" }}>
      {/*<!-- Header -->*/}
      <header id="portfolio">
        <a href="#">
          <img
            src="imgs/Smooke_Headshot.png"
            className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
            id="avatar"
          />
        </a>
        <span
          className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
          onclick="w3_open()"
        >
          <i className="fa fa-bars"></i>
        </span>
        <div className="w3-container">
          <h1>
            <b>My Portfolio</b>
          </h1>
          <div className="w3-section w3-padding-16"></div>
        </div>
      </header>

      {/*<!--Web Development Portfolio-->*/}

      <section className="w3-container">
        <h2 id="web-development">Web Development</h2>
        <div className="w3-section w3-bottombar w3-padding-16"></div>

        {/*<!-- First Photo Grid-->*/}

        <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/refactored-demo.png"
              alt="go-for-launch"
              style="width: 100%"
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Refactored Website: Semantic HTML</b>
              </p>
              <p>
                A refactored website whose source code was modified to improve
                its operation without altering its functionality and to adhere
                to accessibility standards by using Semantic HTML.
                <a
                  href="https://github.com/dsmooke/go-for-launch"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/query_cuisine_pic_1.png"
              alt="github-QueryCuisine"
              style="width: 100%"
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Query Cuisine</b>
              </p>
              <p>
                A simple food app that allows users to search for recipes based
                on ingredients that they have on hand.
                <a
                  href="https://github.com/dsmooke/Query-Cuisine"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
          <div className="w3-third w3-container">
            <img
              src="imgs/bookswap-recs-demo2.png"
              alt="github-BookSwap"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Book Swap</b>
              </p>
              <p>
                An application that generates book recommendations based on the
                user's search and allows a user to save books to a wishlist.
                <a
                  href="https://github.com/dsmooke/super-duper-bookclub"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default PortfolioWork;
