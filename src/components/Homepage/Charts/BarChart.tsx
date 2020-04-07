import React, { ReactElement } from "react";
import { Bar } from "react-chartjs-2";
import { useIntl } from "gatsby-plugin-intl";
import { Box, CardBox } from "@Components/Layout/elements";
import { ChartProps } from "./types";
import numeral from "numeral";

const BarChart = ({ data, labels }: ChartProps): ReactElement => {
  const { formatMessage } = useIntl();

  const { newInfected } = data;

  const beforeLabel = formatMessage({ id: "pages.homepage.lastWeekChartData2.datasetLabel1" });

  const chartData = {
    labels,
    datasets: [
      {
        data: newInfected,
        backgroundColor: "#fcdca3",
        hoverBackgroundColor: "#fbc870",
      },
    ],
  };
  const chartOptions = {
    scales: {
      xAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            min: 0,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: "#000",
      cornerRadius: 8,
      xPadding: 8,
      yPadding: 12,
      titleFontFamily: "Lato",
      titleMarginBottom: 8,
      bodyFontFamily: "Lato",
      bodyFontSize: 13,
      caretSize: 0,
      displayColors: false,
      callbacks: {
        label: function(tooltipItem: { yLabel: number }): string {
          const label = numeral(tooltipItem.yLabel).format("0,0");
          return `${beforeLabel}: ${label}`;
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
  };

  return (
    <CardBox px={["mid", "mid", "large"]} py={["large", "large", "xlarge"]} boxShadow="small">
      <Box height={[250, 250, 350, 450]}>
        <Bar data={chartData} width={100} height={50} options={chartOptions} />
      </Box>
    </CardBox>
  );
};

export default BarChart;
