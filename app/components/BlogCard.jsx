'use client'

import Image from 'next/image'
import styles from './BlogPostGrid.module.css'
import profile1 from '../public/assets/profile1.jpg'
import image1 from '../public/assets/v4.PNG'
import Link from 'next/link'

export default function BlogCard({id, imageSrc, title, category, authorImage, authorName, date, excerpt}) {
    return (
        <div key={id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={image1} alt={title} layout="fill" objectFit="cover" />
              <span className={styles.category}>{category}</span>
            </div>
            <div className={styles.content}>
              <div className={styles.authorInfo}>
                <Image src={profile1} alt={authorName} width={40} height={40} className={styles.avatar} />
                <span className={styles.authorName}>{authorName}</span>
                <span className={styles.date}>{date}</span>
              </div>
              <Link href={`/blog/${title}`}>
                <h2 className={styles.title}>{title}</h2>
              </Link>
              <p className={styles.excerpt}>{excerpt}</p>
              <div className={styles.actions}>
                <button className={styles.shareButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </button>
                <button className={styles.moreButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </button>
              </div>
            </div>
        </div>
    )
  }