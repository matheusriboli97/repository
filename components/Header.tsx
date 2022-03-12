import styles from "../styles/components/Header.module.css";
import Image from "next/image";
import { IconButton } from "@material-ui/core";
const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageField}>
        <Image
          className="avatar"
          src="/logo.svg"
          alt="Logo"
          width={75}
          height={75}
        />
      </div>
      <div className={styles.modulesField}>
        <div className={styles.flagButtons}>
        <IconButton>
          <Image
            className={styles.flag}
            src="/br.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        </IconButton>
        <IconButton>
          <Image
            className={styles.flag}
            src="/us.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        </IconButton>
        </div>
        <p style={{ marginRight: "45px" }}>Sobre mim</p>
        <p>Skills</p>
      </div>
    </div>
  );
};

export default Presentation;
