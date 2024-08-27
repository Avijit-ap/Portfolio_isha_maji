import React from "react";
import "./Certification.css";
const Certification = () => {
  return (
    <>
      <div className="continer certificate" id="certification">
      
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          MY CERTIFICATE
        </h2>
        <hr />
        <p className="pb-3 text-center">Here are my TOP 3 Certificate</p>
      
        {/* card design */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Codsoft</span>
                <img src="Certificate-1.png" alt="Certificate-1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">JavaScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Web Development</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://drive.google.com/file/d/1nGqM3P4aufJb-TveodXfuOwaDsD3Lsgz/view?usp=drive_link"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Udemy</span>
                <img src="Certificate2.png" alt="Certificate2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Java</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">Java Complete Course</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://drive.google.com/file/d/1CM7NMamYgyH3Q8JtI2FUvn0InsabP6F1/view?usp=drive_link"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Udemy</span>
                <img src="Certificate2.png" alt="Certificate2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">HTML</span>
                <span className="card-detail-badge">CSS</span>
                <span className="card-detail-badge">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">HTML,CSS AND JAVASCRIPT</h6>
                </div>
                <a
                  className="ad-btn"
                  href="https://drive.google.com/file/d/1FdzufcRT3Gj0Fqojb6LLTGzm934F1JCm/view?usp=drive_link"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
