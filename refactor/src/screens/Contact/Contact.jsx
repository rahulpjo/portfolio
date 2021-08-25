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
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <label>Your Name</label>
          <input type="text" name="name" required />
          <label>Your Email</label>
          <input type="email" name="email" required />

          <label htmlFor="topic">Topic of Inquiry</label>
          <select id="topic" name="topic">
            <option value="">Please Select</option>
            <option value="webdev">Web Development</option>
            <option value="engineering">Engineering</option>
            <option value="art">Artistic Direction</option>
            <option value="dance">Dance</option>
            <option value="design">Design</option>
            <option value="other">Other</option>
          </select>

          <label>If other, please specify:</label>
          <input type="text" name="otherspec" />

          <label>Message: </label>
          <textarea name="message"></textarea>
          <div data-netlify-recaptcha="true"></div>

          <button className="contact-submit" type="submit">
            Submit
          </button>
        </form>

        <div className="contact-text">
          <h3 className="contact-head">Note:</h3>
          <p className="contact-message">
            I will do my best to get back to you within 48 hours. In the rare
            instance that a response isn't received within that time frame,
            please feel free to reach out to me at the social media links
            provided at the bottom of the page!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
