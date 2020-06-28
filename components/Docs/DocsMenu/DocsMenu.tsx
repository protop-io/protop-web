import styles from "./styles.module.css"
import Link from "next/link"
import cx from "classnames"
import { PropsWithChildren } from "react"

export enum MenuItem {
  DOCS_HOME,
  CLI_INSTALL,
  CLI_COMMANDS,
  PROTOP_JSON,
  GRADLE_PLUGIN,
  HELLO_WORLD_TUTORIAL
}

type MenuItemLinkGroupProps = {
  title: string
}

const MenuItemLinkGroup = ({ title, children }: PropsWithChildren<MenuItemLinkGroupProps>) => (
  <div className={styles.menuItemGroup}>
    <h3 className={styles.menuItemGroupTitle}>{title}</h3>
    {children}
  </div>
)

type MenuItemLinkProps = {
  variant: MenuItem
  href: string
  text: string
}

const MenuItemLinkFactory = (currentMenuItem?: MenuItem) => ({ variant, href, text }: MenuItemLinkProps) => {
  return (
    <Link href={href}>
      <a>
        <div className={cx(styles.menuItem, {
          [styles.currentMenuItem]: (currentMenuItem === variant)
        })}>{text}</div>
      </a>
    </Link>
  )
}

export type DocsMenuProps = {
  currentMenuItem?: MenuItem
}

export const DocsMenu = ({ currentMenuItem }: DocsMenuProps) => {
  const MenuItemLink = MenuItemLinkFactory(currentMenuItem)
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <MenuItemLink variant={MenuItem.DOCS_HOME} href={"/docs/protop"} text={"Docs Home"} />

          <MenuItemLinkGroup title="Command-Line Interface">
            <MenuItemLink variant={MenuItem.CLI_INSTALL} href={"/docs/protop/cli/install"} text={"Install"} />
            <MenuItemLink variant={MenuItem.CLI_COMMANDS} href={"/docs/protop/cli/commands"} text={"Commands"} />
            <MenuItemLink variant={MenuItem.PROTOP_JSON} href={"/docs/protop/cli/protop.json"} text={"protop.json"} />
          </MenuItemLinkGroup>

          <MenuItemLinkGroup title="External Plugins">
            <MenuItemLink variant={MenuItem.GRADLE_PLUGIN} href={"/docs/protop/gradle-plugin"} text={"Gradle Plugin"} />
          </MenuItemLinkGroup>

          <MenuItemLinkGroup title="Tutorials">
            <MenuItemLink variant={MenuItem.HELLO_WORLD_TUTORIAL} href={"/docs/protop/tutorials/hello-world"} text={"Hello World"} />
          </MenuItemLinkGroup>
        </li>
      </ul>
    </nav>
  )
}
