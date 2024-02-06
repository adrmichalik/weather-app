import React from "react";

function HourlySliderItem({
  hour,
  minutes,
  icon,
  temperature,
  temperature_unit,
}) {
  return (
    <div className="hourly_slider_item">
      <div>Hourly</div>
      <div>Slider</div>
      <div>Item</div>
    </div>
  );
}

export default HourlySliderItem;
