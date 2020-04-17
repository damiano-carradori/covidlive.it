export type CardDetailsRowProps = {
  title: string;
  number: number;
};

export type ItemProps = {
  name: string;
  id?: number;
  infected?: number;
  newInfected?: number;
  healed?: number;
  deaths?: number;
  testPerformed?: number;
  homeConfinement?: number;
  hospitalized?: number;
  intensiveCare?: number;
  hospitalizedWithSymptoms?: number;
};

export type CardListProps = {
  list: Array<ItemProps>;
  numberOfFakeCards?: number;
  enableAccordion?: boolean;
};

export type CardListItemProps = {
  index: number;
  item?: ItemProps;
  isLoading: boolean;
  enableAccordion?: boolean;
};
