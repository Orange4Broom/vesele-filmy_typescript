import Navigation from "../../components/navigation/Navigation";
import ImageSlider from "../../components/imageslider/ImageSlider";

function Home() {
  const images = [
    "/img/films/joker.svg",
    "/img/films/knight.svg",
    "/img/films/willy.svg",
    "/img/films/9.svg",
  ];

  const names = [
    "Joker",
    "The dark knight",
    "Willy's wonderland",
    "9"
  ]

  const descriptions = [
    "Description for Image 1",
    "Description for Image 2",
    "Description for Image 3",
    "Description for Image 4"
  ];

  const ratings = [
    "4.1/5",
    "4.3/5",
    "3.1/5",
    "3.5/5"
  ]

  return (
    <>
      <Navigation />
      <div>
        <ImageSlider
          images={images}
          names={names}
          descriptions={descriptions}
          ratings={ratings}
          autoplayInterval={3000}
        />
      </div>
    </>
  )
}

export default Home;