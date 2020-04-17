import React from "react";

export type CarouselProps = {
  todayNationalTrendData: object;
  yesterdayNationTrendData: object;
};

export type CarouselWrapperProps = {
  children: Array<React.ReactElement>;
};

export type LastUpdateProps = {
  date: string;
};
