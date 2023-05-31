import ExportedImage from "next/image";
import { useAmp } from "next/amp";
export const config = { amp: "true" };

const AMPImage = (props) =>{
      const loadAmp = useAmp();
      return(
        <>
            {loadAmp ? (
              <amp-img
                src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}
                layout={props.layout}
              />
            ) : (
              <ExportedImage
              src={props.src}
              width={props.width}
              height={props.height}
              alt={props.alt}
              layout={props.layout}
              />
            )}
        </>
      );
}

export default AMPImage;