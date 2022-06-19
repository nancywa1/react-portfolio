import React from "react";
import projectPic from "../../assets/images/hero-bg.jpg";
import photoPort from "../../assets/images/photosnap.jpg";
function Portfolio() {
  return (
    <section className="my-5">
      <h1>Portfolio</h1>
      <div className="details">
        <article className="work-details content_img">
          <img src={projectPic} className="my-2" alt="Run Buddy" />
          <div>
            <a href="https://nancywa1.github.io/run-buddy/">Run Buddy </a>
            <a href="https://github.com/nancywa1/run-buddy" className="exlink">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
        </article>
        <article className="work-details content_img">
          <img src={photoPort} className="my-2" alt="Run Buddy" />
          <div>
            <a href="https://nancywa1.github.io/photo-port/">Photo-port </a>
            <a href="https://github.com/nancywa1/shop-shop" className="exlink">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
