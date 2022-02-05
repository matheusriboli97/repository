import styles from '../styles/components/Header.module.css';
import Image from 'next/image';
const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageField}>
        {/* <Image
          className="avatar"
          src="/logo/logo.svg"
          alt="Logo"
          width={75}
          height={75}
        /> */}
      </div>
      <div className={styles.modulesField}>
        <p style={{marginRight: '45px'}}>Sobre mim</p>
        <p>Skills</p>
      </div>
    </div>
  );
}

export default Presentation;