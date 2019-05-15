import React from "react";
import { Container } from "reactstrap";
import Elec from "../img/elec.jpg"
import Meca from "../img/meca.jpg"
import Soft from "../img/soft.jpg"

const Featurette = () => {
  return (
    <Container>
      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Ingénierie Mécanique.{" "}
            <span class="text-muted">Etude d'un système de motorisation d'axe.</span>
          </h2>
          <p class="lead">
            
          </p>
        </div>
        <div class="col-md-5">
        <img src={Meca} width="500" height="500" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"alt="meca"></img>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Ingénierie Electronique.{" "}
            <span class="text-muted">Etude d'un système de contrôle de charge et de transmission radio</span>
          </h2>
          <p class="lead">
           
          </p>
        </div>
        <div class="col-md-5 order-md-1" >
            <img src={Elec} width="500" height="500" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"alt="elec"></img>
            </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Ingénierie Logicielle. <span class="text-muted">Système d'information complet.</span>
          </h2>
          <p class="lead">
            Comprenant la remontée, la persistance et l'exploitation des informations du système de charge.
          </p>
        </div>
        <div class="col-md-5" >
        <img src={Soft} width="500" height="500" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"alt="meca"></img>
        </div>
      </div>

      <hr class="featurette-divider" />
    </Container>
  );
};
export default Featurette;
