import Image from 'next/image'
import styles from './team.module.css'
import image from '../public/assets/profile.jpg'
import { GraduationCap, MapPin, Mail } from 'lucide-react';

export default function BioSection() {
  return (
    <div className={styles.bioContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={image} // Replace with your image path
          alt="Profile Picture"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.name}>Subhashish Kumar</h1>
        <p className={styles.education}>
          <GraduationCap className={styles.icon} />
            BALLB (Hons.) National Law Institute University
        </p>
        <p className={styles.location}>
          <MapPin className={styles.icon} />
          Bhopal&sbquo; INDIA
        </p>
        <p className={styles.email}>
          <Mail className={styles.icon} />
          subhashishk2@gmail.com
        </p>
      </div>
    </div>
  );
}




