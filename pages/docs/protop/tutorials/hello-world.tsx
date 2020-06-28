import { DocsPage } from "../../../../components/Docs/DocsPage"
import { Section } from "../../../../components/Section"
import { MenuItem } from "../../../../components/Docs/DocsMenu"
import EmphasizedNote from "../../../../components/EmphasizedNote/EmphasizedNote"
import Head from "next/head"

export default () => (
  <DocsPage currentMenuItem={MenuItem.HELLO_WORLD_TUTORIAL}>
    <Head>
      <title>protop "Hello World" Tutorial</title>
    </Head>
    <Section>
      <h1>Hello World</h1>
      <EmphasizedNote>
        <em>Coming Soon!</em> For now, checkout{" "}
        <a href="https://medium.com/@jefferyshivers/create-a-public-api-with-grpc-ade4a8bfd1fc">the original tutorial</a>.
      </EmphasizedNote>
    </Section>
  </DocsPage>
)
