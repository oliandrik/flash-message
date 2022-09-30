import { ReactNode } from "react";

export enum TextTypeEnum {
  caption = "caption",
  text = "text",
}

export type TextProps = {
  children: ReactNode;
  variant: TextTypeEnum;
  className?: string;
  style?: React.CSSProperties;
};
