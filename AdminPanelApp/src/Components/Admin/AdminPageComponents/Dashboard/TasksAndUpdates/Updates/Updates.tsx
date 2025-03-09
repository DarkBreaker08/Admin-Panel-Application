import { User } from "../../../../../../types";
import { Update } from "./Update";
import styles from "./updates.module.scss";

type UpdatesProps = {
  users: User[];
};

export const Updates = ({ users }: UpdatesProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.updates_title}>
          <h2>New Users</h2>
        </div>
        <ul className={styles.updates_list}>
          {users.map((user) => (
            <Update key={user.id} name={user.name} lastName={user.lastName} />
          ))}
        </ul>
      </div>
    </>
  );
};
