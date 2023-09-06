import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const images = [
    "https://wallpaperaccess.com/full/1740162.jpg",
    "https://wallpaperaccess.com/full/1740162.jpg",
    "https://wallpaperaccess.com/full/1740162.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSlideChange = (index: React.SetStateAction<number>) => {
    setSelectedIndex(index);
  };

  return (
    <div className="carousel-container relative">
      <Carousel
        selectedItem={selectedIndex}
        showArrows={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        onChange={handleSlideChange}
        autoFocus={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <div
            className={`indicator ${isSelected ? "selected" : ""}`}
            onClick={onClickHandler}
            aria-label={`Go to slide ${index + 1}`}
            role="button"
            tabIndex={0}
          />
        )}
        className="focus:outline-none"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index}`}
              className="carousel-image object-cover h-96 max-w-8"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
