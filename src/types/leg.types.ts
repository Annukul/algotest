export interface SubLegType {
  [key: string]: {
    isSelected: boolean;
    type: string;
    value: number;
  };
}

export interface SubLegsTypes {
  LegMomentum: {
    isSelected: boolean;
    type: string;
    value: number;
  };
  LegTarget: {
    isSelected: boolean;
    type: string;
    value: number;
  };
  LegStopLoss: {
    isSelected: boolean;
    type: string;
    value: number;
  };
  LegTrailSL: {
    isSelected: boolean;
    type: string;
    value: number;
  };
  LegReentryTP: {
    isSelected: boolean;
    type: string;
    value: number;
  };
  LegReentrySL: {
    isSelected: boolean;
    type: string;
    value: number;
  };
}

export interface LegTypes {
  PositionType: string;
  Lots: number;
  ExpiryKind: string;
  OptionType: string;
  StrikeParameter: string;
  EntryType: string;
  InstrumentKind: number;
}
