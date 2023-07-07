import React from 'react'
import carouselItem1 from '../assets/Artboard 6.png'
import carouselItem2 from '../assets/Artboard 7.png'
import { MDBCarousel,  MDBCarouselItem } from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showControls className='overlay' >
      <MDBCarouselItem
        itemId={1}
        src={carouselItem1}
        alt='slide1'
      />
      <MDBCarouselItem
        itemId={2}
        src={carouselItem2}
        alt='slide2'
      />
      <MDBCarouselItem
        itemId={3}
        src={carouselItem1}
        alt='slide3'
      />
      <MDBCarouselItem
        itemId={4}
        src={carouselItem2}
        alt='slide4'
      />
    </MDBCarousel>
  )
}
