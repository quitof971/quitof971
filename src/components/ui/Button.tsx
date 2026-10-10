import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100 motion-reduce:hover:scale-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-light shadow-[0_8px_24px_-8px_rgba(10,77,245,0.55)]",
  secondary: "bg-white text-black border border-border hover:border-black/40",
  ghost: "bg-transparent border border-current/30 hover:border-current/60",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", children, className = "", icon } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    children: _children,
    className: _className,
    icon: _icon,
    type = "button",
    ...rest
  } = props as ButtonAsButton;
  void _variant;
  void _size;
  void _children;
  void _className;
  void _icon;

  return (
    <button type={type} className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
