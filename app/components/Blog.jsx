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
                title="The Ultimate Guide To Reading"
                category="Lifestyle"
                authorImage={profile1} 
                authorName='Karen Doe' 
                date='28 Aug 2022'
                excerpt="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,..."
            />
            <BlogCard 
                id="3"
                image={image}
                title="The Ultimate Guide To Reading"
                category="Lifestyle"
                authorImage={profile1} 
                authorName='Karen Doe' 
                date='28 Aug 2022'
                excerpt="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,..."
            />
            <BlogCard 
                id="3"
                image={image}
                title="The Ultimate Guide To Reading"
                category="Lifestyle"
                authorImage={profile1} 
                authorName='Karen Doe' 
                date='28 Aug 2022'
                excerpt="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,..."
            />
            <BlogCard 
                id="3"
                image={image}
                title="The Ultimate Guide To Reading"
                category="Lifestyle"
                authorImage={profile1} 
                authorName='Karen Doe' 
                date='28 Aug 2022'
                excerpt="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,..."
            />
            <BlogCard 
                id="3"
                image={image}
                title="The Ultimate Guide To Reading"
                category="Lifestyle"
                authorImage={profile1} 
                authorName='Karen Doe' 
                date='28 Aug 2022'
                excerpt="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,..."
            />
            </div>
        </div>
    </>
  )
}