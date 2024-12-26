'use client'

import styles from './BlogPostGrid.module.css'
import BlogCard from './BlogCard'
import profile1 from '../public/assets/profile1.jpg'
import image from '../public/assets/v4.PNG'

export default function BlogPostGrid() {
  return (
    <>
        <div className={styles.blogSection}>
            <div className={styles.grid}>
            <BlogCard 
                id="3"
                image={image}
                title="What You Need to Know About Section 35(3) of the BNSS (Erstwhile Section 41A notice under CrPC)"
                category="Law"
                authorImage={profile1} 
                authorName='Shubashish Kumar' 
                date='26 Dec 2024'
                excerpt="What You Need to Know About Section 35(3) of the BNSS (Erstwhile Section 41A notice under CrPC)"
            />

            </div>
        </div>
    </>
  )
}