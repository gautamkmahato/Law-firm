import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import law3 from '../../public/assets/law3.jpeg'

export const metadata = {
  title: "Rights of an Employee against an Employer under the New Labour Codes",
  description: "Understand the rights of employees under the new Labour Codes, including provisions related to wages, industrial relations, social security, and occupational safety.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Subhashish</Link> /{' '}
        <Link href="/">Law</Link> /{' '}
        <span>Rights of an Employee against an Employer under the New Labour Codes</span>
      </nav>

      <h1 className={styles.title}>Rights of an Employee against an Employer under the New Labour Codes</h1>

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
        <time className={styles.date}>December 24, 2024</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={law3}
          alt="Employee rights documentation image"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Introduction</h3>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={styles.content}>
          In order to promote ease of doing business in India, 
          streamline the interests of the workforce, reduce red-tapism of labour 
          inspectors, and improve working conditions, the Indian government has 
          codified 29 national labour statutes into four labour codes:
        </p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>The Code on Wages, 2019 (Wages Code)</li>
          <li>The Industrial Relations Code, 2020 (IR Code)</li>
          <li>The Code on Social Security, 2020 ("SS Code")</li>
          <li>The Occupational Safety, Health and Working Conditions Code, 2020 ("OSH Code")</li>
        </ul>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h3 className={styles.contentHeader}>The Code on Wages, 2019 ("Wages Code")</h3>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={styles.content}>
          The Wages Code aims to ensure fair treatment in the payment of wages. Key rights include:
        </p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Equal Wages: No gender discrimination in wage payment.</li>
          <li>Minimum Wage: Entitlement to minimum wages for all employees.</li>
          <li>Bonus Payment: Employees working at least 30 days in the accounting year are entitled to an annual bonus of 8.33% of wages or Rs. 100, whichever is higher.</li>
        </ul>
{/* eslint-disable-next-line react/no-unescaped-entities */}
        <h3 className={styles.contentHeader}>Rights under the Industrial Relations Code, 2020</h3>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={styles.content}>Employees have several rights under the IR Code, including:</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Grievance Redressal: Disputes can be resolved within 30 days through the Grievance Redressal Committee.</li>
          <li>Protection Against Unfair Practices: Safeguards against discrimination, wrongful dismissal, and coercion.</li>
          <li>Right to Trade Union Participation: Employees can form and join trade unions for collective bargaining.</li>
          <li>Protection During Disputes: Industrial disputes can be resolved via conciliation, arbitration, or tribunals.</li>
          <li>Notice for Employment Changes: Employers must provide 21 days' notice before altering service conditions.</li>
          <li>Fair Treatment for Fixed-Term Employees: Equal wages and benefits as permanent workers.</li>
          <li>Protection from Unjust Retrenchment: Includes notice and compensation.</li>
          <li>Subsistence Allowance During Suspension: Workers receive 50%-75% of wages during suspension.</li>
          <li>Right to Arbitration: Disputes can be resolved through binding arbitration.</li>
        </ul>
{/* eslint-disable-next-line react/no-unescaped-entities */}
        <h3 className={styles.contentHeader}>Rights under the Code on Social Security, 2020</h3>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={styles.content}>Employees' rights under the SS Code include:</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Provident Fund: Retirement savings under the Employees' Provident Fund Scheme.</li>
          <li>Pension: Retirement pensions under the Employees' Pension Scheme.</li>
          <li>Insurance: Deposit-Linked Insurance Scheme benefits for dependents.</li>
          <li>Health Benefits: Medical care under the Employees' State Insurance Scheme.</li>
          <li>Maternity Benefits: Paid leave and medical care during pregnancy.</li>
          <li>Gratuity: Financial benefits for long-term service.</li>
          <li>Compensation: Benefits for employment injury or disease.</li>
          <li>Social Security for Gig and Platform Workers: Coverage for non-traditional workers.</li>
          <li>Unorganized Workers: Welfare schemes for health care and financial protection.</li>
          <li>Disability and Death Benefits: Compensation for the employee and family.</li>
        </ul>
{/* eslint-disable-next-line react/no-unescaped-entities */}
        <h3 className={styles.contentHeader}>Rights under the Occupational Safety, Health and Working Conditions Code, 2020</h3>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className={styles.content}>Employees' safety rights under the OSH Code include:</p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>Safe Workplace: Hazard-free environment to avoid injuries and diseases.</li>
          <li>Annual Health Checks: Free annual health check-ups for specific employees.</li>
          <li>No Fees for Safety: Employers cannot charge employees for workplace safety measures.</li>
          <li>Safety Information Access: Right to health and safety information.</li>
          <li>Reporting Unsafe Conditions: Employees can report unsafe situations.</li>
          <li>Safe Work Systems: Employers must arrange for safe handling and storage of hazardous materials.</li>
          <li>Disease Notification: Right to report occupational diseases.</li>
          <li>Action to Remove Danger: Right to discontinue dangerous work without penalties.</li>
          <li>Safety Training and Supervision: Employers must provide training and supervision for safety.</li>
          <li>Welfare Facilities: Access to restrooms and first-aid facilities.</li>
          <li>Protection from Dangerous Work: Employees can refuse inherently dangerous tasks.</li>
          <li>Redressal Mechanism: Grievances can be raised with safety committees or facilitators.</li>
        </ul>
      </div>
    </article>
  );
}
