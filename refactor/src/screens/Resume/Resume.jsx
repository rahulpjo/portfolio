import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import "./Resume.css";

const Resume = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className="resume">
      <embed src="img/RahulJoshiResume2025.pdf" width="600px" height="90%" />
      <button onClick={handleClick} className="back-button">
        <BiArrowBack />
        &nbsp;Go Back
      </button>
    </div>
  );
};

export default Resume;
