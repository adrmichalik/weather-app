import Card from "react-bootstrap/Card";
import HourlySliderItem from "./HourlySliderItem";

function HourlySlider() {
  return (
    <Card className="hourly_slider">
      <HourlySliderItem />
      <HourlySliderItem />
    </Card>
  );
}

export default HourlySlider;
