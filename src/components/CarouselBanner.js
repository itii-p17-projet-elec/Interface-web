import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import Diagramme from "../img/Diagramme fonctionnel.png";
import Interface from "../img/interfaces.png";
import Organisation from "../img/organisation.png";

const items = [
  {
    src: Diagramme,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: Interface,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: Organisation,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const CarouselBanner = () => <UncontrolledCarousel items={items} />;

export default CarouselBanner;
