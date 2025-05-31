import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import urgencyImage from '../../public/assets/law-11.jpeg'; // Replace with correct image path

export const metadata = {
  title: "Invocation of Urgency Clause in Land Acquisition – Hazy Contours of Judicial Review",
  description:
    "A comparative analysis of two Supreme Court decisions on invoking the urgency clause under the Land Acquisition Act, 1894 and the evolving standards of judicial review in land acquisition matters.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Anamika Mishra</Link> /{' '}
        <Link href="/">Constitutional Law</Link> /{' '}
        <span>Invocation of Urgency Clause in Land Acquisition</span>
      </nav>

      <h1 className={styles.title}>Invocation of Urgency Clause in Land Acquisition – Hazy Contours of Judicial Review</h1>

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
        <span className={styles.category}>Constitutional Law</span>
        <span style={{ color: 'red' }}>|</span>
        <time className={styles.date}>May 24, 2025</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={urgencyImage}
          alt="Land acquisition urgency clause judicial review"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Abstract</h3>
        <p className={styles.content}>
          The article juxtaposes two recent Supreme Court rulings involving the urgency clause under the Land Acquisition Act, 1894. It critiques the divergent judicial review standards applied in these cases and advocates for a consistent approach to protect the substantive rights of landholders.
        </p>

        <h3 className={styles.contentHeader}>Introduction</h3>
        <p className={styles.content}>
          Land acquisition by the state involves an inherent tension between public interest and private rights. While the Land Acquisition Acts—both 1894 and 2013 versions—provide elaborate safeguards, the urgency clause allows the executive to bypass many of them. This article examines how courts have scrutinized such invocations in recent cases.
        </p>

        <h3 className={styles.contentHeader}>Judicial Review & Procedural Safeguards</h3>
        <p className={styles.content}>
          Procedural requirements like Social Impact Assessment and public objections are not mere formalities—they form the bedrock of natural justice in acquisition proceedings. Courts have held that bypassing these without genuine urgency undermines the rights of landholders.
        </p>

        <h3 className={styles.contentHeader}>Case Study 1: Hamid Ali Khan v. State of UP</h3>
        <p className={styles.content}>
          The Supreme Court scrutinized the invocation of urgency for a housing development project in Bulandshahr. Despite an official justification to “avoid delay,” the Court found no real urgency and emphasized the need for material evidence and genuine application of mind.
        </p>

        <h3 className={styles.contentHeader}>Case Study 2: Union of India v. Mohiuddin Masood</h3>
        <p className={styles.content}>
          A conflicting view was taken when land was acquired for an ITBP battalion headquarters. Here, urgency was presumed due to the nature of the project and the Court did not investigate the underlying material or mental application, despite the three-month delay between notices.
        </p>

        <h3 className={styles.contentHeader}>Divergence in Judicial Standards</h3>
        <p className={styles.content}>
          Hamid Ali Khan suggested a two-step review: existence of relevant material, and actual application of mind. However, Mohiuddin Masood adopted a deferential stance, seemingly exempting national security-linked acquisitions from such scrutiny. This variance creates legal uncertainty.
        </p>

        <h3 className={styles.contentHeader}>Need for Reconciliation</h3>
        <p className={styles.content}>
          The inconsistency in judicial review demands a clarificatory ruling by a larger bench. Either the stricter two-step review must be uniformly applied, or a relaxed standard should be carved out for national interest matters—with clear guidelines to avoid misuse.
        </p>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          Until such clarity emerges, “distinguishing cases on facts” will remain a judicial workaround, reducing predictability in urgent land acquisition matters. For safeguarding fundamental rights, a consistent and rigorous standard of judicial review must prevail—regardless of public purpose or case peculiarity.
        </p>

        <h3 className={styles.contentHeader}>About the Author</h3>
        <p className={styles.content}>
          The author is a graduate from National Law University, Delhi and currently serves as Research Assistant to Hon’ble Mrs. Justice Sunita Agarwal, High Court of Judicature at Allahabad.<br />
          <strong>Contact:</strong> anamika.mishra3@gmail.com
        </p>

        <h3 className={styles.contentHeader}>Disclaimer</h3>
        <p className={styles.content}>
          An original version of this article was published on SCC Online. This is a reproduction for academic purposes only. <br />
          <strong>Original Article:</strong>{' '}
          <a
            href="https://www.scconline.com/blog/post/2023/03/17/invocation-of-urgency-clause-in-land-acquisition-hazy-contours-of-judicial-review/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read here
          </a>
        </p>
      </div>
    </article>
  );
}
