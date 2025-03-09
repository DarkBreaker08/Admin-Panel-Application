import { Statistics } from "../../../../../types";
import { StatisticWrap } from "./StatisticWrap/StatisticWrap";
import styles from "./statistics.module.scss";

type StatisticsProps = {
  data: Statistics;
};

export const StatisticsComponent = ({ data }: StatisticsProps) => {
  if (!data) return;
  const totalNumberOfUsers = data.newUsers[data.newUsers.length - 1].newUsers;
  const totalAverageTime =
    data.averageTime[data.averageTime.length - 1].averageTime;
  const totalNewDownloads =
    data.newDownloads[data.newDownloads.length - 1].newDownloads;
  const totalRevenue = data.revenue[data.revenue.length - 1].revenue;

  return (
    <section>
      <div className={`${styles.container}`}>
        <StatisticWrap
          css={styles}
          typographyText={{ h2: `${totalNumberOfUsers}`, h3: "New Users" }}
          iconClassName="bx bxs-group"
          iconColor="#FF9800"
        />

        <StatisticWrap
          css={styles}
          typographyText={{ h2: `${totalAverageTime}`, h3: "Average Time" }}
          iconClassName="bx bxs-time"
          iconColor="#2196F3"
        />

        <StatisticWrap
          css={styles}
          typographyText={{ h2: `${totalNewDownloads}`, h3: "New Downloads" }}
          iconClassName="bx bx-download"
          iconColor="#009688"
        />

        <StatisticWrap
          css={styles}
          typographyText={{ h2: `${totalRevenue}`, h3: "Revenue ($)" }}
          iconClassName="bx bxs-wallet"
          iconColor="#E91E63"
        />
      </div>
    </section>
  );
};
