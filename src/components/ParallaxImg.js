import React from "react";
import { Parallax } from "react-parallax";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const ParallaxImg = props => {
  const { url } = props;
  return (
    <div style={styles}>

        <Parallax bgImage={url} strength={500}>
          <div style={{ height: 400 }}>
            
          </div>
        </Parallax>

    </div>
  );
};

export default ParallaxImg;
