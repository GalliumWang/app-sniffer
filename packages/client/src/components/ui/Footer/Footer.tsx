import React from 'react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.container}>
      <span>
        <a href="#" target="_blank" rel="noopener" className={styles.link}>源代码</a>
      </span>
      <span className={styles.bull}>
        <a href="#" target="_blank" rel="noopener" className={styles.link}>工作原理</a>
      </span>
    </footer>
  )
}