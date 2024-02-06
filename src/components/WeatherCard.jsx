import { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import HourlySlider from "./HourlySlider";

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
          <h5>{locationName}</h5>
          <h2>
            {Math.round(weather.current.temperature_2m)}{" "}
            {weather.current_units.temperature_2m}
          </h2>
          <h4>{weather.current.weather_code}</h4>
          <span>
            From {Math.round(weather.daily.temperature_2m_min[0])}{" "}
            {weather.daily_units.temperature_2m_min} to{" "}
            {Math.round(weather.daily.temperature_2m_max[0])}{" "}
            {weather.daily_units.temperature_2m_max}
          </span>
        </div>
        <div>
          {/* In the future HourlyTempSlider (might change name) */}
          {/* It will contain temp, weather related icon and hour */}
          <HourlySlider
            forecasts={weather.hourly}
            sunrises={weather.daily.sunrise}
            sunsets={weather.daily.sunset}
            forecasts_unit={weather.hourly_units.temperature_2m}
            current_temp_info={{
              temp: weather.current.temperature_2m,
              code: weather.current.weather_code,
            }}
          />

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
