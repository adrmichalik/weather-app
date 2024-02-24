import Card from "react-bootstrap/Card";

function WeatherCardError({ children }) {
  return <Card className="weather_card error">{children}</Card>;
}

export default WeatherCardError;
