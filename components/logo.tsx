import styles from './logo.module.css';
import Image from 'next/image';

const Logo = () => {
  return <div className={styles.flex}>
    <div className={styles.flex2}>
      <div>
        <Image src="/logo-1.png" width='60px' height='60px' alt="" />
      </div>
      <div>
        <Image src="/logo-2.png" width='60px' height='60px' alt="" />
      </div>
    </div>
    <div>
      <p>© 2022</p>
    </div>
  </div>
}

export default Logo;