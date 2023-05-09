import Navigation from "../../components/navigation/Navigation";
import ImageSlider from "../../components/imageslider/ImageSlider";
import { useState } from "react";
import "./home.scss"

function Home() {

  const [searched, setSearched] = useState(true);

  const slides = {
    images: [
      "/img/films/Joker.svg",
      "/img/films/knight.svg",
      "/img/films/willy.svg",
      "/img/films/9.svg",
    ],
    names: [
      "Joker",
      "The Dark Knight",
      "Willy's Wonderland",
      "9"
    ],
    descriptions: [
      "A socially inept clown for hire - Arthur Fleck aspires to be a stand up comedian among his small job working dressed as a clown holding a sign for advertising. He takes care of his mother- Penny Fleck, and as he learns more about his mental illness, he learns more about his past.",
      "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos.",
      "A quiet drifter is tricked into a janitorial job at the now condemned Willy's Wonderland. The mundane tasks suddenly become an all-out fight for survival against wave after wave of demonic animatronics. Fists fly, kicks land, titans clash -- and only one side will make it out alive.",
      "A rag doll that awakens in a postapocalyptic future holds the key to humanity's salvation."
    ],
    ratings: [
      "4.1/5",
      "4.3/5",
      "3.1/5",
      "3.5/5"
    ]
  }

  function handleChangeSearched() {
    setSearched(!searched);
  }

  return (
    <>
      <Navigation />
      {searched ? (
        <div className="Home">
          <h2>bruh</h2>
          <button onClick={handleChangeSearched}>bruh</button>
        </div>
      ) : (
        <div>
          <ImageSlider
            images={slides.images}
            names={slides.names}
            descriptions={slides.descriptions}
            ratings={slides.ratings}
            autoplayInterval={6000}
          />
        </div>
      )}
      
    </>
  )
}

export default Home;