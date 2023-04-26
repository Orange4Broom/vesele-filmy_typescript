import Navigation from "../../components/navigation/Navigation";
import ImageSlider from "../../components/imageslider/ImageSlider";

function Home() {
  const images = [
    "/img/films/joker.svg",
    "/img/films/knight.svg",
    "/img/films/willy.svg",
    "/img/films/9.svg",
  ];

  const descriptions = [
    "Description for Image 1",
    "Description for Image 2",
    "Description for Image 3",
    "Description for Image 4"
  ];

  return (
    <>
      <Navigation />
      <div>
        <ImageSlider
          images={images}
          descriptions={descriptions}
          autoplayInterval={3000}
        />
      </div>
    </>
  )
}

export default Home;