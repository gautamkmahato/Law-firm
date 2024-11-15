import Image from 'next/image'
import Link from 'next/link'
import styles from './blogPost.module.css'
import profileImage from '../../public/assets/profile1.jpg'
import coverImage from '../../public/assets/v4.PNG'

export default function BlogPost({params}) {
  return (
    <article className={styles.blogPost}>
      <nav className={styles.breadcrumb}>
        <Link href="/katen-sites">Katen Sites</Link> /{' '}
        <Link href="/katen">Katen</Link> /{' '}
        <Link href="/lifestyle">Lifestyle</Link> /{' '}
        <span>How To Learn Everything About Construction</span>
      </nav>
      
      <h1 className={styles.title}>How To Learn Everything About Construction</h1>
      
      <div className={styles.meta}>
        <Image
          src={profileImage}
          alt="Katen Doe"
          width={40}
          height={40}
          className={styles.avatar}
        />
        <span className={styles.author}>Katen Doe</span>
        <span style={{color: "red"}}>|</span>
        <span className={styles.category}>Lifestyle</span>
        <span style={{color: "red"}}>|</span>
        <time className={styles.date}>August 30, 2022</time>
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
      
      <p className={styles.content}>
        The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar,
        their pronunciation and their most common words.
        The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar,
        their pronunciation and their most common words.
        The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar,
        their pronunciation and their most common words.
        The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar,
        their pronunciation and their most common words.
        The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar,
        their pronunciation and their most common words.
        The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar,
        their pronunciation and their most common words.
        The European languages are members of the same family. Their separate existence is a myth. For
        science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar,
        their pronunciation and their most common words.
      </p>
    </article>
  )
}