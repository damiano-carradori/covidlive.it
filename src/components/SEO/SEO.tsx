/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
// @ts-ignore
import ogImage from "@Assets/images/image-og.jpg";
import { SEOProps } from "./types";

function SEO({ description, meta, title, path }: SEOProps): React.ReactElement {
  const { locale } = useIntl();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={title}
      link={[
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: `${site.siteMetadata.siteUrl}${path}`,
        },
        {
          rel: "alternate",
          hrefLang: "it",
          href: `${site.siteMetadata.siteUrl}/it${path}`,
        },
        {
          rel: "alternate",
          hrefLang: "en",
          href: `${site.siteMetadata.siteUrl}/en${path}`,
        },
      ]}
      //@ts-ignore
      meta={[
        ...meta,
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}/${locale}${path}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: "og:image",
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          property: "og:image:width",
          content: 1200,
        },
        {
          property: "og:image:height",
          content: 630,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  meta: [],
  description: ``,
};

export default SEO;
