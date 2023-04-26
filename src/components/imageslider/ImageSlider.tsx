import React, { useState, useEffect } from "react";
import "./imageslider.scss";
import Icon from "../Icon/Icons";

interface Props {
  images: string[];
  names: string[];
  descriptions: string[];
  ratings: string[];
  autoplayInterval?: number;
}

const ImageSlider: React.FC<Props> = ({
  images,
  descriptions,
  names,
  ratings,
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
          <div key={index} className={`slider-image ${index === currentImageIndex ? "active" : ""}`}>

            <div className="film">
              <h1 className="film-name">{names[index]}</h1>
              <p className="film-description">{descriptions[index]}</p>

              <div className="film-bottom">
                <button className="add-to-watchlist"><Icon name="bookmark" type="fas" color="" />Add to watchlist</button>
                <p className="film-rating">{ratings[index]}<Icon name="star" type="fas" color="#28d9ba"/></p>
              </div>

            </div>

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
