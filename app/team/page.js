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
          Bhopal, INDIA
        </p>
        <p className={styles.email}>
          <Mail className={styles.icon} />
          subhashishk2@gmail.com
        </p>
        <p className={styles.bio}>
            Subhashish Kumar&lsquo; the founder of Sahaj Nyay&apos; is a graduate of the National Law Institute University, 
            Bhopal&apos; one of India premier law schools. He is registered with the Bar Council of Delhi and the Bar 
            Council of India and an active member of the Delhi High Court Bar Association.
            Having walked the path of both privilege and humility&apos; Subhashish possesses a unique perspective 
            on the Indian legal system. His experiences with individuals from diverse socio economic backgrounds 
            have shaped his holistic understanding of justice and advocacy. This dual insight enables him to craft 
            practical&apos; empathetic&apos; and effective legal strategies tailored to each clients needs.
            With a sharp legal acumen and a steadfast commitment to the principles of fairness and integrity&apos; 
            Subhashish founded Sahaj Nyay to simplify law and empower justice. Under his leadership&apos;
            the firm embodies a solution-oriented ethos&apos; striving to provide efficient and client-centric 
            legal services while upholding the highest professional standards.
            Subhashish approach combines innovation&apos; precision, and a deep-rooted belief in delivering 
            results. He envisions a legal system that is transparent&apos; accessible&apos; and truly serves the people 
            it represents. Simplifying Law&apos; Empowering Justice.
        </p>
      </div>
    </div>
  );
}




