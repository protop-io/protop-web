import styles from "./styles.module.css"

export default function(props) {
  return (
    <div role="banner" className={styles.banner}>
      {props.children}
    </div>
  )
}
