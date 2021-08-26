import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "inertia",
        default: { duration: 1 },
        staggerChildren: 0.5,
      }}
      exit={{ opacity: 0 }}
    >
      <h3 className="contact-heading">
        To get in contact, please fill out the form below. In addition, you can
        also reach me via email at{" "}
        <span className="orange">rjoshi9000@gmail.com</span> or send me a
        connection request via LinkedIn at{" "}
        <span className="orange">
          https://www.linkedin.com/in/rahul-joshi-00/
        </span>
      </h3>

      <div className="contact-form">
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name&nbsp; <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email&nbsp; <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message&nbsp; <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
      <div className="contact-text">
        <h3 className="contact-head">Note:</h3>
        <p className="contact-message">
          I will do my best to get back to you within 48 hours. In the rare
          instance that a response isn't received within that time frame, please
          feel free to reach out to me at the social media links provided at the
          bottom of the page!
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
