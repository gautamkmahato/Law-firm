import { PenTool, Code, Megaphone, MessageCircle, CreditCard, HelpCircle } from 'lucide-react'
import styles from "./ServiceSection.module.css"

export default function ServiceSection() {
  const services = [
    {
      icon: PenTool,
      title: "Corporate Law",
      description: "Whether you're starting a new business, managing corporate governance, or navigating complex mergers and acquisitions, we provide strategic guidance and robust legal solutions to protect and grow your enterprise."
    },
    {
      icon: Code,
      title: "Family Law",
      description: "Family matters require a compassionate and knowledgeable approach. From divorce and custody arrangements to prenuptial agreements, our team is here to support you through every aspect of family law with sensitivity and expertise."
    },
    {
      icon: Megaphone,
      title: "Real Estate Law",
      description: "Real estate transactions, whether residential or commercial, can be complicated. We assist with property purchases, leasing agreements, and disputes, ensuring your interests are protected every step of the way."
    },
    {
      icon: MessageCircle,
      title: "Employment Law",
      description: "Navigating employment regulations can be challenging for both employees and employers. We provide counsel on workplace disputes, contracts, discrimination cases, and more, advocating for fair and compliant practices."
    },
    {
      icon: CreditCard,
      title: "Personal Injury Law",
      description: "If you or a loved one has been injured due to someone else’s negligence, we can help you seek the compensation you deserve. Our personal injury attorneys handle cases ranging from car accidents to workplace injuries with compassion and commitment."
    },
    {
      icon: HelpCircle,
      title: "Estate Planning",
      description: "Protect your legacy and provide for your loved ones with our estate planning services. We offer guidance on wills, trusts, probate, and other tools to help you plan for the future with confidence."
    }
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How can we help you?</h2>
          <p className={styles.subtitle}>
          At Sahaj Nyay, we are dedicated to offering comprehensive legal support across a variety of practice areas. Our experienced team is here to provide guidance, advocacy, and solutions tailored to your unique needs. Explore our key service areas below to see how we can help you.
          </p>
        </div> 
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}