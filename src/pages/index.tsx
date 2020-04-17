import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "@Components/Layout";
import SEO from "@Components/SEO";
import Homepage from "@Components/Homepage";
import { Provider as NationalTrendDataProvider } from "@Contexts/nationalTrendData";
import { Provider as WorldDataProvider } from "@Contexts/worldData";
import { Provider as RegionsDataProvider } from "@Contexts/regionsData";

const IndexPage = (): React.ReactElement => {
  const { formatMessage } = useIntl();

  return (
    <Layout>
      <SEO
        title={formatMessage({ id: "pages.homepage.title" })}
        description={formatMessage({ id: "globals.header.description" })}
        path="/"
      />

      <NationalTrendDataProvider>
        <WorldDataProvider>
          <RegionsDataProvider>
            <Homepage />
          </RegionsDataProvider>
        </WorldDataProvider>
      </NationalTrendDataProvider>
    </Layout>
  );
};

export default IndexPage;
