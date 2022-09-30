import classNames from "classnames";

import { TextProps } from "./Text.types";

import styles from "./Text.module.scss";

export const TextComponent: React.FC<TextProps> = ({
  children,
  variant,
  className,
  style,
}) => {
  const textClass = classNames(
    styles.text,
    {
      [styles[`text_variant_${variant}`]]: variant,
    },
    className
  );
  return (
    <span className={textClass} style={style}>
      {children}
    </span>
  );
};

TextComponent.displayName = "Text";
