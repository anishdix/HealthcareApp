import React from 'react'
import styles from "./Blogs.module.css"
import BlogCard from "../../Assets/Blogs/BlogCard.png"
const Blogs = () => {
  return (
    <div className={styles.BlogsContainer}>
      <div>
        <span style={{color:"rgba(42, 167, 255, 1)"}}>Blogs & News</span>
        <h1 className={styles.BlogsHeading}>Read Our Latest News</h1>
      </div>
      <div className={styles.BlogCards}>
        <div className={styles.BlogCard}>
            <img src={BlogCard} alt="BlogCard"   />
        </div>
        <div className={styles.BlogCard}>
            <img src={BlogCard} alt="BlogCard"  />
        </div>
        <div className={styles.BlogCard}>
        <img src={BlogCard} alt="BlogCard"  />
        </div>
      </div>
    </div>
  )
}

export default Blogs
