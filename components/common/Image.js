import Image from "next/image";
import { useAmp } from "next/amp";
export const config = { amp: "true" };

const CloudImg = (props) => {
  const loadAmp = useAmp();
  return(
    <>
      {loadAmp?(<amp-img {...props} src={process.env.NEXT_PUBLIC_STRAPI_SERVER + props.src} />):(<Image {...props} src={process.env.NEXT_PUBLIC_STRAPI_SERVER + props.src} />)}
    </>
  );
};

export default CloudImg;
