"use client"

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo and Description */}
          <div>
            <div className={styles.logo}>
              <Globe className="h-6 w-6" />
              SAHAJ NYAY
            </div>
            <p className={styles.description}>
            At Sahaj Nyay, We are here to protect your rights, secure your interests, 
            and achieve the results you deserve.
            </p>
            <div className={styles.socialLinks}>
              <Link href="#" className={styles.socialLink}>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className={styles.socialLink}>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className={styles.socialLink}>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className={styles.socialLink}>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className={styles.heading}>Company</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/blog" className={styles.link}>
                  Articles
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h3 className={styles.heading}>Business</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/service" className={styles.link}>
                    Services
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/team" className={styles.link}>
                    Our Team
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/testimonial" className={styles.link}>
                    Testimonials
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/customer" className={styles.link}>
                  Customers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className={styles.heading}>Get In Touch</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Rt. 66, Downtown, GB Road, Delhi
              </li>
              <li className={styles.listItem}>
                <Link href="info@example.com" className={styles.link}>
                  info@example.com
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="tel:+91-800-1234-567" className={styles.link}>
                  +91-800-1234-567
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="tel:+91 987-654-3210" className={styles.link}>
                  +91 987-654-3210
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          Copyright © 2024 SAHAJ NYAY
        </div>
      </div>
    </footer>
  )
}