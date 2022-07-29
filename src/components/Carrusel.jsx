import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Carrusel() {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={4000} showThumbs={false} showStatus={false}>
    <div>
        <img src="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg"  height={500}/>
    </div>
    <div>
        <img src="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg" width={'100%'} height={500} />
    </div>
    <div>
        <img src="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg" width={'100%'} height={500}/>
    </div>
</Carousel>
  )
}
