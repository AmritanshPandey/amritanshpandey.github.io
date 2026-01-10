import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";
import Link from "next/link";
import { IconProps } from "@tabler/icons-react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "glass" | "icon";
type ButtonSize = "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.FC<IconProps>;
  iconRight?: React.FC<IconProps>;
  children?: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "primary",
  size = "md",
  iconLeft: IconLeft,
  iconRight: IconRight,
  children,
  href,
  ...rest
}: ButtonProps) {
  const className = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
  ].join(" ");

  const content = (
    <>
      {IconLeft && <IconLeft size={24} stroke={2} />}
      {children && <span>{children}</span>}
      {IconRight && <IconRight size={24} stroke={2} />}
    </>
  );

  if (href) {
    const linkProps =
      rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <Link
        href={href}
        className={className}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const buttonProps =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={className} {...buttonProps}>
      {content}
    </button>
  );
}