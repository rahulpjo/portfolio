import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./About.css";

const About = () => {
  const [showResume, setShowResume] = useState(false);
  const handleClick = () => {
    setShowResume(!showResume);
  };
  return (
    <Layout>
      <h1>About</h1>
      <article className="profile">
        <section className="image">
          <img
            src="https://res.cloudinary.com/dszox5xnw/image/upload/v1627248939/Portfolio/Headshot_orekce.jpg"
            alt="Rahul Joshi headshot"
          />
        </section>
        <section className="text">
          <h2>Hi, I'm Rahul Joshi!</h2>
          <p>
            I'm a student at University of Southern California studying
            Electrical Engineering! While I do love studying electrical
            engineering, I have a myriad of other interests, and recently, I've
            realized that my passions lie in web/app development and art! I have
            internship experience in DevOps, app development (mostly using
            Python), and I'm currently a Teaching Assistant at USC for a camp
            called CS@SC, where I teach kids about web development and Scratch.
            The programming languages I'm familiar with are HTML/CSS,
            JavaScript, C++, Python, and Verilog, and I'm familiar with
            frameworks like Bootstrap, React, and Express. I'm currently in a
            Full Stack Development course at USC, and I'm also taking multiple
            Udemy courses (ex. one that also teaches Full Stack Development, one
            that teaches React in depth, and one that teaches implementation of
            the MERN stack).
          </p>
          <div className="links">
            <button onClick={handleClick}>MY RESUME</button>
            <Link to="/work">SEE MY PAST WORK</Link>
          </div>
          <div className={`resume${showResume ? "" : " hide"}`}>
            <button className="show-button" onClick={handleClick}>
              Close
            </button>
            <iframe
              title="resume"
              src="https://drive.google.com/file/d/1tnpbonE8fgz2a0LIMqGZtoV-E0NdNSTJ/preview"
              width="640"
              height="830"
              allow="autoplay"
            ></iframe>
          </div>
        </section>
      </article>
      <article className="policy"></article>
    </Layout>
  );
};

export default About;
