import React, { useState, useEffect } from "react";
import "./imageslider.scss";

interface Props {
  images: string[];
  descriptions: string[];
  autoplayInterval?: number;
}

const ImageSlider: React.FC<Props> = ({
  images,
  descriptions,
  autoplayInterval = 5000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoplayInterval]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${
              index === currentImageIndex ? "active" : ""
            }`}
          >
            <p className="description">{descriptions[index]}</p>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
