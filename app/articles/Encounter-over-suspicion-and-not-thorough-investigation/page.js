import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import lawImage from '../../public/assets/law8.jpeg';

export const metadata = {
  title: "Encounter Over Suspicion and Not Thorough Investigation",
  description:
    "Exploring the issues of extrajudicial killings and fake encounters in India, and the legal implications surrounding such actions.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Subhashish</Link> /{' '}
        <Link href="/">Human Rights</Link> /{' '}
        <span>Encounter Over Suspicion and Not Thorough Investigation</span>
      </nav>

      <h1 className={styles.title}>Encounter Over Suspicion and Not Thorough Investigation</h1>

      <div className={styles.meta}>
        <Image
          src={profileImage}
          alt="Subhashish Kumar"
          width={40}
          height={40}
          className={styles.avatar}
        />
        <span className={styles.author}>Subhashish Kumar</span>
        <span style={{ color: 'red' }}>|</span>
        <span className={styles.category}>Human Rights</span>
        <span style={{ color: 'red' }}>|</span>
        <time className={styles.date}>January 11, 2025</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={lawImage}
          alt="Law and Justice"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Introduction</h3>
        <p className={styles.content}>
          Encounters over suspicion can be considered as extrajudicial killings. Encounter cases are not new in India, but many raise questions about the police's actions. Often termed "extra-judicial killings," fake encounters involve law enforcement forces murdering individuals during staged gunfights, frequently claiming self-defense or preventing a criminal from fleeing. These incidents have sparked intense debates in India due to their human rights implications and disregard for the rule of law. While some encounters are lauded for quickly handling terrorists or hardened criminals, they can raise serious concerns about the abuse of power by enforcement agencies.
        </p>

        <h3 className={styles.contentHeader}>Relatable Laws</h3>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>
            <strong>Article 14 of the Indian Constitution</strong>: States that the Law is supreme and upholds the Rule of Law.
          </li>
          <li>
            <strong>Article 21 of the Indian Constitution</strong>: Provides the right to life and personal liberty to every person in the territory of India.
          </li>
          <li>
            <strong>Article 14(2) of ICCPR</strong>: Guarantees that every accused individual is considered innocent until proven guilty.
          </li>
          <li>
            <strong>Section 96 and 100 of the Indian Penal Code (IPC)</strong>: Discuss the right to private defense, ensuring the harm caused should not exceed the harm inflicted.
          </li>
          <li>
            <strong>Section 46(2) of the Code of Criminal Procedure (CrPC)</strong>: Grants power for making an arrest and using necessary force if the person attempts to flee.
          </li>
        </ul>

        <h3 className={styles.contentHeader}>Judicial Decisions</h3>
        <p className={styles.content}>
          In the case of <strong>Rohtash Kumar v. State of Haryana (2013)</strong>, the apex court observed the police's actions as suspicious and inconsistent with the encounter's reason. Similarly, in <strong>Prakash Kumar v. Ramprasad Gupta (2011)</strong>, the court emphasized that police cannot justify a "murder" in the name of an encounter, even if authorized under certain circumstances.
        </p>

        <h3 className={styles.contentHeader}>Guidelines on Police Encounters</h3>
        <p className={styles.content}>
          In <strong>PUCL & Anr. v. State of Maharashtra & Ors. (2014)</strong>, the court issued several guidelines for encounters that result in deaths. These include:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Any intelligence or tip received by the police should be documented in writing or electronically.</li>
          <li>An FIR must be filed whenever an encounter happens due to an intelligence report.</li>
          <li>Independent investigations should be carried out by CID or other police teams, and the crime scene should be documented.</li>
          <li>If the investigation shows the officer violated the IPC, disciplinary action should be taken against them.</li>
          <li>The family of the deceased should be compensated under Section 357A of the CrPC.</li>
          <li>Any weapons or evidence used by the police should be turned over for forensic examination.</li>
          <li>Victim’s family should be notified as soon as possible about the incident.</li>
        </ul>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          As enshrined in the Indian Constitution, the use of power and authority must adhere to the Rule of Law. A society without law leads to chaos, where the stronger dominate the weaker. Only the judiciary has the authority to determine whether an individual is guilty or innocent. The system of justice is undermined by fake encounters. Arbitrary use of force by the police cannot be justified. Encounter-based "justice" negatively impacts the relationship between society and the criminal justice system, leading to greater distrust and injustice.
        </p>
      </div>
    </article>
  );
}
