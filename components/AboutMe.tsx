import styles from "../styles/components/AboutMe.module.css";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { FaThumbsDown } from "@react-icons/all-files/fa/FaThumbsDown";
import aboutMeDescription from "../utils/aboutMeDescription";
const AboutMe = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        {/* {aboutMeDescription()} */}
      </p>
    </div>
  );
};

export default AboutMe;
