import Card from "react-bootstrap/Card";
import HourlySliderItem from "./HourlySliderItem";

function HourlySlider({ forecasts, sunrises, sunsets, forecasts_unit }) {
  return (
    <Card className="hourly_slider">
      <HourlySliderItem />
      <HourlySliderItem />
    </Card>
  );
}

export default HourlySlider;
