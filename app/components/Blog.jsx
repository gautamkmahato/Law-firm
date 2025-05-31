'use client'

import styles from './BlogPostGrid.module.css'
import BlogCard from './BlogCard'
import profile1 from '../public/assets/profile1.jpg'
import image from '../public/assets/blog-1.jpg'
import law1 from '../public/assets/law1.jpeg'
import law2 from '../public/assets/law2.jpeg'
import law3 from '../public/assets/law3.jpeg'
import law4 from '../public/assets/law4.jpeg'
import law5 from '../public/assets/law5.jpeg'
import law7 from '../public/assets/law7.jpeg'
import law8 from '../public/assets/law8.jpeg'
import law9 from '../public/assets/child.jpeg' // New image placeholder for child rights session
import law10 from '../public/assets/child.jpeg' // New image placeholder for customs article

export default function BlogPostGrid() {
  return (
    <div className={styles.blogSection}>
      <div className={styles.grid}>
        <BlogCard
          id="1"
          image={image}
          title="What You Need to Know About Section 35(3) of the BNSS (Erstwhile Section 41A notice under CrPC)"
          category="Law"
          url="What-You-Need-to-Know-About-Section-35(3)-of-the-BNSS"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='20 Dec 2024'
          excerpt="Understanding Section 35(3) of the Bhartiya Nyaya Suraksha Sanhita (BNSS), which replaced the erstwhile Section 41A of the CrPC is essential..."
        />

        <BlogCard
          id="2"
          image={law1}
          title="What is a Legal Notice? A Simple Guide"
          category="Law"
          url="What-is-a-legal-notice-a-simple-guide"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='21 Dec 2024'
          excerpt="A legal notice is a formal written communication that informs a recipient about a legal issue or complaint..."
        />

        <BlogCard
          id="3"
          image={law3}
          title="Rights of an Employee against an Employer under the new Labour Codes"
          category="Law"
          url="Rights-of-an-Employee-against-an-Employer-under-the-new-Labour-Codes"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='24 Dec 2024'
          excerpt="In order to promote ease of doing business in India, streamline workforce interests, and improve working conditions..."
        />

        <BlogCard
          id="4"
          image={law2}
          title="Right of an Arrested Person under Bhartiya Nyaya Suraksha Sanhita 2023"
          category="Law"
          url="Right-of-an-arrested-person-under-bhartiya-nyay-suraksha-sanhita-2023"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='25 Dec 2024'
          excerpt="The Constitution provides that no person shall be deprived of life or liberty except by law. Here's what that means for arrested persons..."
        />

        <BlogCard
          id="5"
          image={law4}
          title="Importance of Mental Health Laws in India"
          category="Law"
          url="Importance-of-mental-health-laws-in-India"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='27 Dec 2024'
          excerpt="Mental health issues have often been stigmatized. The Mental Health Care Act, 2017, is a key step toward legal protection..."
        />

        <BlogCard
          id="6"
          image={law5}
          title="All You Need to Know About Compliances for Newly Incorporated Companies"
          category="Law"
          url="Compliances-for-newly-incorporated-companies"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='31 Dec 2024'
          excerpt="To ensure smooth functioning of a new company, it's vital to follow legal and operational compliances. Here's a guide..."
        />

        <BlogCard
          id="7"
          image={law7}
          title="What to Do When Your Company Is Struck Off by the ROC"
          category="Law"
          url="What-to-Do-When-Your-Company-Is-Struck-Off-by-the-ROC"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='9 Jan 2025'
          excerpt="A company being struck off by the Registrar of Companies can have serious legal consequences. Learn your options..."
        />

        <BlogCard
          id="8"
          image={law8}
          title="Encounter Over Suspicion and Not Thorough Investigation"
          category="Law"
          url="Encounter-over-suspicion-and-not-thorough-investigation"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='11 Jan 2025'
          excerpt="Encounters over suspicion are often extra-judicial killings. This article examines legal and constitutional concerns..."
        />

        <BlogCard
          id="9"
          image={law9}
          title="Empowering the Youngest Voices: Legal Awareness Session on Child Rights"
          category="Law"
          url="Empowering-the-Youngest-Voices-Subhashish-Kumar-Co-Founder-Sahaj-Nyay-Leads-Legal-Awareness-Session-on-Child-Rights"
          authorImage={profile1}
          authorName='Subhashish Kumar'
          date='20 May 2025'
          excerpt="Held in Gram Sorkha, Noida, this session focused on child rights under the POCSO Act, empowering children to protect themselves..."
        />

        <BlogCard
          id="10"
          image={law10}
          title="Extra-Territorial Application of Customs Act, 1962"
          category="Law"
          url="Extra-territorial-application-of-Customs-Act-1962"
          authorImage={profile1}
          authorName='Anamika Mishra'
          date='18 Feb 2023'
          excerpt="The 2018 amendment to Section 1(2) of the Customs Act introduces extra-territorial jurisdiction. Here's a deep dive into its scope..."
        />
      </div>
    </div>
  )
}
