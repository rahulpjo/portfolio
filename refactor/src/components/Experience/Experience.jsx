import "./Experience.css";

const Experience = ({ experience }) => {
  const { role, company, type, dates, description } = experience;
  const jobduties = description.split("\n");
  return (
    <article className="experience">
      <h3>
        <span className="orange">{role}</span> {company}
      </h3>
      <h6>
        {type} • {dates}
      </h6>
      {jobduties.map((duty) => (
        <p>{duty}</p>
      ))}
    </article>
  );
};

export default Experience;
