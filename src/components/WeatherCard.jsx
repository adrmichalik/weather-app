import { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function WeatherCard({ locationName, coordinates }) {
  const [location_name, setLocation_name] = useState(locationName);
  const [weather, setWeather] = useState();
  const [loadingApiResponse, setLoadingApiResponse] = useState(true);
  const [errorApiResponse, setErrorApiResponse] = useState(false);

  useEffect(() => {
    let { longitude, latitude } = coordinates;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&timezone=auto&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset`;

    axios
      .get(url)
      .then((res) => {
        setWeather(res.data);
        setLoadingApiResponse(false);
        // For development only
        console.log(res.data);
      })
      .catch((error) => {
        // For now only log it into console, in the future Alert it
        setErrorApiResponse(true);
        setLoadingApiResponse(false);
        console.error(error);
      });
  }, []);

  if (errorApiResponse) return <h1>Error</h1>;
  if (loadingApiResponse) return <h1>Loading</h1>;

  return (
    <Card className="weather_card">
      <Card.Body>
        <div className="main_informations">
          <h5>{location_name}</h5>
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
