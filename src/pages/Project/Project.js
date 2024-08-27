import React from "react";
import "./Project.css";
import RubberBand from "react-reveal/RubberBand";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            TOP RECENT PROJECTS
          </h2>
          <hr />
          <p className="pb-3 text-center">Here are my TOP 3 projects</p>
        </RubberBand>
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src="Project1.jpg" alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">ReactJs</span>
                <span className="card-detail-badge">Material UI</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Mortgage Calculator</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://ishsmaji.github.io/mortgage-calculator/"
                >
                  View
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/ishsmaji/mortgage-calculator"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src="Project2.jpg" alt="project2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Spotify Clone</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://ishsmaji.github.io/spotify_Clone/"
                >
                  View
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/ishsmaji/spotify_Clone"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Frontend</span>
                <img src="Project3.jpg" alt="project3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Weather App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://ishsmaji.github.io/Weather_App/"
                >
                  View
                </a>
                <a
                  className="ad-btn"
                  href="https://github.com/ishsmaji/Weather_App"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
