import styles from './ComingSoon.module.css'

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon</h1>
        <p className={styles.description}>
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        {/* <form className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Notify Me
          </button>
        </form> */}
      </main>
    </div>
  )
}

