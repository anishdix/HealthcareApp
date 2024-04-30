import React from 'react'
import styles from "./Announcement.module.css"
const Announcement = () => {
  return (
    <div className={styles.announcementContainer}>
      <p className={styles.announcementText}>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
    </div>
  )
}

export default Announcement
