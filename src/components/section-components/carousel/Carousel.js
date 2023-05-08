/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    const carouselItems = [
      {
        imageUrl: 'path-to-image1.jpg',
        caption: 'Caption 1',
      },
      {
        imageUrl: 'path-to-image2.jpg',
        caption: 'Caption 2',
      },
      // Add more items as needed
    ];
  
    return (
      <Carousel showStatus={false} showThumbs={false}>
        {carouselItems.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt={`Carousel Item ${index + 1}`} />
            <p className="legend">{item.caption}</p>
          </div>
        ))}
      </Carousel>
    );
  };

export default CarouselComponent

