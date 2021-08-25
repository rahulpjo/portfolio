import "./Project.css";

const Project = (props) => {
  const { name, description, github, website, tags } = props.project;
  return (
    <article className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <section className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href={website} target="_blank" rel="noopener noreferrer">
          Site
        </a>
      </section>
      <section className="tags">
        {tags.map((tag) => (
          <span className="tag">#{tag}</span>
        ))}
      </section>
    </article>
  );
};

export default Project;
