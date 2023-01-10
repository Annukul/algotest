import { FC } from "react";
import { SubLegSelection } from "./components";
import { CButton } from "../shared";
import { SubLegType } from "../../types/leg.types";

interface SubLegProps {
  index: number;
  handleOnSelect: Function;
  subLegState: SubLegType;
  handleSubLegOnSelect: Function;
  handleSubLegOnChange: Function;
  handleRemoveLeg: Function;
  handleCopyBtn: Function;
}

export const SubLeg: FC<SubLegProps> = ({
  index,
  handleOnSelect,
  subLegState,
  handleSubLegOnSelect,
  handleSubLegOnChange,
  handleRemoveLeg,
  handleCopyBtn,
}) => {
  return (
    <div className="h-36 w-full flex justify-evenly items-center mt-15 relative">
      <SubLegSelection
        index={index}
        handleOnSelect={handleOnSelect}
        handleSubLegOnChange={handleSubLegOnChange}
        handleSubLegOnSelect={handleSubLegOnSelect}
        isSelected={!subLegState.LegMomentum.isSelected}
        subLegState={subLegState}
        legName={"LegMomentum"}
        label={"Simple Momentum"}
      />
      <SubLegSelection
        index={index}
        handleOnSelect={handleOnSelect}
        handleSubLegOnChange={handleSubLegOnChange}
        handleSubLegOnSelect={handleSubLegOnSelect}
        isSelected={!subLegState.LegTarget.isSelected}
        subLegState={subLegState}
        legName={"LegTarget"}
        label={"Target Profit"}
      />
      <SubLegSelection
        index={index}
        handleOnSelect={handleOnSelect}
        handleSubLegOnChange={handleSubLegOnChange}
        handleSubLegOnSelect={handleSubLegOnSelect}
        isSelected={!subLegState.LegStopLoss.isSelected}
        subLegState={subLegState}
        legName={"LegStopLoss"}
        label={"Stop Loss"}
      />
      <SubLegSelection
        index={index}
        handleOnSelect={handleOnSelect}
        handleSubLegOnChange={handleSubLegOnChange}
        handleSubLegOnSelect={handleSubLegOnSelect}
        isSelected={!subLegState.LegTrailSL.isSelected}
        subLegState={subLegState}
        legName={"LegTrailSL"}
        label={"Trail SL"}
      />
      <SubLegSelection
        index={index}
        handleOnSelect={handleOnSelect}
        handleSubLegOnChange={handleSubLegOnChange}
        handleSubLegOnSelect={handleSubLegOnSelect}
        isSelected={!subLegState.LegReentryTP.isSelected}
        subLegState={subLegState}
        legName={"LegReentryTP"}
        label={"Re-entry on Tgt"}
      />
      <SubLegSelection
        index={index}
        handleOnSelect={handleOnSelect}
        handleSubLegOnChange={handleSubLegOnChange}
        handleSubLegOnSelect={handleSubLegOnSelect}
        isSelected={!subLegState.LegReentrySL.isSelected}
        subLegState={subLegState}
        legName={"LegReentrySL"}
        label={"Re-entry on SL"}
      />
      <div className="absolute right-16 top-0">
        <CButton
          onClick={() => handleRemoveLeg(index)}
          btnStyle={"bg-slate-300 w-8 mr-5"}
          btnText={"X"}
        />
        <CButton
          onClick={() => handleCopyBtn(index)}
          btnStyle={"bg-slate-300 w-12"}
          btnText={"Copy"}
        />
      </div>
    </div>
  );
};
