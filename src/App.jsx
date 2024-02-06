import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedId) {
    setIndex(selectedId);
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="weather_cards"
      touch={false}
      variant="dark"
      interval={null}
      // TODO:
      // In the future it will depends on card numbers
      indicators={true}
      controls={true}
    >
      <Carousel.Item>
        <WeatherCard />
      </Carousel.Item>
      <Carousel.Item>
        <WeatherCard />
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
