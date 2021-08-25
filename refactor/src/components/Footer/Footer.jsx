import { FiFacebook, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h4>Rahul Joshi &copy; 2021</h4>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100004289202416"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.instagram.com/rj900/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://github.com/rahulpjo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-joshi-00/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
