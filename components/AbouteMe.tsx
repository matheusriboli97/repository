import styles from "../styles/components/AboutMe.module.css";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { FaThumbsDown } from "@react-icons/all-files/fa/FaThumbsDown";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Fico muito feliz em saber!</h2>
      <p className={styles.description}>Eu tenho 24 anos e nasci em Muzambinho - MG. Me formei em Engenharia de Computação pela Universidade Federal de Itajubá e atuo como desenvolvedor web há 1 ano.
        Eu sou completamente apaixonado pelo que faço, e acredito que não exista uma motivação maior do que essa.</p>
        <br />
        <p className={styles.description}>Agora me conte um pouco sobre você:</p>
        <button className={styles.btnField}>Enviar</button>
    </div>
  );
}

export default AboutMe;