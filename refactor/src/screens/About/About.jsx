import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "inertia",
        default: { duration: 1 },
        staggerChildren: 0.5,
      }}
      exit={{ opacity: 0 }}
    >
      <section className="about-intro">
        <img
          src="img/Headshot.jpg"
          className="about-img"
          alt="Rahul Joshi headshot"
        />
        <div className="about-text">
          <h2 className="orange">Hi, I'm Rahul Joshi!</h2>
          <p>
            I’m a full-stack engineer who is in his element when he can
            creatively solve problems. I’m a passionate and precise learner with
            a degree in electrical engineering, who is motivated by innovation,
            building/ strengthening connections, and social good. I'm currently
            looking for a full-time position as a full stack, front-end, or
            back-end developer/engineer. I have internship experience in DevOps,
            app development (mostly using Python), and I was more recently a
            Teaching Assistant at USC for a camp called CS@SC, where I taught
            kids about web development and Scratch. I also worked for CS@SC as
            their content designer and social media manager, so I also have
            experience in design. The programming languages I'm familiar with
            are JavaScript, Python, HTML/CSS, SQL, C++, and Verilog, and I'm
            familiar with frameworks like Bootstrap, React.js, and Express.js.
            Apart from the Software Engineering Immersive that I recently
            completed with General Assembly, I've also taken classes at USC that
            deal with software engineering, such as Data Structures and
            Object-Oriented Programming, Discrete Methods for Computer Science,
            and Web Architecture. I've also completed an online course from
            Designlab in UI/UX Design, which I apply to my work in front-end
            development. With design, I'm most familiar with Adobe Illustration,
            Adobe XD, and Sketch. Overall, I am a student at heart and aim to
            never stop learning no matter what discipline, so that I can
            constantly grow.
          </p>
          <div className="buttons">
            <Link to="/resume">MY RESUME</Link>
            <Link to="/work">SEE MY PAST WORK</Link>
          </div>
        </div>
      </section>
      <hr />
      <section className="about-policy">
        <h2 className="orange">Zero Tolerance Policy</h2>
        <h3>Policy Guidelines</h3>
        <div className="about-policy-section">
          <p>
            Rahul Joshi and all his derivative organizations prohibit sexual
            harassment (which includes, but is not limited to, harassment based
            on gender or transgender status), as well as harassment based on
            race, color, national origin, ancestry, religion, creed, physical or
            mental disability, medical condition, and any other basis protected
            by federal, state or local law. He is committed to providing a safe
            environment by maintaining strict policies prohibiting unlawful
            discrimination and harassment of any kind. Working alongside Rahul
            comes with the expectation to comply with said policies; any such
            discrimination or harassment in violation of these policies will be
            treated as a serious offense and will result in appropriate
            disciplinary action, which will include termination from any and all
            organizations created, led, or managed by Rahul Joshi.
          </p>
        </div>
        <h3>Describing Harassment</h3>
        <div className="about-policy-section">
          <p>Sexual and unlawful harassment includes, but is not limited to:</p>
          <ul>
            <li>
              Verbal (spoken or written) conduct, such as derogatory comments,
              slurs, jokes or unwanted sexual advances, invitations or comments.
            </li>
            <li>
              Visual conduct, such as derogatory gestures, posters, cartoons,
              drawings, e-mail, text messages or social media.
            </li>
            <li>
              Physical conduct, such as assault, blocking normal movement, or
              interference with participation directed at another member because
              of the member’s sex or other protected characteristic.
            </li>
            <li>
              Use of computers, including the Internet, e-mail, or social media,
              to transmit, communicate or receive sexually suggestive,
              pornographic or sexually explicit pictures, messages or material
              or any other unlawful harassment.
            </li>
            <li>
              Retaliation for having reported unlawful harassment. Sexually
              harassing conduct can be committed by a person of any gender
              identification.
            </li>
          </ul>
        </div>
        <h3>Actions Taken</h3>
        <div className="about-policy-section">
          <p>
            Rahul does not consider conduct in violation of these policies to be
            within the course and scope of his organizations. If he determines
            that unlawful harassment has occurred, effective remedial action
            will be taken appropriate to the circumstances. Rahul will advise
            all concerned persons of the results of the investigation on a
            need-to-know-basis. In addition, he does not condone retaliation
            against any other member for cooperating in an investigation or for
            making a truthful complaint regarding discrimination or harassment.
            Further, there will be no retaliation against any member for filing
            a truthful complaint of discrimination or harassment and Rahul will
            not tolerate or permit retaliation by any member of his
            organizations. Members who feel they have been retaliated against
            should follow the written complaint procedure established for the
            organization. If an incident of retaliation is substantiated,
            appropriate disciplinary action, including termination, will be
            taken.
          </p>
          <br />
          <p>
            Rahul will continue to hold a high standard for anyone and everyone
            he works with, but that standard most importantly pertains to social
            and cultural awareness. He believes that a person isn’t good at what
            they do unless they’re also a good person. One of Rahul's many goals
            is to educate the communities he is a part of with the support and
            love of others, so that he and her communities may look inwards,
            identify implicit biases, and improve as human beings. Those who are
            looking to work with Rahul must agree to prevent discrimination,
            harassment and retaliation by complying with the aforementioned
            policies.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
