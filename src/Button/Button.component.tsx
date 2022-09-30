import React from "react";
import classNames from "classnames";

import { SvgIcon } from "../SvgIcon";

import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

export const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  icon,
  className,
  style,
}) => {
  const buttonClass = classNames(styles.button, className);

  return (
    <button className={buttonClass}>
      {icon && <SvgIcon src="" />}
      {text && <span>{text}</span>}
    </button>
  );
};

ButtonComponent.displayName = "Button";
