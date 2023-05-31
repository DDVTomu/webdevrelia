import ExportedImage from "next/image";
import { useAmp } from "next/amp";
export const config = { amp: "true" };

const AMPImage = (props) =>{
      const loadAmp = useAmp();
      return(
        <>
            {loadAmp ? (
              <amp-img
              {...props}
              />
            ) : (
              <ExportedImage
              {...props}
              />
            )}
        </>
      );
}

export default AMPImage;