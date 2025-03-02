import Image from 'next/image'
import styles from './team.module.css'
import image1 from '../public/assets/profile2.jpeg'
import image2 from '../public/assets/profile3.jpeg'
import { GraduationCap, MapPin, Mail } from 'lucide-react';

export const metadata = {
  title: "Sahaj Nyay team Page",
  description: "Welcome to The team Page of Sahaj Nyay Agency",
};

export default function BioSection() {
  return (
    <>
    <div className={styles.bioContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={image1} // Replace with your image path
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
          Delhi&sbquo; INDIA
        </p>
        <p className={styles.email}>
          <Mail className={styles.icon} />
          subhashishk2@gmail.com
        </p> 
        <p className={styles.bio} style={{textAlign: "justify"}}>
            Subhashish Kumar&sbquo; the founder of Sahaj Nyay&sbquo; is a graduate of the National Law Institute University&sbquo;
            Bhopal&sbquo; one of India premier law schools. He is registered with the Bar Council of Delhi and the Bar 
            Council of India and an active member of the Delhi High Court Bar Association.
            Having walked the path of both privilege and humility&sbquo; Subhashish possesses a unique perspective 
            on the Indian legal system. His experiences with individuals from diverse socio economic backgrounds 
            have shaped his holistic understanding of justice and advocacy. This dual insight enables him to craft 
            practical&sbquo; empathetic&sbquo; and effective legal strategies tailored to each clients needs.
            With a sharp legal acumen and a steadfast commitment to the principles of fairness and integrity&sbquo; 
            Subhashish founded Sahaj Nyay to simplify law and empower justice. Under his leadership&sbquo;
            the firm embodies a solution-oriented ethos&sbquo; striving to provide efficient and client-centric 
            legal services while upholding the highest professional standards.
            Subhashish approach combines innovation&sbquo; precision, and a deep-rooted belief in delivering 
            results. He envisions a legal system that is transparent&sbquo; accessible&sbquo; and truly serves the people 
            it represents. 
            <br />
            <span style={{fontWeight: "600"}}>Simplifying Law&sbquo; Empowering Justice.</span>
        </p>
      </div>
    </div>

    <div className={styles.bioContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={image2} // Replace with your image path
          alt="Profile Picture"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.name}>Kirti Sharma</h1>
        {/* <p className={styles.education}>
          <GraduationCap className={styles.icon} />
            BALLB (Hons.) National Law Institute University
        </p> */}
        <p className={styles.location}>
          <MapPin className={styles.icon} />
          Delhi&sbquo; INDIA
        </p>
        <p className={styles.email}>
          <Mail className={styles.icon} />
          advkirtisharma183695@gmail.com
        </p> 
        <p className={styles.bio} style={{textAlign: "justify"}}>
        Kirti Sharma, a partner at Sahaj Nyay, is a distinguished legal professional whose journey is marked by academic excellence and a steadfast commitment to justice. She earned her BA LLB from IP University, Delhi, where she consistently excelled in her studies, and went on to complete her LLM from Amity University, Noida, graduating as a gold medalist.

Beyond her academic achievements, Kirti has demonstrated remarkable discipline and resilience, shaped by her upbringing in a family of army and service personnel. Her experiences as a national-level football player, representing the state of Delhi, instilled in her the values of teamwork, perseverance, and strategic thinking — qualities she seamlessly integrates into her legal practice.

Kirti’s approach to law is rooted in empathy, sincerity, and a deep desire to provide relief-oriented solutions. She embodies Sahaj Nyay’s vision of simplifying law and empowering justice, bringing a principled and socially conscious perspective to every case she handles. Her unwavering dedication to doing the right work for society, combined with her sharp legal insight, makes her an invaluable pillar of the firm.

Together with her partners, Kirti strives to create a legal environment that is accessible, client-centric, and driven by integrity, ensuring that justice is not just a concept but a reality for all.
Simplifying Law‚ Empowering Justice. 
            <br />
            <span style={{fontWeight: "600"}}>Simplifying Law&sbquo; Empowering Justice.</span>
        </p>    
      </div>
    </div>
    </>
  );
}




