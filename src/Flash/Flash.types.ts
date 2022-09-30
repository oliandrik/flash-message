export const enum FlashVariantEnum {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
}

export type FlashProps = {
  icon: string;
  variant: "error" | "warning" | "success" | "info";
  className?: string;
  style?: React.CSSProperties;
};
