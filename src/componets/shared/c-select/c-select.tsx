import React, { FC } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";

interface CSelectProps {
  isDisabled?: boolean;
  options: Array<{ value: string; label: string }>;
  onChange: (
    newValue: SingleValue<{ value: string; label: string }>,
    actionMeta: ActionMeta<{ value: string; label: string }>
  ) => void;
  value?: { value: string; label: string };
}

export const CSelect: FC<CSelectProps> = ({
  isDisabled = false,
  options,
  onChange,
  value,
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      isDisabled={isDisabled}
      options={options}
    />
  );
};
