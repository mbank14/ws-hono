import { ButtonProps } from "./Button.types";

export const Button = ({
  label,
  id,
  size = "medium",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  href,
  onClick,
}: ButtonProps) => {
  const baseClass = `rounded-lg font-semibold transition border border-solid inline-block ${
    fullWidth ? "w-full" : "w-auto"
  }`;
  const variantClasss: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 border-blue-400",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 border-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 border-rose-500",
  };
  const sizeClass: Record<string, string> = {
    small: "py-1.5 px-3 text-sm",
    medium: "py-2 px-5 text-base",
    large: "py-3 px-7 text-xl",
  };
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";
  const allClasses = `${baseClass} ${sizeClass[size]} ${disabledClass} ${variantClasss[variant]}`;

  if (href) {
    return (
      <a className={allClasses} href={href}>
        {label}
      </a>
    );
  }

  return (
    <button
        id={id}
      className={allClasses}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
};
