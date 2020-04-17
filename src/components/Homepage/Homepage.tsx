import React from "react";
import CarouselSection from "./CarouselSection";
import AllRegions from "./AllRegions";
import Charts from "./Charts";
import AllCountries from "./AllCountries";
import { Box } from "@Components/Layout/elements";

function Homepage(): React.ReactElement {
  return (
    <Box py="xlarge">
      <CarouselSection />

      <AllRegions />

      <Charts />

      <AllCountries />
    </Box>
  );
}

export default Homepage;
