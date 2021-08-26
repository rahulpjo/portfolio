import { Link } from "react-router-dom";
import "./Project.css";

const Project = ({ project, id }) => {
  const { name, description, github, website, tags, media_url } = project;

  return (
    <article className="project">
      <div className="project-media">
        <img src={media_url} alt={name} />
      </div>
      <div className="project-text">
        <Link to={`/project/${id}`}>
          <h2 className="orange">{name}</h2>
        </Link>
        <p>{description}</p>
        {github || website ? (
          <div className="links">
            {github ? (
              <a href={github} target="_blank" rel="noopener noreferrer">
                Github
              </a>
            ) : (
              <></>
            )}
            {website ? (
              <a href={website} target="_blank" rel="noopener noreferrer">
                Site Link
              </a>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="tags">
          {tags?.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Project;
