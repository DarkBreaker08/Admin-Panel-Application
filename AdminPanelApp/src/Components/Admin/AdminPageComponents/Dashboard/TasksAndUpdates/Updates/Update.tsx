import styles from "./update.module.scss";

type TaskProps = {
  name: string;
  lastName: string;
};

export const Update = ({ name, lastName }: TaskProps) => {
  return (
    <li className={styles.update}>
      <div className={styles.avatar_wrap}>
        <img
          className={styles.avatar_wrap_img}
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
        />
      </div>

      <div className={styles.userLoginInfo}>
        <h2>
          {name} {lastName}
        </h2>
        <h3>New User has arrived!</h3>
      </div>
    </li>
  );
};
