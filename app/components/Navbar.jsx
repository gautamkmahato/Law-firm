"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'
import IconWithText from './IconWithText'

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <IconWithText />
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li className={`${styles.navLinksList} ${styles.navLinksListMobile}`}>
            <Link href="/" className={styles.navLink} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navLinksList}>
            <Link href="/about" className={styles.navLink} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className={styles.navLinksList}>
            <Link href="/team" className={styles.navLink} onClick={toggleMenu}>
              Team
            </Link>
          </li>
          <li className={styles.navLinksList}>
            <Link href="/articles" className={styles.navLink} onClick={toggleMenu}>
              Articles
            </Link>
          </li>
          {/* <li className={styles.navLinksList}>
            <Link href="/" className={styles.navLink} onClick={toggleMenu}>
              Services
            </Link>
          </li> */}
          <li className={styles.mobileButton}>
          <Link href="/contact" className={styles.button}>
            Contact Us
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
