import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function WeatherCard() {
  return (
    <Card className="weather_card">
      <Card.Body>
        <div className="main_informations">
          <h5>Location name</h5>
          <h2>10 *C</h2>
          <h4>Weather description</h4>
          <span>From 0 *C to 20 *C</span>
        </div>
        <div>
          {/* In the future HourlyTempSlider (might change name) */}
          {/* It will contain temp, weather related icon and hour */}
          <div className="slider">Slider Placeholder</div>

          {/* In the future it will contain multiple forecast items*/}
          {/* Maybe separate component */}
          <ListGroup>
            {/* Header */}
            <ListGroup.Item variant="light">
              Multiple day forecast
            </ListGroup.Item>
            {/* Items */}
            <ListGroup.Item>
              <span>Day name</span>
              <span>Weather Icon</span>
              <span>Temp ranges</span>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
