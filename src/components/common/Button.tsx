import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isFontChange?: boolean;
  children: React.ReactNode;
}

export default function Button({
  children,
  isFontChange = true,
  ...rest
}: Props) {
  return (
    <button
      className={`bg-secondary ${
        isFontChange ? "text-black" : "text-primary"
      } text-base font-semibold cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
}
