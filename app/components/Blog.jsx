'use client'

import styles from './BlogPostGrid.module.css'
import BlogCard from './BlogCard'
import profile1 from '../public/assets/profile1.jpg'
import image from '../public/assets/blog-1.jpg'

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
                image={image}
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
                image={image}
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
                image={image}
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

            </div>
        </div>
    </>
  )
}