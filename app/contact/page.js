import { Phone, Mail, Building2 } from 'lucide-react'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <section>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Phone className={styles.icon} size={24} />
            </div>
            <div className={styles.content}>
              <h3>Phone</h3>
              <p>+91-870-013-8883</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Mail className={styles.icon} size={24} />
            </div>
            <div className={styles.content}>
              <h3>E-Mail</h3>
              <p>subhashishk2@gmail.com</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Building2 className={styles.icon} size={24} />
            </div>
            <div className={styles.content}>
              <h3>Location</h3>
              <p>Delhi, INDIA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

