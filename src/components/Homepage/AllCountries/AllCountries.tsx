import React from "react";
import CardList from "../CardList";
import { useIntl } from "gatsby-plugin-intl";
import { Context as WorldDataContext } from "@Contexts/worldData";
import { Box, Text, Title2, Button } from "@Components/Layout/elements";

function AllCountries(): React.ReactElement {
  const { formatMessage } = useIntl();

  // @ts-ignore
  const { store: worldDataStore, onGetWorldData } = React.useContext(WorldDataContext);

  const [shouldShowAllWorldData, setShouldShowAllWorldData] = React.useState<boolean>(false);

  React.useEffect(() => {
    onGetWorldData();
  }, []);

  const showMoreCta = shouldShowAllWorldData
    ? formatMessage({ id: "pages.homepage.allRegions.allRegionShowLessCtaLabel" })
    : formatMessage({ id: "pages.homepage.allRegions.allRegionShowMoreCtaLabel" });

  const onShowMore = (): void => {
    setShouldShowAllWorldData(!shouldShowAllWorldData);
  };

  const wds =
    !shouldShowAllWorldData && worldDataStore.data.length ? [...worldDataStore.data.slice(0, 5)] : worldDataStore.data;

  return (
    <Box maxWidth={800} py="large" mx="auto">
      <Title2 mb="large">{formatMessage({ id: "pages.homepage.allCountries.title" })}</Title2>

      <CardList list={wds} enableAccordion={false} />

      <Text py="base" fontSize={1} color="neutral200" textAlign={["center", "right"]} fontWeight={700}>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/sharadcodes/covid19-graphql">
          <strong>{formatMessage({ id: "pages.homepage.allCountries.dataSourceLabel" })}</strong>
        </a>
      </Text>

      <Box display="flex" justifyContent="center" my="large">
        <Button variant="primary" onClick={onShowMore}>
          {showMoreCta}
        </Button>
      </Box>
    </Box>
  );
}

export default AllCountries;
