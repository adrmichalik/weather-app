import Card from "react-bootstrap/Card";
import HourlySliderItem from "./HourlySliderItem";
import { useEffect, useState } from "react";
import { getWeatherIcon } from "../services/WeatherStatus";
import { WiSunrise, WiSunset } from "react-icons/wi";

function HourlySlider({
  forecasts,
  sunrises,
  sunsets,
  forecasts_unit,
  current_temp_info,
}) {
  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    let arr = [];

    let currentHour = new Date().getHours();

    for (let i = 1; i <= 24; i++) {
      arr.push({
        type: "forecast",
        temp: forecasts.temperature_2m[currentHour + i],
        hour: currentHour + i,
        code: forecasts.weather_code[currentHour + i],
      });
    }

    // We only have to check 2 sunrises and 2 sunsets (0 and 1)
    // If we are after "0" sunrise or sunset we must add sunrise/sunset from "1" day
    // It is not guarantee to have 0-0 or 1-1 sunrise-sunset, so we must check it separetly
    let first_sunrise_time = sunrises[0];
    let first_sunset_time = sunsets[0];

    let which_day_sunrise = 0,
      which_day_sunset = 0;
    if (currentHour > first_sunrise_time[11] + first_sunrise_time[12]) {
      which_day_sunrise = 1;
    }
    if (currentHour > first_sunset_time[11] + first_sunset_time[12]) {
      which_day_sunset = 1;
    }

    const sunrise_time = sunrises[which_day_sunrise];
    let parsed_sunrise_time = sunrise_time.slice(11);

    const sunset_time = sunsets[which_day_sunset];
    let parsed_sunset_time = sunset_time.slice(11);

    arr.push({
      type: "sunrise",
      hour:
        parseInt(parsed_sunrise_time[0] + parsed_sunrise_time[1]) +
        24 * which_day_sunrise,
      minutes: parsed_sunrise_time[3] + parsed_sunrise_time[4],
    });
    arr.push({
      type: "sunset",
      hour:
        parseInt(parsed_sunset_time[0] + parsed_sunset_time[1]) +
        24 * which_day_sunset,
      minutes: parsed_sunset_time[3] + parsed_sunset_time[4],
    });

    arr.sort((a, b) => a.hour - b.hour);

    setSliderItems(arr);

    console.log(arr);
  }, []);

  if (sliderItems == undefined) return;

  return (
    <Card className="hourly_slider">
      <HourlySliderItem
        hour="Now"
        icon={getWeatherIcon(current_temp_info.code)()}
        description={current_temp_info.temp}
      />
      {sliderItems.map((item, index) => {
        if (item.type == "forecast")
          return (
            <HourlySliderItem
              key={index}
              hour={item.hour}
              icon={getWeatherIcon(item.code)()}
              description={item.temp}
            />
          );
        if (item.type == "sunset" || item.type == "sunrise")
          return (
            <HourlySliderItem
              key={index}
              hour={item.hour}
              minutes={item.minutes}
              icon={
                item.type == "sunrise" ? (
                  <WiSunrise size={30} />
                ) : (
                  <WiSunset size={30} />
                )
              }
              description={item.type}
            />
          );
      })}
    </Card>
  );
}

export default HourlySlider;
