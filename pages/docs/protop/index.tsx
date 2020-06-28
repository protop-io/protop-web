import { DocsPage } from "../../../components/Docs/DocsPage";
import { MenuItem } from "../../../components/Docs/DocsMenu";
import { Section } from "../../../components/Section";
import Link from "next/link";

export default function () {
  return (
    <DocsPage currentMenuItem={MenuItem.DOCS_HOME}>
      <Section>
        <h1>Docs</h1>

        <p>
          <em>protop</em> is an open-source tool for packaging protocol buffers.
          It is on a mission to make APIs created with protobufs easier to create and use.
        </p>

        <h2 id="getting-started">Getting started with protop</h2>
        <p>
          The first thing you need to start using protop is the program itself.
          It can be installed a number of different ways listed <Link href="/docs/protop/cli/install"><a>here</a></Link>.
        </p>

        <p>
          Then, learn about the different CLI commands
          {' '}<Link href="/docs/protop/cli/commands"><a>here in the docs </a></Link>{' '}
          or by running the <code>help</code> command.
        </p>

        <p>
          A good primer before starting your own project is to follow the
          {' '}<Link href="/docs/protop/tutorials/hello-world"><a>Hello World tutorial</a></Link>{' '}
          or the
          <a href="https://medium.com/@jefferyshivers/create-a-public-api-with-grpc-ade4a8bfd1fc">{' '}
            original article on Medium
          </a>.
        </p>

        <p>
          Once you have your own project up and running, share it with others so you can use the full power of protop (and protobufs) in collaboration.
        </p>
      </Section>
    </DocsPage>
  )
}
