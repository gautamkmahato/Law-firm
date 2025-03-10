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

export default function BlogPostGrid() {
  return (
    <>
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
            excerpt="Understanding Section 35(3) of the Bhartiya Nyaya Suraksha Sanhita (BNSS), 
      which replaced the erstwhile Section 41A of the CrPC is essential, especially 
      if you or someone you know ever receives a notice from the police..."
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
            excerpt="A legal notice is a formal written communication that informs a recipient 
          about a legal issue or complaint. It is often sent by an individual, 
          corporation, or legal representative to another party, 
          outlining specific claims, demands, or intentions. ..."
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
            excerpt="In order to promote ease of doing business in India, 
                streamlining the interests of the workforce of the country, 
                reducing red-tapism of labour inspectors and improving working 
                conditions of workers and ease of compliance..."
          />

          <BlogCard
            id="4"
            image={law2}
            title="Right of an arrested person under bhartiya nyay suraksha sanhita 2023"
            category="Law"
            url="Right-of-an-arrested-person-under-bhartiya-nyay-suraksha-sanhita-2023"
            authorImage={profile1}
            authorName='Subhashish Kumar'
            date='25 Dec 2024'
            excerpt="The Constitution of India, often referred to as the supreme law of
          the country, provides under Article 21 that “No person shall be
          deprived of his life or personal liberty except according to a
          procedure established by law..."
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
            excerpt="Mental health issues have often been stigmatized in society. Over the
          years, Indian laws have evolved to address the rights and needs of
          individuals facing mental health challenges. The Mental Health Care
          Act, 2017, is a significant step..."
          />

          <BlogCard
            id="6"
            image={law5}
            title="All you need to know about “Compliances for Newly Incorporated Companies”"
            category="Law"
            url="Compliances for-newly-incorporated-companies"
            authorImage={profile1}
            authorName='Subhashish Kumar'
            date='31 Dec 2024'
            excerpt="To ensure the smooth and uninterrupted functioning of a newly 
            incorporated company, it's essential to adhere to various legal and 
            operational compliances. Here's a step-by-step guide to the most 
            critical tasks...."
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
            excerpt="Running a company comes with a set of legal and regulatory 
            responsibilities. One significant issue entrepreneurs may face is when 
            their company is struck off by the Registrar of Companies (ROC). 
            This action can have serious implications for the....."
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
            excerpt="Encounters over suspicion can be considered as extrajudicial 
            killings. Encounter cases are not new in India, but many raise 
            questions about the police's actions. Often termed 
            'extra-judicial killings' fake encounters involve..."
          />

        </div>
      </div>
    </>
  )
}