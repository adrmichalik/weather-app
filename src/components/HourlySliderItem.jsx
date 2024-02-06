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
      <div>
        {hour % 24}
        {minutes != undefined && ":" + minutes}
      </div>
      <div>{icon}</div>
      <div>
        {temperature}
        {temperature_unit}
      </div>
    </div>
  );
}

export default HourlySliderItem;
