import React, { ChangeEventHandler, FC } from "react";

interface CTextInputProps {
  type: "number" | "text";
  value: string | number;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  inputStyle?: string;
}

export const CTextInput: FC<CTextInputProps> = ({
  type,
  name,
  onChange,
  disabled = false,
  inputStyle = "",
  value,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      className={`w-24 rounded-xl px-2 h-8 bg-slate-200 ${inputStyle}`}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
