import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import { getProjects } from "../../data/projects";
import "./Work.css";

const Work = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const data = getProjects();
    setProjects(data);
  }, []);

  return (
    <motion.div
      className="work"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "inertia",
        default: { duration: 1 },
      }}
      exit={{ opacity: 0 }}
    >
      <section className="project-section">
        {projects?.length ? (
          projects.map((project, index) => (
            <Project project={project} key={index} id={index + 1} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </section>
    </motion.div>
  );
};

export default Work;
