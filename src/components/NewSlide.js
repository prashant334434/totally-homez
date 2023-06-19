import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

const NewSlide = () => {
  return (
    

    
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a.cdn-hotels.com/gdcs/production126/d1421/11d188b3-38f4-4842-88f6-a928f14b5581.jpg" // Replace with the actual image URL or path
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=" // Replace with the actual image URL or path
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.foyerglobalhealth.com/wp-content/uploads/2022/04/Als-Expat-in-Dubai-Alle-unsere-Tipps-fur-eine-erfolgreiche-Auswanderung-1568x1046.jpg" // Replace with the actual image URL or path
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      );
    }
    



export default NewSlide
