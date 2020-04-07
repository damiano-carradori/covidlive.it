import React, { ReactElement } from "react";
import { Accordion } from "react-accessible-accordion";
import CardListItem from "./CardListItem";
import { CardListProps, ItemProps } from "./types";

const CardList = ({ list = [], numberOfFakeCards = 5, enableAccordion = true }: CardListProps): ReactElement => {
  const isLoading = !list.length;

  const data = isLoading
    ? Array.from({ length: numberOfFakeCards }).map(
        (_, i): ItemProps => ({
          name: `item-${i}`,
        })
      )
    : list;

  return (
    <Accordion allowZeroExpanded>
      {data.map((item: ItemProps, key: number) => (
        <CardListItem key={item.name} index={key} item={item} isLoading={isLoading} enableAccordion={enableAccordion} />
      ))}
    </Accordion>
  );
};

export default CardList;
