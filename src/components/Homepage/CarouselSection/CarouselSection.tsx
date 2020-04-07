import React from "react";
import { get, last } from "lodash";
import { Context as NationalTrendDataContext } from "@Contexts/nationalTrendData";
import { NationalTrendDataType } from "@Types/nationalTrendData";
import { Box } from "@Components/Layout/elements";
import LastUpdate from "./LastUpdate";
import Carousel from "./Carousel";

function CarouselSection(): React.ReactElement {
  // @ts-ignore
  const { store: nationalTrendDataStore, onGetNationalTrendData } = React.useContext(NationalTrendDataContext);

  React.useEffect(() => {
    onGetNationalTrendData();
  }, []);

  const { data: nationalTrendData }: { data: [NationalTrendDataType] } = nationalTrendDataStore;
  const todayNationalTrendData = last(nationalTrendData);
  const yesterdayNationTrendData = nationalTrendData[nationalTrendData.length - 2];

  const lastUpdateDatetime = get(todayNationalTrendData, "date", "");

  return (
    <Box py="large">
      <Carousel todayNationalTrendData={todayNationalTrendData} yesterdayNationTrendData={yesterdayNationTrendData} />

      {todayNationalTrendData && <LastUpdate date={lastUpdateDatetime} />}
    </Box>
  );
}

export default CarouselSection;
