export const subLegInitialState = {
  LegMomentum: {
    isSelected: false,
    type: "",
    value: 0,
  },
  LegTarget: {
    isSelected: false,
    type: "",
    value: 0,
  },
  LegStopLoss: {
    isSelected: false,
    type: "",
    value: 0,
  },
  LegTrailSL: {
    isSelected: false,
    type: "",
    value: 0,
  },
  LegReentryTP: {
    isSelected: false,
    type: "",
    value: 0,
  },
  LegReentrySL: {
    isSelected: false,
    type: "",
    value: 0,
  },
};

export const legInitialState = {
  PositionType: "",
  Lots: 0,
  ExpiryKind: "",
  OptionType: "",
  StrikeParameter: "",
  EntryType: "",
  InstrumentKind: 0,
};

export const segmentBtnInitialState = {
  futures: true,
  options: false,
};
