import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Project from "../../components/Project/Project";
import { getProjects } from '../../data/projects';
import './Work.css';
const Work = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    setProjects(getProjects())
  }, []);

  return (
    <Layout>
      <h1>Work</h1>
      <div className="projects-area">
        {projects?.map((project)=>(
          <Project project={project}/>
        ))}
      </div>
    </Layout>
  );
};

export default Work;
