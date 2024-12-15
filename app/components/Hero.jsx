import styles from './Hero.module.css';
import Link from 'next/link';
import image from '../public/assets/mylogo.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.parallax}>
        <div className={styles.content}>
          <Image src={image} width="70" alt="Logo" className={styles.image} />
          <h1 className={styles.title}>SAHAJ NYAY</h1>
          <p className={styles.description}>
            SIMPLIFYING LAW & EMPOWERING JUSTICE
          </p>
          <Link href="/about" className={styles.button}>
            About Us
          </Link>
          
        </div>
      </div>
      <div className={styles.wave}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 42.3C840 37 960 33 1080 35.3C1200 37 1320 45 1380 49.2L1440 53.3V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
