import { MenuItem } from "../../../../components/Docs/DocsMenu";
import Head from "next/head";
import { DocsPage } from "../../../../components/Docs/DocsPage";
import { Section } from "../../../../components/Section";
import Link from "next/link";
import { Fragment } from "react";
import { Code } from "../../../../components/Code";

const Homebrew = () => (
  <Fragment>
    <h3>Homebrew (Mac)</h3>
    <Code language={"bash"} code={`$ brew tap protop-io/protop
$ brew install protop`} />
  </Fragment>
)

const FromTheSource = () => (
  <Fragment>
    <h3>From the source (Mac/Linux/Windows)</h3>
    <Code language={"bash"} code={`$ git clone https://github.com/protop-io/protop.git
$ cd protop
$ ./install.sh`} />
  </Fragment>
)

const Installation = () => (
  <Section>
    <h1>CLI Installation</h1>
    <p>
      We are prioritizing adding more installation options to the mix.
      If you don't see a way that works for you out of the current list, please <Link href="/about#contact"><a>let us know</a></Link>.
    </p>

    <Homebrew />
    <FromTheSource />
  </Section>
)

export default () => (
  <DocsPage currentMenuItem={MenuItem.CLI_INSTALL}>
    <Head>
      <title>protop CLI Installation</title>
    </Head>
    <Installation />
  </DocsPage>
)
