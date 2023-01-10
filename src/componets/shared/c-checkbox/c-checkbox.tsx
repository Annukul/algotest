import { ChangeEventHandler, FC } from "react";

interface CCheckBoxProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  checked: boolean;
}

export const CCheckBox: FC<CCheckBoxProps> = ({ onChange, label, checked }) => {
  return (
    <div className="mb-5 flex">
      <input checked={checked} type="checkbox" onChange={onChange} />
      <label className="ml-2">{label}</label>
    </div>
  );
};
