import Image from 'next/image'
import styles from './WhySection.module.css'
import image1 from '../public/assets/v10.PNG'

export default function WhySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* <h1 className={styles.title}>Why choose us</h1> */}
        <div className={styles.content}>
          <div className={styles.images}>
            <Image
              src={image1}
              alt="Construction workers on a roof"
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <p className={styles.date}>CskLegal</p>
            <h3 className={styles.subtitle}>Why Choose Us</h3>
            <p className={styles.paragraph}>
              Our lawyers bring years of experience and deep knowledge across diverse legal 
              fields. We pride ourselves on staying updated with the latest legal developments 
              to offer you cutting-edge solutions.
              Your needs come first. We provide personalized strategies tailored to your unique 
              circumstances, ensuring clarity and transparency throughout the legal process.
              With a strong track record of successful cases and satisfied clients, 
              we are committed to achieving the best possible outcomes for you.
              We value your trust by offering responsive communication, timely updates, 
              and unwavering dedication to your case.
              <br />
              Choose us for trusted legal excellence!
            </p>
            <button className={styles.button}>READ MORE</button>
          </div>
        </div>
      </div>
    </section>
  )
}