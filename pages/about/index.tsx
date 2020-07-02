import { Page } from "../../components/Page";
import styles from "./styles.module.css"
import { Section } from "../../components/Section";
import { GRPCConf2020Banner } from "../../components/GRPCConf2020Banner";
import EmphasizedNote from "../../components/EmphasizedNote/EmphasizedNote";
import { Code } from "../../components/Code";

const Mission = () => (
  <Section>
    <EmphasizedNote>
      protop is open-sourced and focused on a simple mission:{' '}
      <em>to make APIs easier to create and use</em>.
    </EmphasizedNote>
    <div className={styles.logoContainer}>
      <img src="/logo.png" className={styles.logo} />
    </div>
  </Section>
)

const History = () => (
  <Section>
    <h2 id="history">
      History
    </h2>
    <p>
      The project started with the problem of sharing protobufs between codebases.
      Inspired by popular mainstream package managers like NPM and Maven as well as prominent tools like Gradle and Git,
      protop first materialized in mid 2019 as a small proof-of-concept.
  </p>
  </Section>
)

const Roadmap = () => (
  <Section>
    <h2 id="roadmap">Roadmap</h2>
    <p>
      We have a rather amibtious roadmap (the only thing missing is a timeline 🤓).
      Here are some of the next steps for the project in no particular order.
    </p>

    <h3>Production Registry</h3>
    <p>
      One of the major goals for version 1.0 is to be able to publish packages and retrieve from a dedicated production registry.
      This would mean that we can provide better solutions for packages such as searching and online documentation.
    </p>
    <p>
      It won't be any different than a typical package manager from this perspective, with the exception that it will be implemented in gRPC.
      It also means a more centralized way of retrieving protos that are in the registry simply by version number, a la:
      <Code language="json" code={`{
  "dependencies": {
    "awesomelabs/awesome-protos": "1.2.3-alpha"
  }
}`} />
    </p>

    <h3>Version 1.0 Release</h3>
    <p>
      To get to 1.0, we first need to figure out what that means (e.g. does that definitely include the production registry? Do we want broader plugin support first?).
      It is unclear what the timeline will look like considering the small number of developer on the project at this time (ahem, <i>one</i>), but even creating issues on Github or providing general feedback are both ways of helping us figure out what needs to happen.
    </p>

    <h3>Installation Options</h3>
    <p>
      This is maybe the most important TODO for now. Currently, installation options are limited to Homebrew and directly from the source.
      That's not ideal.
      We know there are other systems and package managers out there, and we want people to be able to use their favorite one to install protop.
    </p>

    <h3>External Plugins</h3>
    <p>
      What we mean by this are plugins to external tools (like NPM or Gradle) that make protop easier to use in specific contexts.
      Similar to how the <a href="https://github.com/protocolbuffers/protobuf">protoc compiler</a> has supporting wrappers for using with NPM, Gradle, Python, etc., we want to provide the same level of ease for developers using protop.
    </p>

    <h3>Tutorials</h3>
    <p>
      It would be good to have examples in most languages supported by protobufs.
      We'd also like to demonstrate using <em>protop</em> with popular build tools in those languages.
      As with the Gradle plugin (which was inspired after the original tutorial was written), these examples could be opportunities to shed light on new features.
    </p>
  </Section>
)

const Contribute = () => (
  <Section>
    <h2 id="contribute">Contribute</h2>
    <p>
      If you see something that interests you in the roadmap or want to contribute to the existing codebase, <em>protop</em> is always looking for more contributors.
      The <a href="https://github.com/protop-io/protop/issues">GitHub issues page</a> is another place to find potential work to do.
      If you still don't see something but want to be involved, feel free to contact us.
  </p>
  </Section>
)

const Contact = () => (
  <Section>
    <h2 id="contact">Contact Us</h2>
    <p>You can reach the protop team at <a href="mailto:info@protop.io">info@protop.io</a>.</p>
  </Section>
)

export default () => {
  return (
    <Page
      title="About protop"
      description="Read about protop, the package manager for protobufs."
      beforeNavBar={<GRPCConf2020Banner />}>
      <main>
        <Mission />
        <History />
        <Roadmap />
        <Contribute />
        <Contact />
      </main>
    </Page>
  )
}
