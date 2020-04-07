import React from "react";
import { get } from "lodash";
import numeral from "numeral";
import { useIntl } from "gatsby-plugin-intl";
import Card from "@Components/Homepage/Card";
import { Box } from "@Components/Layout/elements";
import CarouselWrapper from "./CarouselWrapper";
import { CarouselProps } from "./types";

function Carousel({ todayNationalTrendData, yesterdayNationTrendData }: CarouselProps): React.ReactElement {
  const { formatMessage } = useIntl();

  const todayInfected = get(todayNationalTrendData, "infected", 0);
  const todayNewInfected = get(todayNationalTrendData, "newInfected", 0);
  const todayTotalCases = get(todayNationalTrendData, "totalCases", 0);

  const todayHealed = get(todayNationalTrendData, "healed", 0);
  const yesterdayHealed = get(yesterdayNationTrendData, "healed", 0);
  const differenceFromYesterdayHealed = todayHealed - yesterdayHealed;

  const todayDeaths = get(todayNationalTrendData, "deaths", 0);
  const yesterdayDeaths = get(yesterdayNationTrendData, "deaths", 0);
  const differenceFromYesterdayDeaths = todayDeaths - yesterdayDeaths;

  return (
    <Box
      display={["initial", "initial", "initial", "grid"]}
      gridColumnGap={24}
      gridTemplateColumns="repeat(3, calc(33% - 12px))"
    >
      <CarouselWrapper>
        <Card
          isLoading={!todayNationalTrendData}
          emoji="😷"
          title={formatMessage({ id: "pages.homepage.bigCardInfected.title" })}
          content={todayInfected}
          additionalContent={formatMessage(
            { id: "pages.homepage.bigCardInfected.additionalContentLabel" },
            { counter: numeral(todayNewInfected).format("+0,0") }
          )}
          subContent={formatMessage(
            { id: "pages.homepage.bigCardInfected.subContentLabel" },
            { total: numeral(todayTotalCases).format("0,0") }
          )}
        />
        <Card
          isLoading={!todayNationalTrendData}
          emoji="😊"
          title={formatMessage({ id: "pages.homepage.bigCardHealed.title" })}
          content={todayHealed}
          additionalContent={formatMessage(
            { id: "pages.homepage.bigCardHealed.additionalContentLabel" },
            { counter: numeral(differenceFromYesterdayHealed).format("+0,0") }
          )}
          additionalContentColor="success"
        />
        <Card
          isLoading={!todayNationalTrendData}
          emoji="😢"
          title={formatMessage({ id: "pages.homepage.bigCardDeaths.title" })}
          content={todayDeaths}
          additionalContent={formatMessage(
            { id: "pages.homepage.bigCardDeaths.additionalContentLabel" },
            { counter: numeral(differenceFromYesterdayDeaths).format("+0,0") }
          )}
          subContent={formatMessage({ id: "pages.homepage.bigCardDeaths.subContentLabel" })}
        />
      </CarouselWrapper>
    </Box>
  );
}

export default Carousel;
