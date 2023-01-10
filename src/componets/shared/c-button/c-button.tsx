import React, { FC, MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  btnStyle?: string;
  disabled?: boolean;
  styleAlterState?: boolean;
  btnText: string;
}

export const CButton: FC<ButtonProps> = ({
  onClick,
  btnStyle = "",
  disabled = false,
  styleAlterState = false,
  btnText,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-1/2 h-full ${styleAlterState && "bg-sky-500"} ${btnStyle}`}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};
