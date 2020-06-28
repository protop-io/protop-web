import { DocsPage } from "../../../../components/Docs/DocsPage";
import { MenuItem } from "../../../../components/Docs/DocsMenu";
import Head from "next/head";
import { Section } from "../../../../components/Section";
import { Code } from "../../../../components/Code";

const Introduction = () => (
  <Section>
    <h1>
      protop Gradle Plugin
    </h1>
    <p>
      The protop Gradle plugin makes it easier to use protop in Gradle projects.
      You still need protop installed and a valid <code>protop.json</code>, but the Gradle plugin simplifies the rest of your project's integration with protop.
    </p>
  </Section>
)

const Installation = () => (
  <Section>
    <h2>Install</h2>
    <p>The Gradle plugin is added as a buildscript dependency:</p>
    <Code language={"groovy"} code={`buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath "io.protop:protop-gradle-plugin:<current version>"
    }
}`} />

    <p>Apply the plugin, and customize the options:</p>
    <Code language={"groovy"} code={`apply plugin: "io.protop"
protop {
    useLinks = true
    refreshGitSources = true
}`} />

    <p>
      Add the protop path to your sources.
      Without this plugin, you'd do the same but with the raw path.
      Here, the plugin provides that value as a variable:
    </p>
    <Code language={"groovy"} code={`sourceSets {
    main {
        proto {
            srcDirs += protop.path
        }
    }
}`} />

    <p>
      Finally, have the
      {' '}<a href="https://github.com/google/protobuf-gradle-plugin">Protobuf plugin</a>{' '}
      depend on the <code>protopSync</code> task:
    </p>
    <Code language={"groovy"} code={`protobuf {
    // ...
    generateProtoTasks {
        all().each { task ->
            task.dependsOn { protopSync }
        }
    }
}`} />
  </Section>
)

const Example = () => (
  <Section>
    <p>You can find an example of this in the
      {' '}<a href="https://github.com/protop-io/numbers-service">Java implementation</a>{' '}
      of a simple service from
      {' '}<a href="https://medium.com/@jefferyshivers/create-a-public-api-with-grpc-ade4a8bfd1fc">this tutorial</a>.
    </p>
  </Section>
)

export default () => (
  <DocsPage currentMenuItem={MenuItem.GRADLE_PLUGIN}>
    <Head>
      <title>protop Gradle Plugin</title>
    </Head>
    <Introduction />
    <Installation />
    <Example />
  </DocsPage>
)
