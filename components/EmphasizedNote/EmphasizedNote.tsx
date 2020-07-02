import { PropsWithChildren } from "react";
import styles from "./styles.module.css"

export default ({ children }: PropsWithChildren<{}>) => (
  // THe outer div fixes a strange DOM bug where the inner div was being duplicated. 🤷‍♂️
  <div>
    <div className={styles.note}>
      {children}
    </div>
  </div>
)
