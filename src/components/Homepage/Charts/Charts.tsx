import React, { ReactElement } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { slice } from "lodash";
import { Context as NationalTrendDataContext } from "@Contexts/nationalTrendData";
import { NationalTrendDataType } from "@Types/nationalTrendData";
import { Box, Title2 } from "@Components/Layout/elements";
import { dateFormatter } from "@Components/Homepage/utils";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function Charts(): ReactElement {
  const { formatMessage, locale } = useIntl();

  // @ts-ignore
  const { store: nationalTrendDataStore, onGetNationalTrendData } = React.useContext(NationalTrendDataContext);

  React.useEffect(() => {
    onGetNationalTrendData();
  }, []);

  const labelFormat = locale === "it" ? "dd MMMM" : "MMMM do";

  const { data: nationalTrendData }: { data: [NationalTrendDataType] } = nationalTrendDataStore;
  const lastWeekData = slice(nationalTrendData, nationalTrendData.length - 7);
  const labels = lastWeekData.map(i => dateFormatter({ date: i.date, format: labelFormat, locale }));

  const lineChartData = {
    infected: lastWeekData.map(i => i.infected),
    healed: lastWeekData.map(i => i.healed),
    deaths: lastWeekData.map(i => i.deaths),
    testPerformed: lastWeekData.map(i => i.testPerformed),
  };

  const barChartData = {
    newInfected: lastWeekData.map(i => i.newInfected),
  };

  return (
    <Box display="flex" flexWrap="wrap">
      <Box width={[1, 1, 1, 1 / 2]} pr={[0, 0, 0, "base"]} py="large">
        <Title2 mb="large">{formatMessage({ id: "pages.homepage.lastWeekChartData1.title" })}</Title2>
        <LineChart data={lineChartData} labels={labels} />
      </Box>

      <Box width={[1, 1, 1, 1 / 2]} pl={[0, 0, 0, "base"]} py="large">
        <Title2 mb="large">{formatMessage({ id: "pages.homepage.lastWeekChartData2.title" })}</Title2>
        <BarChart data={barChartData} labels={labels} />
      </Box>
    </Box>
  );
}

export default Charts;
