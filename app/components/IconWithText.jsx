// components/IconWithText.js
import Image from 'next/image';
import styles from './IconWithText.module.css';
import logo from '../public/assets/logo.png'

export default function IconWithText({ src, alt, text }) {
  return (
    <div className={styles.iconText}>
      <Image src={logo} alt="icon" width={24} height={24} className={styles.icon} />
      <span className={styles.text}>CskLegal</span>
    </div>
  );
}
