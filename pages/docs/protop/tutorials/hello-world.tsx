import { DocsPage } from "../../../../components/Docs/DocsPage"
import { Section } from "../../../../components/Section"
import { MenuItem } from "../../../../components/Docs/DocsMenu"
import EmphasizedNote from "../../../../components/EmphasizedNote/EmphasizedNote"
import Head from "next/head"

export default () => (
  <DocsPage
    title={`protop "Hello World" Tutorial`}
    description="Learn how to use protop in a minimal Hello World project."
    currentMenuItem={MenuItem.HELLO_WORLD_TUTORIAL}>
    <Section>
      <h1>Hello World</h1>
      <EmphasizedNote>
        <em>Coming Soon!</em> For now, checkout{" "}
        <a href="https://medium.com/@jefferyshivers/create-a-public-api-with-grpc-ade4a8bfd1fc">the original tutorial</a>.
      </EmphasizedNote>
    </Section>
  </DocsPage>
)
