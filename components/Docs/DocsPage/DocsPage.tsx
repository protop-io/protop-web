import { Page } from "../../Page"
import { DocsMenu, MenuItem } from "../DocsMenu"
import { PropsWithChildren } from "react"
import styles from "./styles.module.css"

export type DocsPageProps = PropsWithChildren<{
  currentMenuItem?: MenuItem
  title: string
  description: string
}>

export const DocsPage = ({ title, description, children, currentMenuItem }: DocsPageProps) => {
  return (
    <Page title={title} description={description}>
      <div className={styles.page}>
        <DocsMenu currentMenuItem={currentMenuItem} />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </Page>
  )
}
