import React from "react";
import "./Home.css";
import { useTheme } from "../../context/ThemeContext";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi🙋🏻‍♀ I'm</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Isha",
                    "Software Developer!",
                    "Frontend Developer!",
                    "Web Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <button className="btn btn-hire">Hire me</button>
              <a
                className="btn btn-cv"
                href="https://drive.google.com/file/d/15ILd5MA7xW5cxUJrEYaFiW86Quv_szgh/view?usp=drive_link"
                target="_blank"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
