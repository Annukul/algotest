import { FC } from "react";
import {
  atmStrikeOptions,
  expiryOptions,
  optionTypeOptions,
  positionOptions,
  strikeCriteriaOptions,
} from "../../constants";
import { CSelect, CTextInput } from "../shared";
import { LegTypes } from "../../types/leg.types";

interface LegProps {
  handleLegDropDown: Function;
  legState: LegTypes;
}

export const Leg: FC<LegProps> = ({ handleLegDropDown, legState }) => {
  return (
    <div className="w-full flex justify-evenly items-center">
      <div className="h-16 flex flex-col justify-between">
        <p className="text-md font-medium">Total lot</p>
        <CTextInput
          type={"number"}
          name={"Lots"}
          onChange={(e) => handleLegDropDown("Lots", e)}
          value={legState.Lots}
        />
      </div>
      <div className="h-16 flex flex-col justify-between">
        <p className="text-md font-medium">Position</p>
        <CSelect
          onChange={(e) => handleLegDropDown("PositionType", e)}
          options={positionOptions}
        />
      </div>
      <div className="h-16 flex flex-col justify-between">
        <p className="text-md font-medium">Option Type</p>
        <CSelect
          onChange={(e) => handleLegDropDown("OptionType", e)}
          options={optionTypeOptions}
        />
      </div>
      <div className="h-16 flex flex-col justify-between">
        <p className="text-md font-medium">Expiry</p>
        <CSelect
          onChange={(e) => handleLegDropDown("ExpiryKind", e)}
          options={expiryOptions}
        />
      </div>
      <div className="h-16 flex flex-col justify-between">
        <p className="text-md font-medium">Select Strike Criteria</p>
        <CSelect
          onChange={(e) => handleLegDropDown("EntryType", e)}
          options={strikeCriteriaOptions}
        />
      </div>
      <div className="h-16 flex justify-between items-center">
        <p className="text-lg font-medium mr-2">[</p>
        <p className="text-md font-medium mr-5">ATM Strike</p>
        <CSelect
          onChange={(e) => handleLegDropDown("StrikeParameter", e)}
          options={atmStrikeOptions}
        />
        <p className="text-lg font-medium mr-2">(</p>
        <CTextInput
          onChange={(e) => handleLegDropDown("InstrumentKind", e)}
          type={"number"}
          name={"atmStrike"}
          value={legState.InstrumentKind}
        />
        <p className="text-md font-medium mr-5">X ATM Standard Price</p>
        <p className="text-lg font-medium mr-2">)]</p>
      </div>
    </div>
  );
};
