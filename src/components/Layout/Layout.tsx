/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import numeral from "numeral";
// @ts-ignore
import itLocale from "numeral/locales/it";
import { useIntl } from "gatsby-plugin-intl";
import { ThemeProvider } from "styled-components";
import { Box } from "./elements";
import theme from "../../theme/theme";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactElement => {
  const { locale } = useIntl();

  React.useEffect(() => {
    if (!numeral.locales.it) {
      numeral.register("locale", "it", itLocale);
    }
    numeral.locale(locale);
  }, [locale]);

  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth={[1144]} mx="auto" px="mid" py={["mid", "mlarge"]}>
        <GlobalStyle />
        <Header />

        <main>{children}</main>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
