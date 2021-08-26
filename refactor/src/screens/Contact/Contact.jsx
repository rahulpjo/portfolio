import { motion } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        alert("Success!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

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
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Your Name&nbsp;{" "}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your Email&nbsp;{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Message&nbsp;{" "}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
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
