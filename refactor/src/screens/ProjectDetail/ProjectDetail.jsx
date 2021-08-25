import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Project from "../../components/Project/Project";
import { getProjects } from "../../data/projects";
import { useHistory, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const data = getProjects();
    setProject(data[id - 1]);
  }, [id]);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "inertia",
        default: { duration: 1 },
        staggerChildren: 0.5,
      }}
      exit={{ opacity: 0 }}
    >
      <Project project={project} key={id - 1} id={id} />
      <button onClick={handleClick} className="detail-back-button">
        <BiArrowBack />
        &nbsp;Go Back
      </button>
    </motion.div>
  );
};

export default ProjectDetail;
