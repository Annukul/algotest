import { FC } from "react";
import { CButton } from "../shared";

interface SelectSegmentProps {
  handleSegmentsBtn: Function;
  segmentsBtnActive: {
    futures: boolean;
    options: boolean;
  };
}

export const SelectSegment: FC<SelectSegmentProps> = ({
  handleSegmentsBtn,
  segmentsBtnActive,
}) => {
  return (
    <div className="flex justify-center items-center">
      <p className="px-5 text-lg font-medium">Select segments</p>
      <div className="w-40 h-8 items-center border-2 rounded-r-xl rounded-l-xl overflow-hidden">
        <CButton
          onClick={() => handleSegmentsBtn("futures")}
          btnText={"Futures"}
          styleAlterState={segmentsBtnActive.futures}
        />
        <CButton
          onClick={() => handleSegmentsBtn("options")}
          btnText={"Options"}
          styleAlterState={segmentsBtnActive.options}
        />
      </div>
    </div>
  );
};
