import React, { ReactElement } from "react";
import { Line } from "react-chartjs-2";
import { useIntl } from "gatsby-plugin-intl";
import { Box, CardBox } from "@Components/Layout/elements";
import { ChartProps } from "./types";
import numeral from "numeral";

const LineChart = ({ data, labels }: ChartProps): ReactElement => {
  const { formatMessage } = useIntl();

  const { infected, testPerformed, healed, deaths } = data;

  const chartData = {
    labels,
    datasets: [
      {
        label: formatMessage({ id: "pages.homepage.lastWeekChartData1.datasetLabel1" }),
        fill: false,
        borderWidth: 2,
        borderColor: "#E86379",
        pointBackgroundColor: "#E86379",
        pointHoverRadius: 5,
        data: infected,
      },
      {
        label: formatMessage({ id: "pages.homepage.lastWeekChartData1.datasetLabel4" }),
        fill: false,
        borderWidth: 2,
        borderColor: "#fcdca3",
        pointBackgroundColor: "#fcdca3",
        pointHoverRadius: 5,
        data: testPerformed,
      },
      {
        label: formatMessage({ id: "pages.homepage.lastWeekChartData1.datasetLabel2" }),
        fill: false,
        borderWidth: 2,
        borderColor: "#20D6A5",
        pointBackgroundColor: "#20D6A5",
        pointHoverRadius: 5,
        data: healed,
      },
      {
        label: formatMessage({ id: "pages.homepage.lastWeekChartData1.datasetLabel3" }),
        fill: false,
        borderWidth: 2,
        borderColor: "#000b33",
        pointBackgroundColor: "#000b33",
        pointHoverRadius: 5,
        data: deaths,
      },
    ],
  };
  const chartOptions = {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "",
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.05)",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: "#000",
      xPadding: 8,
      yPadding: 12,
      titleFontFamily: "Lato",
      titleMarginBottom: 8,
      bodyFontFamily: "Lato",
      bodyFontSize: 13,
      cornerRadius: 8,
      caretSize: 0,
      displayColors: false,
      callbacks: {
        // @ts-ignore
        label: function(tooltipItem, data): string {
          const beforeLabel = data.datasets[tooltipItem.datasetIndex].label;
          const label = numeral(tooltipItem.yLabel).format("0,0");
          return `${beforeLabel}: ${label}`;
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontFamily: "Lato",
        padding: 16,
        fontStyle: "bold",
      },
      position: "bottom",
    },
  };

  return (
    <CardBox px={["mid", "mid", "large"]} py={["large", "large", "xlarge"]} boxShadow="small">
      <Box height={[250, 250, 350, 450]}>
        <Line
          data={chartData}
          width={100}
          height={50}
          // @ts-ignore
          options={chartOptions}
        />
      </Box>
    </CardBox>
  );
};

export default LineChart;
