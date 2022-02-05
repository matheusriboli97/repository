import Image from 'next/image';
import styles from '../styles/components/Presentation.module.css';

const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h3>Matheus</h3>
        <div className={styles.secondName}>
          <h3>Riboli</h3>.
        </div>
        <div className={styles.socialMediaLogos}>
          {/* <Image
            className="avatar"
            src="/logo/linkedin.svg"
            alt="Matheus Riboli"
            width={39}
            height={39}
          />
          <Image
            className="avatar"
            src="/logo/instagram.svg"
            alt="Matheus Riboli"
            width={39}
            height={39}
          />
          <Image
            className="avatar"
            src="/logo/gmail.svg"
            alt="Matheus Riboli"
            width={39}
            height={39}
          /> */}
        </div>
      </div>
      <div>
      {/* <Image
            className="avatar"
            src="/images/Me.png"
            alt="Matheus Riboli"
            width={1200}
            height={748}
          /> */}
      </div>
      <div className={styles.description}>
        <h3>Front-end developer,</h3>
        <h3>UI/UX Designer.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quaerat adipisci voluptatum eius hic sit.
        </p>
      </div>
    </div>
  );
}

export default Presentation;