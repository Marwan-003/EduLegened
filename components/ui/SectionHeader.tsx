import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const sizeStyles = {
  medium: { wrapper: "gap-1", title: "text-2xl" },
  large: { wrapper: "gap-2", title: "text-4xl" },
};

const alignStyles = {
  left: "items-start text-left",
  center: "items-center text-center",
};

type SectionHeaderProps = ComponentProps<"header"> & {
  badge: string;
  title: string;
  description: string;
  size?: keyof typeof sizeStyles;
  align?: keyof typeof alignStyles;
};

function SectionHeader({
  badge,
  title,
  description,
  size = "medium",
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <header
      className={twMerge(
        "flex flex-col",
        sizeStyles[size].wrapper,
        alignStyles[align],
        className
      )}
      {...props}
    >
      <span className="text-sm font-semibold uppercase text-(--color-primary-600)">
        {badge}
      </span>
      <h2 className={twMerge("font-bold", sizeStyles[size].title)}>
        {title}
      </h2>
      <p className="text-slate-500">{description}</p>
    </header>
  );
}

export default SectionHeader;