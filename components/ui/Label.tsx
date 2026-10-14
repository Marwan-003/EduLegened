import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const baseStyles =
  "inline-flex items-center justify-center gap-2  px-3  ";

const variantStyles = {
  success: "bg-green-100 text-green-700  ",
  danger: "bg-red-100 text-red-700 ",
  info: "bg-slate-100 text-slate-700 ",
};

type Variant = keyof typeof variantStyles;

type LabelProps = ComponentProps<"span"> & {
  rounded?: boolean;
  variant?: Variant;
};

function Label({
  rounded = false,
  variant = "info",
  className,
  children,
  ...props
}: LabelProps) {
  const classes = twMerge(
    baseStyles,
    variantStyles[variant],
    rounded ? "rounded-full" : "",
    className
  );

  return (
    <span  className={classes} {...props}>
      {children}
    </span>
  );
}

export default Label;