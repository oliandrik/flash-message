import classNames from "classnames";
import { SvgIcon } from "SvgIcon";

import { UnionProps } from "./Union.types";

import styles from "./Union.module.scss";

export const UnionComponent: React.FC<UnionProps> = ({
  icon,
  className,
  variant,
}) => {
  const unionClass = classNames(
    styles.union,
    { [styles[`union_variant_${variant}`]]: variant },
    className
  );

  return (
    <div className={unionClass}>
      <SvgIcon src={`${icon}`} />
    </div>
  );
};

UnionComponent.displayName = "Union";
