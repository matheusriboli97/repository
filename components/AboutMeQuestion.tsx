import styles from "../styles/components/AboutMeQuestion.module.css";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { FaThumbsDown } from "@react-icons/all-files/fa/FaThumbsDown";
import { Dispatch, SetStateAction } from "react";

interface AboutMeQuestionProps {
  setShowPage: Dispatch<SetStateAction<number>>;
}

const AboutMeQuestion = (props: AboutMeQuestionProps) => (
  <div className={styles.container}>
    <h2>Eai, quer saber um pouco mais sobre mim?</h2>
    <div className={styles.buttonsField}>
      <button
        onClick={() => props.setShowPage(1)}
        className={styles.confirmButton}
      >
        <FaThumbsUp size="40" className={styles.upIcon} />
      </button>
      <button
        onClick={() => props.setShowPage(2)}
        className={styles.denyButton}
      >
        <FaThumbsDown size="40" className={styles.downIcon} />
      </button>
    </div>
  </div>
);

export default AboutMeQuestion;
