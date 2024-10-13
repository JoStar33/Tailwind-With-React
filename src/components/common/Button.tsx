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
      className={`bg-slate-500 ${
        isFontChange ? "text-black" : "text-red-600"
      } text-base font-semibold cursor-pointer`}
      {...rest}
    >
      {children}
    </button>
  );
}
