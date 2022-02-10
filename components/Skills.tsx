import styles from "../styles/components/Skills.module.css";
import Image from "next/image";
import { Speed, Brush, Code } from "@material-ui/icons";
const Skills = () => {
  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      <div className={styles.body}>
        <div className={styles.skillBox}>
          <Speed style={{ fontSize: 90 }} />
          <h3>Fluidez</h3>
          <span className={styles.skillDescription}>
            Aplicações rodando sem travamentos. Com{" "}
            <span className={styles.skillDescriptionHighlight}>fluidez</span>.
          </span>
        </div>
        <div className={styles.skillBox}>
          <Brush style={{ fontSize: 90 }} />
          <h3>Design</h3>
          <span className={styles.skillDescription}>
            Sempre proporcionar a melhor{" "}
            <span className={styles.skillDescriptionHighlight}>
              experiência
            </span>{" "}
            possível para o usuário.
          </span>
        </div>
        <div className={styles.skillBox}>
          <Code style={{ fontSize: 90 }} />
          <h3>Código Limpo</h3>
          <span className={styles.skillDescription}>
            Códigos estruturados e organizados, seguindo uma{" "}
            <span className={styles.skillDescriptionHighlight}>arquitetura eficiente</span>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
