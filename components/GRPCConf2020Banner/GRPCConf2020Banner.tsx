import Banner from "../Banner/Banner"
import styles from "./styles.module.css"

export const GRPCConf2020Banner = () => {
  if (new Date(Date.now()) < (new Date('July 28, 2020'))) {
    return (
      <Banner>
        <div className={styles.banner}>
          <a href="https://events.linuxfoundation.org/grpc-conf/" target="_blank" rel="noopener">
            Attend gRPC Conf 2020 on July 27-28 to see the presentation on protop.
          </a>
        </div>
      </Banner>
    )
  }
}
