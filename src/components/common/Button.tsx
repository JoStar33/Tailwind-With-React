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
    // 마우스 호버시에 각 클래스에 적용된 css가 구체적으로 무엇인지 정보를 제공함.
    <button
      className={`bg-secondary ${
        isFontChange ? "text-black" : "text-primary"
      } cursor-pointer text-base font-semibold`}
      {...rest}
    >
      {children}
    </button>
  );
}
