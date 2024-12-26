import Image from 'next/image'
import Link from 'next/link'
import styles from '../[blogTitle]/blogPost.module.css'
import profileImage from '../../public/assets/profile.jpg'
import coverImage from '../../public/assets/banner-1.jpg'

export default function BlogPost({params}) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/katen-sites">Sahaj Nyay</Link> /{' '}
        <Link href="/katen">Shubashish</Link> /{' '}
        <Link href="/lifestyle">Law</Link> /{' '}
        <span>What You Need to Know About Section 35(3) of the BNSS</span>
      </nav>
      
      <h1 className={styles.title}>What You Need to Know About Section 35(3) of the BNSS (Erstwhile Section 41A notice under CrPC)</h1>
      
      <div className={styles.meta}>
        <Image
          src={profileImage}
          alt="Katen Doe"
          width={40}
          height={40}
          className={styles.avatar}
        />
        <span className={styles.author}>Shubashish Kumar</span>
        <span style={{color: "red"}}>|</span>
        <span className={styles.category}>Law</span>
        <span style={{color: "red"}}>|</span>
        <time className={styles.date}>December 26, 2024</time>
        {/* <span className={styles.comments}>(0)</span> */}
      </div>
      
      <div className={styles.imageContainer}>
        <Image
          src={coverImage}
          alt="Person walking on snowy landscape"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>
      <h3 className={styles.content}>Police Notices and Your Rights</h3>
      <p className={styles.content}>
      Understanding Section 35(3) of the Bhartiya Nyaya Suraksha Sanhita (BNSS), 
      which replaced the erstwhile Section 41A of the CrPC is essential, especially 
      if you or someone you know ever receives a notice from the police. Introduced 
      as part of criminal justice reforms, Section 35(3) outlines when the police can 
      issue a notice instead of making an arrest. Here’s a simple breakdown of what 
      it means, when it applies, and what you should do if you receive one.
      </p>
      <h3 className={styles.content}>When Can Police Issue a Notice Under Section 35(3)?</h3>
      <p className={styles.content}>
      Section 35(3), BNSS is designed to protect individuals from unnecessary arrests, 
      allowing police to issue a notice in certain cases instead. Typically, 
      this notice is issued when a police officer suspects someone is involved in 
      a case but doesn’t deem it necessary to arrest them immediately. 
      This provision was put in place to make the criminal justice process 
      less intrusive and to prevent overcrowding in jails.
      </p>
      <h3 className={styles.content}>Key Situations for Notice Under section 35(3):</h3>
      <ol className={styles.content}>
      <li>Non-Cognizable Offenses: If the offence is non-cognizable (e.g., minor offences), the police are more likely to issue a notice rather than arrest.</li>
        <li>Sufficient Evidence: If there is evidence, but the police do not see an immediate need for custody, they may choose to issue a notice instead.</li>
        <li>Investigation Requirement: Sometimes, the police need more information from the individual. A notice allows them to ask the person to appear for questioning.</li>
      </ol>
      <h3 className={styles.content}>What Should You Do if You Get a Notice Under Section 35(3)?</h3>
      <p className={styles.content}>If you receive a notice under section 35(3), its essential to take it seriously and follow the steps below:</p>
      <ol className={styles.content}>
      <li>Read the Notice Carefully: The notice should specify the date, time, and place you must appear. Its essential to note these details and prepare in advance.
        </li>
        <li>Understand Your Rights: Remember, receiving a notice does not mean you are under arrest or will be. It simply means the police want your cooperation in the investigation.</li>
        <li>Seek Legal Advice: Consulting with a lawyer can provide clarity on the implications of the notice and ensure that you respond correctly.
        </li>
        <li>Comply With the Notice: Non-compliance can lead to legal consequences, including the possibility of arrest. It’s crucial to show up as requested.
        </li>
        <li>Be Respectful and Cooperative: During questioning, staying calm, cooperative, and respectful can work in your favor, as it shows you’re not obstructing the investigation.
        </li>
      </ol>
      <h3 className={styles.content}>What If the Police Still Decide to Arrest?</h3>
      <p className={styles.content}>
      Section 35(3) offers some protection against arbitrary arrests, 
      but it does not entirely prevent the police from taking a person into 
      custody if they believe it is necessary. The police must have valid reasons, such as:
      <br />
      Evidence of tampering: If they suspect you may tamper with evidence or influence witnesses.
    <br />
    Non-cooperation: If you ignore the notice or fail to appear.
<br />
    In such cases, it’s crucial to have legal support to protect your rights.

      </p>
      <h3 className={styles.content}>Why section 35(3) is Important</h3>
      <p className={styles.content}>
      The introduction of section 35(3) reflects a shift toward respecting individual rights within the criminal justice system. It balances the needs of law enforcement with personal freedoms, providing people an alternative to arrest and helping prevent undue harassment.
<br />
By understanding section 35(3), you’re better equipped to respond if you or someone close to you is ever involved in a police inquiry. Remember, compliance, respect, and legal guidance are the best ways to handle such situations.

      </p>
    </article>
  )
}