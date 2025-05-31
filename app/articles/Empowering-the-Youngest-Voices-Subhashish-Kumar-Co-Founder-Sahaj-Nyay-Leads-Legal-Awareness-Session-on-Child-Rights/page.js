
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[blogTitle]/blogPost.module.css';
import profileImage from '../../public/assets/profile.jpg';
import childRightsImage from '../../public/assets/child.jpeg'; // Replace with actual image path

export const metadata = {
  title: "Empowering the Youngest Voices: Legal Awareness on Child Rights",
  description:
    "Subhashish Kumar leads a legal awareness session for children under the POCSO Act as part of a grassroots initiative with Sahaj Nyay, Neev Foundation, and UDAAR Foundation.",
};

export default function BlogPost({ params }) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Sahaj Nyay</Link> /{' '}
        <Link href="/team">Subhashish</Link> /{' '}
        <Link href="/">Child Rights</Link> /{' '}
        <span>Empowering the Youngest Voices</span>
      </nav>

      <h1 className={styles.title}>
        Empowering the Youngest Voices: Legal Awareness on Child Rights
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
        <span className={styles.category}>Child Rights</span>
        <span style={{ color: 'red' }}>|</span>
        <time className={styles.date}>July 6, 2024</time>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={childRightsImage}
          alt="Child Rights Awareness Session"
          width={800}
          height={400}
          className={styles.mainImage}
        />
      </div>

      <div style={{ textAlign: 'justify' }}>
        <h3 className={styles.contentHeader}>Introduction</h3>
        <p className={styles.content}>
          At Sahaj Nyay, we believe that access to justice begins with awareness—and sometimes, the most powerful impact starts with a simple conversation. On July 6, 2024, our co-founder Subhashish Kumar led a transformative legal awareness session in collaboration with Neev Foundation for Legal Aid and UDAAR Foundation, as part of the “Breaking Barriers, Building Futures” initiative.
        </p>

        <h3 className={styles.contentHeader}>Event Overview</h3>
        <p className={styles.content}>
          Held in Gram Sorkha, Noida, this community-driven event brought together children under the age of 13—many from marginalized and underserved backgrounds—for a crucial discussion about their rights under the Protection of Children from Sexual Offences (POCSO) Act, 2012.
        </p>

        <p className={styles.content}>
          Subhashish’s session was clear, interactive, and age-appropriate. He discussed the concepts of good touch and bad touch, how to recognize inappropriate behavior, and most importantly, how children can seek help and protection under the law. The environment was safe and respectful, making the session not just informative, but deeply empowering.
        </p>

        <blockquote className={styles.content}>
          "Every child deserves to know that their body is their own, and that the law exists to protect them," said Subhashish. "Legal literacy should not be reserved for adults—it must start early, and it must be grounded in trust."
        </blockquote>

        <h3 className={styles.contentHeader}>Initiative Background</h3>
        <p className={styles.content}>
          This initiative is part of a larger three-month campaign by Neev Foundation, running from April to June 2024, aiming to raise awareness across Noida and Greater Noida. The campaign collaborates with eight women’s and children’s rights NGOs to conduct legal sessions on:
        </p>
        <ul style={{ lineHeight: '30px', marginLeft: '20px' }}>
          <li>POCSO and child rights</li>
          <li>Domestic violence laws</li>
          <li>Workplace sexual harassment laws (POSH)</li>
        </ul>

        <p className={styles.content}>
          Subhashish’s contribution focused on child rights—an area he has long championed through Sahaj Nyay. Beyond the awareness session, he also volunteered during the community legal camp that followed, addressing various legal concerns raised by parents and local residents.
        </p>

        <h3 className={styles.contentHeader}>Local Engagement</h3>
        <p className={styles.content}>
          The event was promoted with a poster in Hindi, inviting local families to learn about their legal rights in a language and setting they could relate to. Subhashish’s hands-on engagement helped demystify complex legal topics and offer real-life guidance in a compassionate way.
        </p>

        <h3 className={styles.contentHeader}>Conclusion</h3>
        <p className={styles.content}>
          This grassroots effort is a reflection of Sahaj Nyay’s broader mission: making justice simple, approachable, and community-centered. Whether in courtrooms or local communities, Subhashish Kumar embodies the belief that the law is not just a system—it is a service. By educating children about their rights, we don’t just protect them—we empower them to protect themselves.
        </p>

        <p className={styles.content}>
          <strong>Location:</strong> Gram Sorkha, Sector 115, Noida, Uttar Pradesh<br />
          <strong>Date:</strong> July 6, 2024<br />
          <strong>Time:</strong> 2:30 PM to 5:00 PM
        </p>
      </div>
    </article>
  );
}
