import { PricingOffer } from "./PricingOffer/PricingOffer";
import styles from "./pricingoffers.module.scss";

export const PricingOffers = () => {
  return (
    <section className={styles.container}>
      <PricingOffer mainColor="#0B5ED7" price={22} offerExtension="Basic" />
      <PricingOffer mainColor="#157347" price={28} offerExtension="Standard" />
      <PricingOffer mainColor="#BB2D3B" price={34} offerExtension="Plus" />
      <PricingOffer mainColor="#FFCA2C" price={48} offerExtension="Premium" />
    </section>
  );
};
