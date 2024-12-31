// components/IconWithText.js
import Image from 'next/image';
import styles from './IconWithText.module.css';
import logo from '../public/assets/mylogo-2.png'
import Link from 'next/link';

export default function IconWithText({ src, alt, text }) {
  return (
    <Link href="/">
      <div className={styles.iconText}>
        <Image src={logo} alt="icon" width={24} height={24} className={styles.icon} />
        <span className={styles.text}>SAHAJ NYAY</span>
      </div>
    </Link>
  );
} 
