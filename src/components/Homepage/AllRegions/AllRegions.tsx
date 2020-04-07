import React, { ReactElement } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Context as RegionsDataContext } from "@Contexts/regionsData";
import { Box, Button, Title2 } from "@Components/Layout/elements";
import CardList from "../CardList";

interface RegionData {
  id: number;
  name?: string;
  infected?: number;
  newInfected?: number;
  healed?: number;
  deaths?: number;
  testPerformed?: number;
  homeConfinement?: number;
  hospitalized?: number;
  intensiveCare?: number;
  hospitalizedWithSymptoms?: number;
}

function AllRegions(): ReactElement {
  const { formatMessage } = useIntl();

  // @ts-ignore
  const { store: regionsDataStore, onGetRegionsData } = React.useContext(RegionsDataContext);

  const [shouldShowAllRegions, setShouldShowAllRegion] = React.useState<boolean>(false);
  const [regionsDataSorted, setRegionsDataSorted] = React.useState([]);

  React.useEffect(() => {
    onGetRegionsData();
  }, []);

  React.useEffect(() => {
    const { data } = regionsDataStore;
    const dailyData = data.slice(data.length - 21, data.length);
    const sortingData = dailyData
      .sort(function(a: RegionData, b: RegionData) {
        return a.infected - b.infected;
      })
      .reverse();

    const sortedData = shouldShowAllRegions ? sortingData : [...sortingData.slice(0, 5)];

    setRegionsDataSorted(sortedData);
  }, [regionsDataStore, shouldShowAllRegions]);

  const showMoreCta = shouldShowAllRegions
    ? formatMessage({ id: "pages.homepage.allRegions.allRegionShowLessCtaLabel" })
    : formatMessage({ id: "pages.homepage.allRegions.allRegionShowMoreCtaLabel" });

  const onShowMoreRegions = (): void => {
    setShouldShowAllRegion(!shouldShowAllRegions);
  };

  return (
    <Box maxWidth={800} py="large" mx="auto">
      <Title2 mb="large">{formatMessage({ id: "pages.homepage.allRegions.title" })}</Title2>

      <CardList list={regionsDataSorted} />

      <Box display="flex" justifyContent="center" my="large">
        <Button variant="primary" onClick={onShowMoreRegions}>
          {showMoreCta}
        </Button>
      </Box>
    </Box>
  );
}

export default AllRegions;
