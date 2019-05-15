import React from "react";
import ParallaxImg from "./ParallaxImg";
import solar1 from "../img/solar-1.jpg";
import solar2 from "../img/solar-2.jpeg";
import Marketing from "./ContainerMarketing";
import JumbotronTop from "./JumbotronTop";
import Featurette from "./Featurette";


const Accueil = () => {
  return (
    <div>
      <JumbotronTop/>
      <Marketing/>
      <ParallaxImg url={solar1} />
      <Featurette/>
      <ParallaxImg url={solar2} />
    </div>
  );
};
export default Accueil;
