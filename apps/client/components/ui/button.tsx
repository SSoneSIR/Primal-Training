import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "default" | "secondary";

type CommonButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = CommonButtonProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "children" | "className" | "href">;

type NativeButtonProps = CommonButtonProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "children" | "className">;

type ButtonProps = LinkButtonProps | NativeButtonProps;

const baseClassName =
  "inline-flex cursor-pointer items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-semibold text-foreground";

const variantClassNames: Record<ButtonVariant, string> = {
  default: "bg-accent",
  secondary: "bg-background",
};

export default function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      className = "",
      href,
      variant = "default",
      ...linkProps
    } = props as LinkButtonProps;

    return (
      <Link
        href={href}
        className={`${baseClassName} ${variantClassNames[variant]} ${className}`}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className = "",
    type = "button",
    variant = "default",
    ...buttonProps
  } = props as NativeButtonProps;

  return (
    <button
      type={type}
      className={`${baseClassName} ${variantClassNames[variant]} ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
