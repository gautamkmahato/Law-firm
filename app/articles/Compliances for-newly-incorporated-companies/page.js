import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import complianceImage from '../../public/assets/law5.jpeg';

export const metadata = {
  title: "Compliances for Newly Incorporated Companies",
  description:
    "A comprehensive guide on the legal and operational compliances for newly incorporated companies in India.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Subhashish</Link> /{' '}
        <Link href="/">Corporate Law</Link> /{' '}
        <span>Compliances for Newly Incorporated Companies</span>
      </nav>

      <h1 className={styles.title}>All you need to know about “Compliances for Newly Incorporated Companies”</h1>

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
        <span className={styles.category}>Corporate Law</span>
        <span style={{ color: 'red' }}>|</span>
        <time className={styles.date}>December 31, 2024</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={complianceImage}
          alt="Compliance checklist"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Introduction</h3>
        <p className={styles.content}>
          To ensure the smooth and uninterrupted functioning of a newly incorporated company, it's essential to adhere to various legal and operational compliances. Here's a step-by-step guide to the most critical tasks.
        </p>

        <h3 className={styles.contentHeader}>Key Compliances</h3>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>
            <strong>Certificate of Incorporation</strong>: Brings the company into legal existence, issued by the Registrar of Companies (ROC), and contains details like the company's name, CIN, and incorporation date.
          </li>
          <li>
            <strong>First Board Meeting</strong>: Must be held within 30 days of incorporation to decide on appointing the first auditor, share distribution, and opening a bank account.
          </li>
          <li>
            <strong>TAN and PAN</strong>: Obtain a Tax Deduction Account Number (TAN) and Permanent Account Number (PAN) for tax deductions and income tax filings.
          </li>
          <li>
            <strong>Appointment of Auditors</strong>: To be done within 30 days of incorporation. If not, shareholders must appoint them within 90 days at an extraordinary general meeting.
          </li>
        </ul>

        <h3 className={styles.contentHeader}>Other Essential Compliances</h3>
        <p className={styles.content}>
          Additional tasks include GST registration (if applicable), maintaining statutory records, holding annual general meetings (AGM), filing annual returns, and adhering to labor laws.
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Register for GST if turnover exceeds ₹40 lakhs (₹20 lakhs for special category states).</li>
          <li>Maintain statutory registers and records as per Sections 88 and 170 of the Companies Act, 2013.</li>
          <li>Conduct the first AGM within six months of the financial year-end and file annual returns in e-Form MGT-7.</li>
        </ul>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          Meeting these compliance requirements is crucial for the legal and operational stability of a newly incorporated company. By adhering to these guidelines, companies can ensure seamless operations and maintain a good standing with regulatory authorities.
        </p>
      </div>
    </article>
  );
}
