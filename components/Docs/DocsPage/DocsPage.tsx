import { Page } from "../../Page"
import { DocsMenu, MenuItem } from "../DocsMenu"
import { PropsWithChildren } from "react"
import styles from "./styles.module.css"

export type DocsPageProps = {
  currentMenuItem?: MenuItem
}

export const DocsPage = ({ children, currentMenuItem }: PropsWithChildren<DocsPageProps>) => {
  return (
    <Page>
      <div className={styles.page}>
        <DocsMenu currentMenuItem={currentMenuItem} />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </Page>
  )
}
