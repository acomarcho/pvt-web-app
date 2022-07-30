import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return <div className={styles.footerContainer}>
    <div>
      <Image src="/logo-2.png" width="60px" height="60px" alt="Logo Laboratorium"></Image>
    </div>
    <p>
      &copy; 2022
    </p>
  </div>
}

export default Footer;