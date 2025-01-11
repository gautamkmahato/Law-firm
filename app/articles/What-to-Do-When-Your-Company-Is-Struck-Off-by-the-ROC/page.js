import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import complianceImage from '../../public/assets/law7.jpeg';

export const metadata = {
  title: "What to Do When Your Company Is Struck Off by the ROC",
  description:
    "Learn the reasons, consequences, and steps to take if your company is struck off by the Registrar of Companies (ROC) in India.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Subhashish</Link> /{' '}
        <Link href="/">Corporate Law</Link> /{' '}
        <span>What to Do When Your Company Is Struck Off by the ROC</span>
      </nav>

      <h1 className={styles.title}>What to Do When Your Company Is Struck Off by the ROC</h1>

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
        <time className={styles.date}>January 9, 2025</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={complianceImage}
          alt="Law compliance"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Introduction</h3>
        <p className={styles.content}>
          Running a company comes with a set of legal and regulatory responsibilities. One significant issue entrepreneurs may face is when their company is struck off by the Registrar of Companies (ROC). This action can have serious implications for the company’s directors, shareholders, and creditors. In this blog, we will explore the reasons behind this action, its consequences, and the steps you can take to address the situation effectively.
        </p>

        <h3 className={styles.contentHeader}>Why Does the ROC Strike Off a Company?</h3>
        <p className={styles.content}>
          The ROC can strike off a company’s name from the register under certain circumstances, usually due to non-compliance with statutory requirements. Common reasons include:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Failure to file annual returns and financial statements for two or more consecutive years.</li>
          <li>Non-operation: If the company has failed to commence business within a year of incorporation or has been inactive for two preceding financial years.</li>
          <li>Voluntary Application: The company itself may apply for strike-off under Section 248(2) of the Companies Act, 2013.</li>
          <li>Failure to respond to notices or comply with directives issued by the ROC.</li>
        </ul>

        <h3 className={styles.contentHeader}>Consequences of a Company Being Struck Off</h3>
        <p className={styles.content}>
          When a company is struck off, it ceases to exist as a legal entity. This has several repercussions:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Assets and liabilities: The company’s assets are vested with the Central Government, and creditors lose their ability to claim outstanding dues from the company.</li>
          <li>Legal proceedings: Directors and shareholders may still be held liable for any pending legal obligations.</li>
          <li>Inability to operate: The company’s bank accounts are frozen, and it cannot legally conduct business.</li>
          <li>Disqualification of directors: Directors may face disqualification under Section 164(2) of the Companies Act.</li>
        </ul>

        <h3 className={styles.contentHeader}>Steps to Take if Your Company Is Struck Off</h3>
        <p className={styles.content}>
          If your company has been struck off, you can take the following steps to restore its status or address the situation:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>
            <strong>1. Understand the Reason for Strike-Off</strong>: Review the notice issued by the ROC and determine the reason behind the action. This will help you decide whether to pursue restoration or close matters permanently.
          </li>
          <li>
            <strong>2. File an Appeal for Restoration</strong>: Under Section 252 of the Companies Act, 2013, you can file an appeal with the National Company Law Tribunal (NCLT) for the restoration of the company. The appeal must be filed within three years from the date of the strike-off notice.
          </li>
          <li>
            <strong>3. Prepare Required Documents</strong>: Compile the following documents for restoration: 
            <ul>
              <li>Copy of the ROC’s strike-off notice.</li>
              <li>Audited financial statements.</li>
              <li>Copies of annual returns for the relevant period.</li>
              <li>Affidavits, indemnity bonds, and a board resolution supporting the application.</li>
            </ul>
          </li>
          <li>
            <strong>4. Comply with Pending Filings and Penalties</strong>: Clear all pending statutory filings such as annual returns and financial statements. Pay any penalties or fees due to non-compliance.
          </li>
          <li>
            <strong>5. Hire Professional Help</strong>: The restoration process involves legal and procedural complexities. Consulting a professional such as a legal advisor can simplify the process.
          </li>
          <li>
            <strong>6. Voluntary Closure (If Necessary)</strong>: If you no longer wish to operate the company, you can settle any pending liabilities and apply for voluntary closure to ensure proper legal compliance.
          </li>
        </ul>

        <h3 className={styles.contentHeader}>How Sahaj Nyay Can Help</h3>
        <p className={styles.content}>
          Dealing with a strike-off can be overwhelming, but Sahaj Nyay is here to simplify the process for you. Our team of legal experts can assist you in:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Filing appeals and preparing necessary documentation.</li>
          <li>Representing your case before the NCLT.</li>
          <li>Ensuring compliance with statutory requirements to avoid future complications.</li>
        </ul>
        <p className={styles.content}>
          With our solution-oriented approach, we ensure a seamless resolution, empowering you to focus on your business goals without legal hurdles.
        </p>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          A company’s strike-off by the ROC is a serious matter but not an insurmountable one. By understanding the reasons, addressing compliance gaps, and seeking professional assistance, you can either restore your company or ensure its proper closure. Remember, timely action is key to mitigating further complications.
        </p>
        <p className={styles.content}>
          At Sahaj Nyay, we’re committed to simplifying law and empowering justice. If you’re facing a strike-off situation, don’t hesitate to reach out to us for expert guidance. Let us help you navigate this challenging phase with ease.
        </p>
      </div>
    </article>
  );
}
