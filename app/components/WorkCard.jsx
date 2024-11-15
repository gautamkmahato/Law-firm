'use client'

import styles from "./ServiceSection.module.css"

export default function WorkCard({Icon, index, title, description }){
    return( 
        <>
            <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {/* <Icon className={styles.icon} /> */}
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardText}>{description}</p>
            </div>
        </>
    )
}