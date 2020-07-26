import styles from "./styles.module.css"

export const LoadingPage = () => (
  <div className={styles.loadingBackdrop}>
    <div className={styles.loadingSpinner}>
      <img className={styles.loadingImage} src="/p_logo_with_width.png" />
    </div>
  </div>
)
