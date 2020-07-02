import { Page } from '../components/Page'
import styles from './styles.module.css'
import Link from 'next/link';
import { Section } from '../components/Section';
import { GRPCConf2020Banner } from '../components/GRPCConf2020Banner';
import { Code } from '../components/Code';

const HeroBannerSection = () => (
  <section className={styles.banner}>
    <h1 className={styles.title}>
      Protobufs. Packaged.
    </h1>

    <p className={styles.description}>
      <em>protop</em> helps you
      organize protocol buffers into small, reusable packages and
      keep protos seperate from their implementations.
    </p>

    <div className={styles.bannerLinkContainer}>
      <Link href="/docs/protop#getting-started">
        <a>
          <button className={styles.bannerButton}>GET STARTED</button>
        </a>
      </Link>
    </div>
  </section>
)

const InstallSection = () => (
  <Section>
    <h2 id="install">Install</h2>
    <p>
      protop is offered as a standalone executable.
      You can install it using the instructions below (don't worry;{' '}
      <Link href="/about#roadmap">
        <a>we plan on adding more options</a>
      </Link>
      ).
    </p>

    <h3>Homebrew (Mac)</h3>
    <Code language={"bash"} code={`$ brew tap protop-io/protop
$ brew install protop`} />

    <h3>From the source (Mac/Linux/Windows)</h3>
    <Code language={"bash"} code={`$ git clone https://github.com/protop-io/protop.git
$ cd protop
$ ./install.sh`} />

    <p>See full installation options in the <Link href="/docs/protop/cli/install"><a>docs</a></Link>.</p>
  </Section>
)

const Explanation = () => (
  <Section>
  // TODO graphic explanation here...
  </Section>
)

const CardsSection = () => (
  <Section>
    <div className={styles.cards}>
      <a
        href="/docs/protop"
        className={styles.card}
      >
        <h3 className={styles.cardTitle}>Read the docs &rarr;</h3>
        <p className={styles.cardDescription}>Find in-depth information about protop features and the API.</p>
      </a>
      <a
        href="https://medium.com/@jefferyshivers/create-a-public-api-with-grpc-ade4a8bfd1fc"
        className={styles.card}
        target="_blank"
        rel="noopener"
      >
        <h3 className={styles.cardTitle}>Follow the tutorial &rarr;</h3>
        <p className={styles.cardDescription}>Read how to build a public API using gRPC with protop in under 10 minutes.</p>
      </a>
    </div>
  </Section>
)

export default () => {
  return (
    <Page
      title="protop"
      description="A package manager for protocol buffers."
      beforeNavBar={<GRPCConf2020Banner />}
    >
      <main>
        <HeroBannerSection />
        <InstallSection />
        {/* <Explanation /> */}
        <CardsSection />
      </main>
    </Page>
  )
}
