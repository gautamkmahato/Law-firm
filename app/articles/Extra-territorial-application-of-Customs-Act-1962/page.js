import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import customsImage from '../../public/assets/extra.jpeg'; // Replace with actual image path

export const metadata = {
  title: "Extra-Territorial Application of Customs Act, 1962",
  description:
    "An in-depth analysis of the 2018 amendment to Section 1(2) of the Customs Act, 1962 and its implications for extra-territorial jurisdiction in Indian tax law.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Anamika Mishra</Link> /{' '}
        <Link href="/">Tax & Trade</Link> /{' '}
        <span>Extra-Territorial Application of Customs Act, 1962</span>
      </nav>

      <h1 className={styles.title}>Extra-Territorial Application of Customs Act, 1962</h1>

      <div className={styles.meta}>
        <Image
          src={profileImage}
          alt="Anamika Mishra"
          width={40}
          height={40}
          className={styles.avatar}
        />
        <span className={styles.author}>Anamika Mishra</span>
        <span style={{ color: 'red' }}>|</span>
        <span className={styles.category}>Tax & Trade</span>
        <span style={{ color: 'red' }}>|</span>
        <time className={styles.date}>February 18, 2023</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={customsImage}
          alt="Customs and International Jurisdiction"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Abstract</h3>
        <p className={styles.content}>
          The article explores the extra-territorial jurisdiction conferred upon the Customs Act, 1962 by way of Section 1(2), as amended by Section 57 of the Finance Act, 2018. It suggests that a literal reading of the provision gives the law a potentially vast reach. Drawing parallels with the Income Tax Act, 1961, the article assesses how extraterritoriality is interpreted and enforced within Indian tax law.
        </p>

        <h3 className={styles.contentHeader}>Background of the Amendment</h3>
        <p className={styles.content}>
          Section 1 of the Customs Act, 1962, was amended in 2018 to extend its applicability to offences or contraventions committed outside India by any person. This marks a significant expansion in the scope of the statute. The terms “any offence/contravention” and “any person” have not been defined within the Customs Act or Finance Act, inviting judicial interpretation in coming years.
        </p>

        <h3 className={styles.contentHeader}>Interpreting “Any Person”</h3>
        <p className={styles.content}>
          The General Clauses Act, 1897 defines "person" broadly, and this approach has been upheld in previous cases like <em>Agrawal Trading Corporation v. Collector Of Customs</em>. However, in <em>Workmen v. Dimakuchi Tea Estate</em>, the Supreme Court ruled that the term "any person" must be interpreted in the context of the legislation and its purpose.
        </p>
        <p className={styles.content}>
          This principle has since been reiterated in cases like <em>Indore Development Authority v. Manoharlal</em> and <em>NCT of Delhi v. Union of India</em>, reinforcing the need to view statutory language through the lens of legislative intent and subject matter relevance.
        </p>

        <h3 className={styles.contentHeader}>Extra-Territoriality in Tax Law</h3>
        <p className={styles.content}>
          The precedent for extraterritorial application in tax law comes from <em>Electronics Corporation Of India Limited v. CIT</em> and <em>GVK Industries Ltd. v. ITO</em>. In both cases, the Supreme Court emphasized that Parliament can legislate extra-territorially as long as there is a **real or expected connection to India**.
        </p>
        <p className={styles.content}>
          The GVK judgment broadened the interpretation of “nexus,” cautioning against a narrow reading that would exclude foreign causes that significantly impact India. This rationale supports the validity of extending Customs Act jurisdiction to activities that affect India’s economic interests, even if they occur abroad.
        </p>

        <h3 className={styles.contentHeader}>Enforcement Challenges and Implications</h3>
        <p className={styles.content}>
          While enforcement remains a challenge in cross-border contexts, the legislative intent is clear. Transactions with implications on India’s economy—especially those involving smuggling or duty evasion—can be brought under Customs Act scrutiny, provided a reliable enforcement mechanism exists.
        </p>
        <p className={styles.content}>
          The amended section, when read in light of constitutional and judicial guidance, aligns with India’s broader push towards global financial accountability and regulatory oversight.
        </p>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          The newly amended Section 1(2) of the Customs Act, 1962 must be interpreted in a manner that balances legislative purpose with constitutional boundaries. Indian courts are likely to use existing jurisprudence to moderate its scope, ensuring that “any person” includes only those genuinely connected to India’s trade or economic interests. With proper enforcement, this provision can serve as a robust tool against offshore tax evasion and illicit trade practices.
        </p>

        <h3 className={styles.contentHeader}>About the Author</h3>
        <p className={styles.content}>
          The author is a graduate from National Law University, Delhi and currently serves as Research Assistant to Hon’ble Mrs. Justice Sunita Agarwal, High Court of Judicature at Allahabad.<br />
          <strong>Contact:</strong> anamika.mishra3@gmail.com
        </p>

        <h3 className={styles.contentHeader}>Disclaimer</h3>
        <p className={styles.content}>
          An original version of this article was published on SCC Online. This is a reproduction for academic purposes only. <br />
          <strong>Original Article:</strong> <a href="https://www.scconline.com/blog/post/2023/02/18/extra-territorial-application-of-customs-act-1962/" target="_blank" rel="noopener noreferrer">
            Read here
          </a>
        </p>
      </div>
    </article>
  );
}
