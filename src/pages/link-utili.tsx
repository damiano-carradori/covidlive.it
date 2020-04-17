import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "@Components/Layout";
import SEO from "@Components/SEO";
import { Box, Title2, CardBox } from "@Components/Layout/elements";

const LinkUtili = (): React.ReactElement => {
  const { formatMessage } = useIntl();
  return (
    <Layout>
      <SEO
        title={formatMessage({ id: "pages.usefulLinks.title" })}
        description={formatMessage({ id: "globals.header.description" })}
        path="/link-utili/"
      />

      <Box py="huge">
        <Box py="large">
          <Title2 mb="large">{formatMessage({ id: "pages.usefulLinks.donationLinks.title" })}</Title2>
          <CardBox
            p={["large", "xxlarge"]}
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridRowGap="base"
            gridColumnGap="small"
            fontSize={3}
          >
            <a
              href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link1.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link1.label" })}
            </a>
            <a
              href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link2.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link2.label" })}
            </a>
            <a
              href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link3.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link3.label" })}
            </a>
            <a
              href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link4.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link4.label" })}
            </a>
            <a
              href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link5.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link5.label" })}
            </a>
            <a
              href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link6.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link6.label" })}
            </a>
            <a
              href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link7.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link7.label" })}
            </a>
            <a href="mailto:ciao@covidlive.it" rel="noopener noreferrer" target="_blank">
              <strong>{formatMessage({ id: "pages.usefulLinks.donationLinks.ctaLabel" })}</strong>
            </a>
          </CardBox>
        </Box>
        <Box py="large">
          <Title2 mb="large">{formatMessage({ id: "pages.usefulLinks.usefulLinks.title" })}</Title2>
          <CardBox
            p={["large", "xxlarge"]}
            display="grid"
            gridTemplateColumns="1fr 1fr"
            gridRowGap="base"
            gridColumnGap="small"
            fontSize={3}
          >
            <a
              href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link1.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link1.label" })}
            </a>

            <a
              href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link2.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link2.label" })}
            </a>

            <a
              href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link3.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link3.label" })}
            </a>

            <a
              href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link4.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link4.label" })}
            </a>

            <a
              href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link5.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link5.label" })}
            </a>

            <a
              href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link6.url" })}
              rel="noopener noreferrer"
              target="_blank"
            >
              {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link6.label" })}
            </a>
          </CardBox>
        </Box>
      </Box>
    </Layout>
  );
};

export default LinkUtili;
