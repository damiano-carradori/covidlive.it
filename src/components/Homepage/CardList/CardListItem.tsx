import React, { ReactElement } from "react";
import numeral from "numeral";
import { AccordionItem, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import Skeleton from "@Components/Skeleton";
import { Box, CardBox, Text } from "@Components/Layout/elements";
import { CardListItemProps } from "./types";
import CardDetailsRow from "./CardDetailsRow";
import { Chevron, StyledAccordionItemButton } from "./elements";

const CardListItem = ({ index, item, isLoading, enableAccordion }: CardListItemProps): ReactElement => {
  const {
    name = "",
    infected = 0,
    newInfected = 0,
    healed = 0,
    deaths = 0,
    testPerformed = 0,
    homeConfinement = 0,
    hospitalized = 0,
    intensiveCare = 0,
    hospitalizedWithSymptoms = 0,
  } = item;

  return (
    <CardBox boxShadow="small" mb="small" overflow="hidden">
      <AccordionItem uuid={name}>
        <AccordionItemHeading>
          <StyledAccordionItemButton p={["mid", "large"]}>
            {isLoading ? (
              <Skeleton />
            ) : (
              <Box width={1} display="flex" alignItems="center" color="neutral200">
                <Text mr={["mid", "base"]}>{index + 1}</Text>
                <Box
                  display="flex"
                  flexGrow={1}
                  justifyContent="space-between"
                  flexDirection={["column", "row"]}
                  mr={["mid", "base"]}
                >
                  <Text fontSize={2} fontWeight="bold" color="neutral400" mb={["base", 0]} textTransform="uppercase">
                    {name}
                  </Text>
                  <Box display="grid" gridAutoFlow="column" gridColumnGap="base" color="neutral300" textAlign="right">
                    <Box position="relative" fontSize={1} fontWeight="bold">
                      <span role="img" aria-labelledby="img">
                        😷
                      </span>
                      {numeral(infected).format("0,0")}
                      <Text position="absolute" fontSize={0} color="red" right={0} top={["100%", "100%", "-80%"]}>
                        {numeral(newInfected).format("+0,0")}
                      </Text>
                    </Box>
                    <Box position="relative" fontSize={1} fontWeight="bold">
                      <span role="img" aria-labelledby="img">
                        😊
                      </span>
                      {numeral(healed).format("0,0")}
                    </Box>
                    <Box position="relative" fontSize={1} fontWeight="bold">
                      <span role="img" aria-labelledby="img">
                        😢
                      </span>
                      {numeral(deaths).format("0,0")}
                    </Box>
                  </Box>
                </Box>
                {enableAccordion && <Chevron />}
              </Box>
            )}
          </StyledAccordionItemButton>
        </AccordionItemHeading>

        {enableAccordion && !isLoading && (
          <AccordionItemPanel>
            <Box px="large" pb="base">
              <CardDetailsRow
                title="pages.homepage.allRegions.regionBlockDataLabels.hospitalizedLabel"
                number={hospitalized}
              />
              <CardDetailsRow
                title="pages.homepage.allRegions.regionBlockDataLabels.intensiveCare"
                number={intensiveCare}
              />
              <CardDetailsRow
                title="pages.homepage.allRegions.regionBlockDataLabels.hospitalizedWithSymptoms"
                number={hospitalizedWithSymptoms}
              />
              <CardDetailsRow
                title="pages.homepage.allRegions.regionBlockDataLabels.homeConfinement"
                number={homeConfinement}
              />
              <CardDetailsRow
                title="pages.homepage.allRegions.regionBlockDataLabels.testPerformed"
                number={testPerformed}
              />
            </Box>
          </AccordionItemPanel>
        )}
      </AccordionItem>
    </CardBox>
  );
};

export default CardListItem;
