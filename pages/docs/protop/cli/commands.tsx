import Link from "next/link";
import Head from "next/head";
import { Section } from "../../../../components/Section";
import { PropsWithChildren, Fragment } from "react";
import { DocsPage } from "../../../../components/Docs/DocsPage";
import { MenuItem } from "../../../../components/Docs/DocsMenu";
import { Code } from "../../../../components/Code";
import styles from "./styles.module.css"

type CommandProps = {
  title: string
  description: JSX.Element | string
  usage: string
}

const Subcommand = ({ title, description, usage }: CommandProps) => (
  <div className={styles.subcommand}>
    <h4>{title}</h4>
    <p>{description}</p>
    <h5>Usage</h5>
    <Code code={usage} language={"bash"} />
  </div>
)

const Subcommands = ({ children }: PropsWithChildren<{}>) => (
  <Fragment>
    <h3>Subcommands</h3>
    {children}
  </Fragment>
)

const Command = ({ title, description, usage, children }: PropsWithChildren<CommandProps>) => (
  <div className={styles.command}>
    <h2>{title}</h2>
    <p>{description}</p>
    <h3>Usage</h3>
    <Code code={usage} language={"bash"} />
    {children}
  </div>
)

const Help = () => (
  <Command
    title="help"
    description="Displays help information about the specified command."
    usage={`protop help`} />
)

const Init = () => (
  <Command
    title="init"
    description="Initialize a protop project (generates a protop.json)."
    usage={`protop init [<projectPath>]`} />
)

const LinkCmd = () => (
  <Command
    title="link"
    description="Link a local project."
    usage={`protop link [<directory>]`} />
)

const Unlink = () => (
  <Command
    title="unlink"
    description="Unlink a local project."
    usage={`protop unlink`} />
)

const Links = () => (
  <Command
    title="links"
    description="Manipulate the system-wide linked projects."
    usage={`protop links [COMMAND]`}>
    <Subcommands>
      <Subcommand title="Clean" description="Unlink all currently linked projects." usage={`protop links clean`} />
      <Subcommand title="List" description="List all currently linked projects." usage={`protop links list`} />
    </Subcommands>
  </Command>
)

const Sync = () => (
  <Command
    title="sync"
    description="Sync project dependencies."
    usage={`protop sync [-g[=<refreshGitSources>]] [-l[=<includeLinkedDependencies>]] [-r[=<registry>]]`} />
)

const Cache = () => (
  <Command
    title="cache"
    description="Manipulate the system-wide cache."
    usage={`protop cache [COMMAND]`}>
    <Subcommands>
      <Subcommand title="Clean" description="Delete everything from the cache." usage={`protop cache clean`} />
    </Subcommands>
  </Command>
)

const Commands = () => (
  <Section>
    <h1>CLI Commands</h1>
    <p>
      With protop <Link href="/#install"><a>installed</a></Link>, you can use the command-line interface to build your projects.
      Running <code>protop</code> without any arguments is synonymous with running the <code>help</code> subcommand.
    </p>

    <Code code={`$ protop
             _
 ___ ___ ___| |_ ___ ___
| . |  _| . |  _| . | . |
|  _|_| |___|_| |___|  _|
|_|                 |_|

Usage: protop [-dv] [COMMAND]
...
  -d, --debug      Turn on debug logs.
  -v, --revision   Print the current revision of protop.
Commands:
...`} language={"bash"} />

    <Help />
    <Init />
    <LinkCmd />
    <Unlink />
    <Links />
    <Sync />
    <Cache />
  </Section>
)

export default () => {
  return (
    <DocsPage currentMenuItem={MenuItem.CLI_COMMANDS}>
      <Head>
        <title>protop CLI Documentation</title>
      </Head>
      <Commands />
    </DocsPage>
  )
}
