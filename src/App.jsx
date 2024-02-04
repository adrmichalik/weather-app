import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedId) {
    setIndex(selectedId);
  }

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      touch={false}
      variant="dark"
      interval={null}
      // TODO:
      // In the future it will depends on card numbers
      indicators={true}
      controls={true}
    >
      <Carousel.Item>
        <div className="weather_card">Weather Card #1</div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="weather_card">Weather Card #2</div>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
