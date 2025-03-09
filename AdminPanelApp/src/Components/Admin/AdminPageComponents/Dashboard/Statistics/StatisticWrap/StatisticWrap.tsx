type StatisticWrapProps = {
  css: CSSModuleClasses;
  iconClassName: string;
  iconColor: string;
  typographyText: {
    h2: string;
    h3: string;
  };
};

export const StatisticWrap = ({
  css,
  typographyText,
  iconClassName,
  iconColor,
}: StatisticWrapProps) => {
  return (
    <div className={`${css.container_statistic_wrap}`}>
      <i
        className={`${iconClassName} ${css.container_statistic_wrap_icon}`}
        style={{ color: iconColor }}
      ></i>

      <div className={`${css.container_statistic_wrap_typography}`}>
        <h2>{typographyText.h2}</h2>
        <h3>{typographyText.h3}</h3>
      </div>
    </div>
  );
};
