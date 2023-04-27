import { getServerSideSitemapLegacy } from "next-sitemap";
import { fetchAPI } from "lib/api";

export const getServerSideProps = async (ctx) => {
  const siteUrl = process.env.NEXT_PUBLIC_URL;
  let blogs = await fetchAPI(
    "blogs?pagination[pageSize]=100&populate=*&sort[0]=publishedAt:DESC"
  );

  let portfolios = await fetchAPI(
    "portfolios?pagination[pageSize]=100&populate=*&sort[0]=publishedAt:DESC"
  );
  const blogSiteMap = blogs?.data?.map((item) => ({
    loc: `${siteUrl}/blog/${item.attributes.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const portfolioSiteMap = portfolios?.data?.map((item) => ({
    loc: `${siteUrl}/portfolio/${item.attributes.slug}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...blogSiteMap,...portfolioSiteMap];

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Site() {}
