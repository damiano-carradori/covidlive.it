import React from "react";
import Layout from "@Components/Layout";
import SEO from "@Components/SEO";
import { Link, useIntl } from "gatsby-plugin-intl";
import { Box, Title1, Button } from "@Components/Layout/elements";

const NotFoundPage = (): React.ReactElement => {
  const { formatMessage } = useIntl();

  return (
    <Layout>
      <SEO
        title={`404: ${formatMessage({ id: "pages.notFound.title" })}`}
        description={formatMessage({ id: "globals.header.description" })}
        path="/404/"
      />

      <Box py="huge" textAlign="center">
        <Title1 my="xlarge">{formatMessage({ id: "pages.notFound.title" })}</Title1>
        <Link to="/">
          <Button variant="primary">{formatMessage({ id: "pages.notFound.ctaLabel" })}</Button>
        </Link>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
