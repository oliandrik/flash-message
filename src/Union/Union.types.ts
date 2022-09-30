const enum UnionVariantEnum {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
}

export type UnionProps = {
  icon: string;
  variant: "error" | "warning" | "success" | "info";
  className?: string;
  style?: React.CSSProperties;
};
