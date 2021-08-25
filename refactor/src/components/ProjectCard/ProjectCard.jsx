import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ project, id }) => {
  const { name, media_url } = project;
  const cardStyle = { backgroundImage: `url(${media_url})` };
  return (
    <Link to={`/project/${id}`} className="project-card" style={cardStyle}>
      <h3>{name}</h3>
    </Link>
  );
};

export default ProjectCard;
