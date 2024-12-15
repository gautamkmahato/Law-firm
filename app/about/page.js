import styles from './page.module.css'
import WhySection from '../components/WhySection'

export default function About() {
  return (
    <>
        <section className={styles.aboutUs}>
            <div className={styles.overlay}>
                <h1 className={styles.title}>About Us</h1>
                <h2 className={styles.subtitle}>Welcome to The Sahaj Nyay</h2>
                <p className={styles.description}>
                    At Sahaj Nyay, we are dedicated to providing personalized, high-quality legal 
                    services with a focus on integrity, diligence, and results. Let us help you 
                    secure the justice and peace of mind you deserve.
                </p>
                <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Who Are We</h3>
                    <div className={styles.cardBar}></div>
                    <p className={styles.cardText}>
                    We are a dedicated law firm driven by excellence, committed to providing 
                    personalized legal solutions. Our experienced team combines deep expertise 
                    and compassion to guide individuals and businesses through complex legal 
                    challenges with integrity and professionalism.
                    </p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Our Mission</h3>
                    <div className={styles.cardBar}></div>
                    <p className={styles.cardText}>
                    Our mission is to empower clients with expert legal guidance, 
                    ensuring justice and fairness. We strive to build lasting relationships 
                    by delivering reliable, ethical, and results-oriented services that 
                    uphold the law and foster trust within our community.
                    </p>
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>What We Do</h3>
                    <div className={styles.cardBar}></div>
                    <p className={styles.cardText}>
                        We offer comprehensive legal services including corporate law, 
                        family law, litigation, and dispute resolution. By understanding 
                        your unique needs, we deliver strategic advice, representation, 
                        and tailored solutions to protect your rights and achieve desired 
                        outcomes.
                    </p>
                </div>
                </div>
            </div>
        </section>
        <WhySection />
    </>
  )
}