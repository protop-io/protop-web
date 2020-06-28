import styles from "./styles.module.css"

export const Section = (props) => (
  <section className={styles.section}>
    <div className={styles.sectionContent}>
      {props.children}
    </div>
  </section>
)
