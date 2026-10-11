import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const baseStyles =
  "inline-flex items-center justify-center gap-2 px-5 py-2 font-medium cursor-pointer transition-colors ";

const variantStyles = {
  content: "bg-(--color-primary-400) text-white hover:bg-(--color-primary-500) ",
  outline: "border-2 border-slate-200 text-slate-800  hover:bg-slate-100",
  text: "text-slate-600 hover:text-slate-900",
};

type Variant = keyof typeof variantStyles;

type ButtonProps = ComponentProps<"button"> & {
  rounded?: boolean;
  variant?: Variant;
};

function Button({
  rounded = false,
  variant = "content",
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  const classes = twMerge(
    baseStyles,
    variantStyles[variant],
    rounded ? "rounded-full" : "",
    className
  );

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;