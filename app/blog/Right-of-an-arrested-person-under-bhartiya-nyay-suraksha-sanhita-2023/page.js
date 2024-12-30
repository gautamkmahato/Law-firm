import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import law2 from '../../public/assets/law2.jpeg'


export const metadata = {
  title: "Rights of an Arrested Person Under Bhartiya Nyaya Suraksha Sanhita, 2023",
  description:
    "Explore the rights and safeguards for arrested individuals under the Bhartiya Nyaya Suraksha Sanhita, 2023, including constitutional provisions and judicial precedents.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Subhashish</Link> /{' '}
        <Link href="/">Law</Link> /{' '}
        <span>
          Rights of an Arrested Person Under Bhartiya Nyaya Suraksha Sanhita,
          2023
        </span>
      </nav>

      <h1 className={styles.title}>
        Rights of an Arrested Person Under Bhartiya Nyaya Suraksha Sanhita, 2023
      </h1>

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
        <span className={styles.category}>Law</span>
        <span style={{ color: 'red' }}>|</span>
        <time className={styles.date}>December 25, 2024</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={law2}
          alt="Legal documentation image"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Introduction</h3>
        <p className={styles.content}>
          The Constitution of India, often referred to as the supreme law of
          the country, provides under Article 21 that “No person shall be
          deprived of his life or personal liberty except according to a
          procedure established by law.” Time and again, Article 21 has been
          accorded the widest possible interpretation by the Hon’ble Supreme
          Court, upholding people's rights to live a happy and dignified life.
        </p>

        <p className={styles.content}>
          However, under certain circumstances, a person can be deprived of
          their personal liberty. Among these, **arrest** is a significant
          reason, involving the curtailment of a person's freedom through legal
          authority.
        </p>

        <h3 className={styles.contentHeader}>Types of Arrests</h3>
        <p className={styles.content}>
          The Bhartiya Nyaya Suraksha Sanhita (BNSS), 2023, classifies arrests
          into:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>
            Arrests made with a warrant issued by a Magistrate.
          </li>
          <li>
            Arrests made without a warrant but in accordance with legal
            provisions.
          </li>
        </ul>

        <p className={styles.content}>
          In both cases, safeguards exist to ensure the rights of the arrested
          persons are protected.
        </p>

        <h3 className={styles.contentHeader}>Rights of an Arrested Person</h3>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>
            **Right to Be Informed**: An arrested person must be informed of the
            grounds and reasons for their arrest, along with their right to
            inform a friend or relative.
          </li>
          <li>
            **No Unnecessary Restraint**: Restraints used should not exceed what
            is necessary to prevent escape.
          </li>
          <li>
            **Right to Meet an Advocate**: A person has the right to consult an
            advocate of their choice during interrogation, although not
            throughout.
          </li>
          <li>
            **Right to Bail**: In non-bailable offences, the arrested individual
            should be informed about their right to seek bail.
          </li>
          <li>
            **Right to Necessary Wearing-Apparel**: An arrested person is
            entitled to have necessary clothing.
          </li>
          <li>
            **Right to Health**: Authorities must take reasonable care of the
            health and safety of the arrested person.
          </li>
          <li>
            **Right to Medical Examination**: An arrested person should be
            examined by a medical officer.
          </li>
        </ul>

        <h3 className={styles.contentHeader}>
          Safeguards for Female Arrestees
        </h3>
        <p className={styles.content}>
          The BNSS includes additional provisions to safeguard the rights of
          female arrestees:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>
            Presumption of submission during arrest, avoiding unnecessary
            physical contact unless necessary.
          </li>
          <li>
            Medical examinations for female arrestees must be conducted by
            female medical practitioners.
          </li>
          <li>
            Arrest and searches involving women must be conducted by female
            officers, with strict regard for decency. Women should not be
            arrested after sunset and before sunrise, except under exceptional
            circumstances.
          </li>
        </ul>

        <h3 className={styles.contentHeader}>Judicial Precedents</h3>
        <p className={styles.content}>
          Over the years, courts have reaffirmed the rights of arrestees
          through various landmark judgments:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>
            **D.K. Basu v. State of West Bengal (1996)**: Laid down guidelines
            for arrest and detention procedures.
          </li>
          <li>
            **Joginder Kumar v. State of U.P. (1994)**: Differentiated between
            FIR registration and the necessity of arrest.
          </li>
          <li>
            **Sheela Barse v. State of Maharashtra (1983)**: Highlighted the
            right of the accused to be informed about their medical examination
            rights.
          </li>
        </ul>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          The BNSS, 2023, along with constitutional and judicial safeguards,
          ensures that an accused individual is treated with dignity. While
          their movement may be curtailed, they are protected from undue
          hardships until proven guilty.
        </p>
      </div>
    </article>
  );
}
