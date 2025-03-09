import styles from "./unit.module.scss";

type GalleryUnitProps = {
  description: string;
};

export const GalleryUnit = ({ description }: GalleryUnitProps) => {
  return (
    <div className={styles.imgContainer}>
      <img src="https://picsum.photos/350/250" className={styles.img} />
      <div className={styles.description}>{description}</div>
    </div>
  );
};
