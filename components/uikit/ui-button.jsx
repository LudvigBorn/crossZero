import clsx from "clsx";

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "py-2 px-6 rounded text-sm leading-tight shadow-base",
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight shadow-lg",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500 ",
      outline:
        "text-teal-600 border border-teal-600 bg-white shadow-transparent",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
}
