import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { getProjects } from "../../data/projects";
import "./Home.css";
const Home = () => {
  const [topProjects, setTopProjects] = useState([]);
  useEffect(() => {
    const data = getProjects();
    setTopProjects(data.slice(0, 3));
  }, []);
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "inertia",
        default: { duration: 1 },
        staggerChildren: 0.5,
      }}
      exit={{ opacity: 0 }}
    >
      <section className="home-heading">
        <img className="home-img" src="img/LOGO.svg" alt="logo" />
        <div className="home-text">
          <h1>
            <span className="orange">R</span>ahul{" "}
            <span className="orange">J</span>oshi
          </h1>
          <h4>AMBITION. HUMILITY. INTENTION.</h4>
        </div>
      </section>
      <section className="home-projects-section">
        <h2 className="orange">
          Check out some of my most recent works below:
        </h2>
        <div className="top-projects">
          {topProjects?.map((project, index) => (
            <ProjectCard project={project} key={index} id={index + 1} />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
