import { FC } from "react";
import { pointsOptions } from "../../../../constants";
import { CCheckBox, CSelect, CTextInput } from "../../../shared";

interface SubLegSelectionProps {
  index: number;
  handleOnSelect: Function;
  handleSubLegOnChange: Function;
  handleSubLegOnSelect: Function;
  isSelected: boolean;
  legName: string;
  label: string;
  subLegState: any;
}

export const SubLegSelection: FC<SubLegSelectionProps> = ({
  index,
  handleOnSelect,
  handleSubLegOnChange,
  handleSubLegOnSelect,
  isSelected,
  legName,
  label,
  subLegState,
}) => {
  return (
    <div key={index} className="h-16 flex flex-col justify-between items-start">
      <CCheckBox
        onChange={() => handleOnSelect(legName, index)}
        label={label}
        checked={subLegState[legName].isSelected}
      />
      <div className="flex items-center">
        <CSelect
          isDisabled={isSelected}
          options={pointsOptions}
          onChange={(e) => handleSubLegOnSelect(legName, e, index)}
        />
        <CTextInput
          type={"number"}
          name={legName}
          onChange={(e) => handleSubLegOnChange(legName, e, index)}
          disabled={isSelected}
          inputStyle={"ml-5"}
          value={subLegState[legName].value}
        />
      </div>
    </div>
  );
};
