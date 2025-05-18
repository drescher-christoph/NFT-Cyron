import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image.src} 
              alt={image.alt || `Slide ${index + 1}`} 
              className="w-full rounded-xl border border-cyan-500 shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;