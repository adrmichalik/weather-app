import React from "react";

function HourlySliderItem({ hour, minutes, icon, description }) {
  return (
    <div className="hourly_slider_item">
      <div>
        {typeof hour == "number" ? hour % 24 : hour}
        {minutes != undefined && ":" + minutes}
      </div>
      <div>{icon}</div>
      <div>
        {typeof description == "number"
          ? Math.round(description) + "°"
          : description.charAt(0).toUpperCase() + description.slice(1)}
      </div>
    </div>
  );
}

export default HourlySliderItem;
