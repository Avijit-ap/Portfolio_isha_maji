import Layout from "./component/Layout/Layout"; // Corrected the import to use uppercase
import About from "./pages/About/About";
import Certification from "./pages/Certification/Certification";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Project from "./pages/Project/Project";
import Techstack from "./pages/TechStack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
        <ToastContainer />
        <div className="container">
          <About />
          <Education />
          <WorkExp />
          <Project />
          <Techstack />
          <Certification />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made by 😍Isha &copy; 2024</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
