import Image from 'next/image'
import styles from './team.module.css'
import image1 from '../public/assets/profile2.jpeg'
import image2 from '../public/assets/profile3.jpeg'
import image3 from '../public/assets/profile4.jpeg' // Add image path for Anamika Mishra
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
            Delhi, INDIA
          </p>
          <p className={styles.email}>
            <Mail className={styles.icon} />
            subhashishk2@gmail.com
          </p> 
          <p className={styles.bio} style={{textAlign: "justify"}}>
            Subhashish Kumar, the founder of Sahaj Nyay, is a graduate of the National Law Institute University,
            Bhopal, one of India’s premier law schools. He is registered with the Bar Council of Delhi and the Bar 
            Council of India and an active member of the Delhi High Court Bar Association.
            Having walked the path of both privilege and humility, Subhashish possesses a unique perspective 
            on the Indian legal system. His experiences with individuals from diverse socio-economic backgrounds 
            have shaped his holistic understanding of justice and advocacy. This dual insight enables him to craft 
            practical, empathetic, and effective legal strategies tailored to each client’s needs.
            With a sharp legal acumen and a steadfast commitment to the principles of fairness and integrity, 
            Subhashish founded Sahaj Nyay to simplify law and empower justice. Under his leadership, 
            the firm embodies a solution-oriented ethos, striving to provide efficient and client-centric 
            legal services while upholding the highest professional standards.
            Subhashish's approach combines innovation, precision, and a deep-rooted belief in delivering 
            results. He envisions a legal system that is transparent, accessible, and truly serves the people 
            it represents.
            <br />
            <span style={{fontWeight: "600"}}>Simplifying Law, Empowering Justice.</span>
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
          <p className={styles.location}>
            <MapPin className={styles.icon} />
            Delhi, INDIA
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
            <br />
            <span style={{fontWeight: "600"}}>Simplifying Law, Empowering Justice.</span>
          </p>    
        </div>
      </div>

      {/* Add Bio Section for Anamika Mishra */}
      <div className={styles.bioContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={image3} // Replace with the image path of Anamika Mishra
            alt="Anamika Mishra"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.name}>Anamika Mishra</h1>
          <p className={styles.education}>
            <GraduationCap className={styles.icon} />
            LLB (National Law University, Delhi) | LLM in Comparative Constitutional Law (Central European University, Vienna)
          </p>
          <p className={styles.location}>
            <MapPin className={styles.icon} />
            India & Austria (Based in India)
          </p>
          <p className={styles.email}>
            <Mail className={styles.icon} />
            anamika.mishra@sahajnyay.com {/* Update with her actual email if necessary */}
          </p>
          <p className={styles.bio} style={{textAlign: "justify"}}>
            Anamika Mishra, co-founder at Sahaj Nyay, is a graduate of National Law University, Delhi, and holds an LLM in Comparative Constitutional Law from Central European University, Vienna. 

            Anamika's academic strength is matched by hands-on legal experience — she has served as Research Assistant to Hon’ble Justice Sunita Agarwal at the High Court of Judicature, Allahabad, and contributed to the Death Penalty Research Project, better known as Project 39A.

            A first-generation female lawyer, Anamika’s journey has shaped her deep commitment to social justice and access to law for all. Having lived in over ten Indian cities, she brings cultural insight and a people-centric approach to her practice. Her core belief is that law must be an instrument of meaningful change — especially for the unheard.

            At Sahaj Nyay, she brings sharp legal acumen, empathy, and a principled voice to the table, working towards a system that is inclusive, responsive, and truly just.
            <br />
            <span style={{fontWeight: "600"}}>Simplifying Law, Empowering Justice.</span>
          </p>
        </div>
      </div>

    </>
  );
}
