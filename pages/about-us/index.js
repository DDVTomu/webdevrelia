import { fetchAPI } from "lib/api";
import Layout from "@components/common/layout";
import Seo from "@components/seo";
import styles from "./aboutus.module.scss";
import ExportedImage from "next/image";

const AboutUs = ({ about }) => {
  const seo = {
    // metaTitle: about.metaTitle || about.title,
    // metaDescription: article.description,
    // shareImage: article.image,
    article: true,
  };
  return (
    <Layout>
      <Seo seo={seo} />
      <section className={styles.hero}>
        <div className={` ${"container"} ${styles.hero__container}`}>
          {/* <h1>{work.title}</h1> */}
          <div>
            <p className={styles.hero__mini_sub}>services</p>
            <h1>
              Support bold Business
              <br />
              Visions
            </h1>
            <p>
              Focus on the big picture and let us take care of the details. From
              business strategy based on deep
              <br /> market research to the most advanced tech – go with our
              company and turn your
              <br /> idea into a cutting-edge solution. All in one place.
            </p>
          </div>
          <div className={styles.hero__inner}>
            <div className={styles.hero__col_left}>
              <h2>
                All-in-one development services
                <br /> for business leaders
              </h2>
            </div>
            <div className={styles.hero__col_right}>
              Looking for a reliable partner to guide you through the entire
              software development process? What if we told you that you can get
              strategy, design and development services – all from one agency?
              At Relia Software, we like to keep things simple. We answer
              business challenges with custom-made software. Instead of managing
              separate vendors, you can focus on the important part – your
              business.
            </div>
          </div>
          <div className={styles.hero__inner}>
            <div className={styles.hero__img_left}>
              <div className={styles.reviews__img}>
                <ExportedImage
                  src="/images/Brand.png"
                  width={1500}
                  height={140}
                  layout="intrinsic"
                  quality={100}
                />
              </div>
            </div>
            <div className={styles.hero__img_right}>
              <div className={styles.reviews__img}>
                <ExportedImage
                  src="/images/Brand.png"
                  width={1500}
                  height={140}
                  layout="intrinsic"
                  quality={100}
                />
              </div>
            </div>
          </div>
          {/* <Partner partner={partner} /> */}
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const about = await fetchAPI("/about-us");

  return {
    props: { about },
    revalidate: 1,
  };
}

export default AboutUs;
