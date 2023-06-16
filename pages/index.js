import React from 'react';
import Seo from "@components/seo";
import Layout from "@components/common/layout";
import { fetchAPI } from "lib/api";
import dynamic from 'next/dynamic'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalContext } from "./_app";

const HeroSection = dynamic(() => import('@components/home/heroSection'))
const IntroSection = dynamic(() => import('@components/home/introSection'))
const ProjectsSection = dynamic(() => import('@components/home/projectsSection'))
const IndustriesSection = dynamic(() => import('@components/home/industriesSection'))
const ClientSection = dynamic(() => import('@components/home/clientSection'))
const AwardSection = dynamic(() => import('@components/home/awardSection'))
const TopQualitySection = dynamic(() => import('@components/home/topQualitySection'))
const BlogSection = dynamic(() => import('@components/home/blogSection'))
const ContactSection = dynamic(() => import('@components/home/contactSection'))

const Home = ({ homepage, portfolios, blogs }) => {
  const global = React.useContext(GlobalContext);
  const seo = {
    metaTitle: global.data.attributes.defaultSeo?.metaTitle || "Relia Software: Top Mobile App Development Company in Vietnam,USA",
    metaDescription: global.data.attributes.defaultSeo?.metaDescription || "Relia software is recognized as one of the best mobile app development companies in 2019. We believe in creating digital experiences that reach millions and deliver value at every step.",
    shareImage: global.data.attributes.defaultSeo?.shareImage.data.attributes.url,
    article: false,
  };

  return (
    <Layout>
      <Seo seo={seo} />
      <HeroSection />
      <IntroSection />
      <ProjectsSection data={portfolios.data} />
      <IndustriesSection />
      <ClientSection />
      <AwardSection />
      <TopQualitySection />
      <BlogSection data={blogs.data} />
      <ContactSection />
    </Layout>
  );
};

export async function getStaticProps() {
  const homepage = await fetchAPI("homepage");
  const portfolios = await fetchAPI(
    "portfolios?pagination[pageSize]=3&populate=*&_limit=3"
  );
  const blogs = await fetchAPI("blogs?pagination[pageSize]=3&populate=*&sort[0]=createdAt%3Adesc&_limit=3");
  return {
    props: { homepage, portfolios, blogs },
    revalidate: 1,
  };
}
export default Home;