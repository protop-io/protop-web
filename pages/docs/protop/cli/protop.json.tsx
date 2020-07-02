import { DocsPage } from "../../../../components/Docs/DocsPage";
import { Section } from "../../../../components/Section";
import { MenuItem } from "../../../../components/Docs/DocsMenu";
import styles from "./styles.module.css"
import { PropsWithChildren } from "react";
import Head from "next/head";
import { Code } from "../../../../components/Code";

const Introduction = () => (
  <Section>
    <h1><code>protop.json</code></h1>
    <p>
      The <code>protop.json</code> file (also called the manifest) is created in your project's root directory when you initialize a project,
      but you can also just create it manually. An example of a manifest might look like this:
    </p>
    <Code language={"json"} code={`{
  "name": "awesome-protos",
  "version": "0.1.0",
  "organization": "awesomelabs",
  "dependencies": {
    "awesomelabs/numbers": "git:https://github.com/protop-io/numbers-protos@master",
    "awesomelabs/numbers-hub": "gh:protop-io/numbers-protos",
    "awesomelabs/numbers-bucket": "bb:protop-io/numbers-protos@feature/my-feature-branch",
    "awesomelabs/numbers-lab": "gl:protop-io/numbers-protos@development"
  }
}`} />
  </Section>
)

type PropertyProps = {
  name: string
  description: string
  required: boolean
  type: "string"
  | "number"
  | "boolean"
  | "object"
}

const JsonToken = (s: string) => <span className={styles.jsonToken}>{s}</span>

const Property = ({ name, description, required, type, children }: PropsWithChildren<PropertyProps>) => (
  <div className={styles.manifestProperty}>
    <h3 className={styles.manifestPropertyTitle}>
      {JsonToken(`"`)}
      {name}
      {JsonToken(`":`)}
    </h3>
    <div className={styles.manifestPropertyDetails}>
      <p className={styles.manifestPropertyDetail}>{description}</p>
      <p className={styles.manifestPropertyDetail}><em>Type:</em> {type}</p>
      <p className={styles.manifestPropertyDetail}><em>Required:</em> {required ? "true" : "false"}</p>
      {children && <div className={styles.manifestPropertyElaboration}>{children}</div>}
    </div>
  </div>
)

const Name = () => (
  <Property
    name="name"
    description="The project name."
    type="string"
    required={false} />
)

const Organization = () => (
  <Property
    name="organization"
    description="The project's organization id."
    type="string"
    required={false} />
)

const Version = () => (
  <Property
    name="version"
    description="The package version."
    type="string"
    required={false} />
)

const Dependencies = () => (
  <Property
    name="dependencies"
    description="External dependencies of the project."
    type="object"
    required={false}>
    <p>
      Dependencies can be required by name (e.g. <code>{`<`}name/organization{`>`}</code>) mapped to a specific git source.
    </p>

    <h4>Git Source</h4>
    <p>
      Any git repository can be a source if it contains a valid <code>protop.json</code> in its root directory. This requires the full URL of the repository, prefixed with "git".
      For example: <code>git:https://github.com/protop-io/numbers-protos</code>.
    </p>

    <h4>GitHub Source</h4>
    <p>
      A git repository hosted on GitHub can be used with the "gh" prefix and the repository path.
      For example: <code>gh:protop-io/numbers-protos</code>.
    </p>

    <h4>Bitbucket Source</h4>
    <p>
      A git repository hosted on Bitbucket can be used with the "bb" prefix and the repository path.
      For example: <code>bb:protop-io/numbers-protos</code>.
    </p>

    <h4>Gitlab Source</h4>
    <p>
      A git repository hosted on Gitlab can be used with the "gl" prefix and the repository path.
      For example: <code>gl:protop-io/numbers-protos</code>.
    </p>
  </Property>
)

const Manifest = () => (
  <Section>
    <h2>Properties</h2>
    <div className={styles.manifestContainer}>
      <div>{JsonToken(`{`)}</div>
      <Name />
      <Organization />
      <Version />
      <Dependencies />
      <div>{JsonToken(`}`)}</div>
    </div>
  </Section>
)

export default () => (
  <DocsPage
    title="protop.json"
    description="Learn about manifest files for protop projects."
    currentMenuItem={MenuItem.PROTOP_JSON}>
    <Introduction />
    <Manifest />
  </DocsPage>
)
