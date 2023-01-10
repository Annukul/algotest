import React, { useEffect, useState } from "react";
import { SelectSegment } from "./componets";
import { Leg } from "./componets/leg";
import { CButton } from "./componets/shared";
import { SubLeg } from "./componets/sub-leg";
import { db } from "./config/firebase.config";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import {
  legInitialState,
  segmentBtnInitialState,
  subLegInitialState,
} from "./constants";
import { SubLegType } from "./types/leg.types";

function App() {
  const [segmentsBtnActive, setSegmentsBtnActive] = useState(
    segmentBtnInitialState
  );
  // const [finalData, setFinalData] = useState({});
  // const [fetchedLegs, setFetchedLegs] = useState({});
  const [isLegVisible, setIsLegVisible] = useState(true);
  const [legState, setLegState] = useState(legInitialState);
  const [subLegState, setSubLegState] = useState<any>([]);

  const handleSegmentsBtn = (type: string) => {
    type === "futures"
      ? setSegmentsBtnActive({
          futures: true,
          options: false,
        })
      : setSegmentsBtnActive({
          futures: false,
          options: true,
        });
  };

  const handleLegDropDown = (key: string, e: any) => {
    const { value } = e;
    setLegState({
      ...legState,
      [key]: value,
    });
  };

  const handleAddLeg = () => {
    const _sublegState = [...subLegState];
    _sublegState.push(subLegInitialState);
    setSubLegState([..._sublegState]);
  };

  const handleRemoveLeg = (index: number) => {
    const _sublegState = [...subLegState];
    _sublegState.splice(index, 1);
    setSubLegState(_sublegState);
  };

  const handleCancelBtn = () => {
    setIsLegVisible(false);
  };

  const handleOnSelect = (key: string, subLegIndex: number) => {
    const _sublegState = JSON.parse(JSON.stringify(subLegState));
    _sublegState.forEach((subLeg: any, index: number) => {
      if (index === subLegIndex) {
        _sublegState[subLegIndex][key].isSelected =
          !_sublegState[subLegIndex][key].isSelected;
      }
    });
    setSubLegState(_sublegState);
  };

  const handleSubLegOnSelect = (key: string, e: any, subLegIndex: number) => {
    const _sublegState = JSON.parse(JSON.stringify(subLegState));
    _sublegState.forEach((subLeg: any, index: number) => {
      if (index === subLegIndex) {
        _sublegState[subLegIndex][key].type = e.value;
      }
    });
    setSubLegState(_sublegState);
  };

  const handleSubLegOnChange = (key: string, e: any, subLegIndex: number) => {
    const _sublegState = JSON.parse(JSON.stringify(subLegState));
    _sublegState.forEach((subLeg: any, index: number) => {
      if (index === subLegIndex) {
        _sublegState[subLegIndex][key].value = e.target.value;
      }
    });
    setSubLegState(_sublegState);
  };

  const handleCopyBtn = (index: number) => {
    const _sublegState = subLegState[index];
    setSubLegState([...subLegState, _sublegState]);
  };

  const handleOnSubmit = async () => {
    const data = { ...legState, legs: [...subLegState] };
    let filteredData;
    data.legs.forEach((leg: any, index: number) => {
      Object.keys(leg).forEach((key: string) => {
        if (
          typeof data.legs[index][key] === "object" &&
          data.legs[index][key] !== null
        ) {
          delete data.legs[index][key].isSelected;
        }
      });

      filteredData = data;
    });

    // setFinalData(data);

    console.log({ filteredData });

    try {
      await addDoc(collection(db, "tasks"), { data: data });
    } catch (err) {
      alert(err);
    }
  };

  // Get all the entries
  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const res = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      // setFetchedLegs(res);
    });
  }, []);

  return (
    <div className="py-10 h-full">
      <div className="flex flex-col h-64 justify-between items-center py-10 mb-10">
        {isLegVisible && (
          <>
            <div className="py-10">
              <SelectSegment
                handleSegmentsBtn={handleSegmentsBtn}
                segmentsBtnActive={segmentsBtnActive}
              />
            </div>
            <Leg handleLegDropDown={handleLegDropDown} legState={legState} />
            <div className="flex w-64 justify-center item-center">
              <div className="flex w-full justify-center mt-16 items-center">
                <CButton
                  onClick={handleAddLeg}
                  btnText={"Add Leg"}
                  btnStyle={"w-28 bg-sky-500 rounded-xl"}
                />
                <CButton
                  onClick={handleCancelBtn}
                  btnText={"Cancel"}
                  btnStyle={"w-28 bg-white rounded-xl"}
                />
              </div>
            </div>
          </>
        )}

        {subLegState.map((subLeg: SubLegType, index: number) => {
          return (
            <div key={`${index}_}`}>
              <SubLeg
                index={index}
                handleOnSelect={handleOnSelect}
                subLegState={subLeg}
                handleSubLegOnSelect={handleSubLegOnSelect}
                handleSubLegOnChange={handleSubLegOnChange}
                handleRemoveLeg={handleRemoveLeg}
                handleCopyBtn={handleCopyBtn}
              />
            </div>
          );
        })}
        {subLegState.length > 0 && (
          <CButton
            onClick={handleOnSubmit}
            btnText={"Submit"}
            btnStyle={"w-24 align-center bg-sky-500 rounded-xl"}
          />
        )}
      </div>
    </div>
  );
}

export default App;
