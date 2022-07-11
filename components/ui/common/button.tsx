import { ButtonHTMLAttributes } from "react";

export type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string;
  hoverable?: boolean;
};

export type Variant = {
  [name: string]: string;
}

export const Button = ({
  children,
  className,
  hoverable = true,
  variant = "purple",
  ...rest
}: CustomButtonProps) => {
  const variants: Variant = {
    purple: `text-white bg-indigo-600 ${ hoverable && 'hover:bg-indigo-700'}`,
    red: `text-white bg-red-600 ${ hoverable && 'hover:bg-red-700'}`,
    lightPurple: `text-indigo-700 bg-indigo-100 ${ hoverable && 'hover:bg-indigo-200'}`
  };
  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 border rounded-md text-base font-medium ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};
