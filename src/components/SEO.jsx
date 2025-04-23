import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
const Seo = ({ title, description }) => {
  const { site = { siteMetadata: {} } } = useStaticQuery(query);

  const metaDescription = description || site.siteMetadata.description || "";
  const fullTitle = title && site.siteMetadata.title ? `${title} | ${site.siteMetadata.title}` : title || site.siteMetadata.title || "";

  return <Helmet htmlAttributes={{ lang: "en" }} title={fullTitle} meta={[{ name: `description`, content: metaDescription }]} />;
};

export default Seo;
