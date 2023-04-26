import Navigation from "../../components/navigation/Navigation";
import ImageSlider from "../../components/imageslider/ImageSlider";

function Home() {
  const images = [
    "https://cdn.esawebb.org/archives/images/screen/carinanebula3.jpg",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://cdn.create.vista.com/api/media/small/63829885/stock-photo-tree-reflected-in-the-lake"
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