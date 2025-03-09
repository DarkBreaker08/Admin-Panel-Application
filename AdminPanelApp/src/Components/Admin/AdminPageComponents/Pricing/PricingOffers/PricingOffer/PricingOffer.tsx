import styles from "./pricingoffer.module.scss";

type PricingOfferProps = {
  mainColor: string;
  price: number;
  offerExtension: string;
};

export const PricingOffer = ({
  mainColor,
  offerExtension,
  price,
}: PricingOfferProps) => {
  return (
    <div className={styles.pricingContainer}>
      <h2 className={styles.title} style={{ backgroundColor: mainColor }}>
        {offerExtension}
      </h2>
      <p className={styles.price} style={{ color: mainColor }}>
        {price}$<span>Monthly</span>
      </p>
      <ul className={styles.advantagesList}>
        <li>24/7 Tech Support</li>
        <li>Bigger Product Accesibility</li>
        <li>New Offers</li>
        <li>And Other Benefits</li>
      </ul>
      <div className={styles.buyButtonWrap}>
        <button>Buy Now</button>
      </div>
    </div>
  );
};
