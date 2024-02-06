import React from "react";

function HourlySliderItem({
  hour,
  minutes,
  icon,
  description,
  temperature_unit,
}) {
  return (
    <div className="hourly_slider_item">
      <div>
        {typeof hour == "number" ? hour % 24 : hour}
        {minutes != undefined && ":" + minutes}
      </div>
      <div>{icon}</div>
      <div>
        {description}
        {temperature_unit}
      </div>
    </div>
  );
}

export default HourlySliderItem;
