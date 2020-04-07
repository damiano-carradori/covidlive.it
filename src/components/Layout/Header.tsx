import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { Box, Text, Span } from "./elements";
import CustomLink from "@Components/CustomLink";

const Header = (): React.ReactElement => {
  const { formatMessage } = useIntl();

  return (
    <header>
      <Box
        borderRadius={16}
        backgroundColor="white"
        boxShadow="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={["column", "row"]}
        px="mid"
        py={["mid", "base"]}
      >
        <CustomLink isInternal to="/" textDecoration="none" textTransform="uppercase">
          <Text fontSize={4} fontWeight={900}>
            🦠 covid<Span color="error">live</Span>
          </Text>
          <Text fontSize={0} fontWeight={700} ml="large" py="small">
            {formatMessage({ id: "globals.header.subTitle" })}
          </Text>
        </CustomLink>

        <nav>
          <Box
            display="grid"
            gridAutoFlow="column"
            gridColumnGap="base"
            alignItems="center"
            fontSize={1}
            fontWeight={900}
          >
            <CustomLink isInternal to="/link-utili/" textDecoration="none" textTransform="uppercase">
              {formatMessage({ id: "globals.header.nav.usefulLinkLabel" })}
            </CustomLink>

            <CustomLink to="mailto:ciao@covidlive.it" textDecoration="none" textTransform="uppercase">
              {formatMessage({ id: "globals.header.nav.contactLabel" })}
            </CustomLink>

            <LanguageSwitcher />
          </Box>
        </nav>
      </Box>
    </header>
  );
};

export default Header;
