import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import mentalHealthImage from '../../public/assets/mentalHealth.jpg';

export const metadata = {
  title: "Importance of Mental Health Laws in India",
  description:
    "An overview of mental health laws in India, their evolution, and the rights of individuals under the Mental Health Care Act, 2017.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Subhashish</Link> /{' '}
        <Link href="/">Law</Link> /{' '}
        <span>Importance of Mental Health Laws in India</span>
      </nav>

      <h1 className={styles.title}>Importance of Mental Health Laws in India</h1>

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
        <time className={styles.date}>December 27, 2024</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={mentalHealthImage}
          alt="Mental health awareness"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Introduction</h3>
        <p className={styles.content}>
          Mental health issues have often been stigmatized in society. Over the
          years, Indian laws have evolved to address the rights and needs of
          individuals facing mental health challenges. The Mental Health Care
          Act, 2017, is a significant step toward ensuring the protection,
          promotion, and fulfillment of their rights during mental healthcare
          delivery.
        </p>

        <h3 className={styles.contentHeader}>History of Mental Health Laws in India</h3>
        <p className={styles.content}>
          The journey of mental health laws in India began during the
          pre-independence era. Early laws, such as the Lunacy Acts of 1858,
          were primarily focused on managing asylums and segregating patients
          from society. Post-independence, the Mental Health Act, 1987, marked a
          shift towards a more humanitarian approach, laying the groundwork for
          modern mental health legislation.
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>The Lunacy (Supreme Courts) Act, 1858</li>
          <li>The Indian Lunatic Asylums Act, 1858</li>
          <li>The Mental Health Act, 1987</li>
          <li>The Mental Health Care Act, 2017</li>
        </ul>

        <h3 className={styles.contentHeader}>Current Mental Health Laws</h3>
        <p className={styles.content}>
          The Mental Health Care Act, 2017, provides a comprehensive definition
          of mental illness and emphasizes rights-based care. Key provisions
          include the right to access mental healthcare, protection from
          inhumane treatment, and the right to legal aid and confidentiality.
        </p>

        <h3 className={styles.contentHeader}>Rights under the Mental Health Care Act, 2017</h3>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Right to access mental healthcare</li>
          <li>Right to community living</li>
          <li>Right to protection from inhumane treatment</li>
          <li>Right to equality and non-discrimination</li>
          <li>Right to information and confidentiality</li>
          <li>Right to make complaints and access medical records</li>
        </ul>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          The Mental Health Care Act, 2017, reflects a paradigm shift towards a
          more inclusive, rights-based approach. By addressing mental health
          with sensitivity and care, India is paving the way for a society that
          upholds the dignity and rights of all its citizens.
        </p>
      </div>
    </article>
  );
}
