import React from "react";
import classNames from "classnames";

import { BubblesProps } from "./Bubbles.types";

import styles from "./Bubbles.module.scss";

export const BubblesComponent: React.FC<BubblesProps> = ({
  className,
  style,
}) => {
  const buttonClass = classNames(styles.button, className);

  return <div className={buttonClass}></div>;
};

BubblesComponent.displayName = "Bubbles";
