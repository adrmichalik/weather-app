function ForecastDayItem({
  date,
  weather_code,
  temp_ranges,
  temp_ranges_unit,
}) {
  return (
    <>
      <span className="time">
        {new Date(date).toLocaleDateString("en", { weekday: "long" })}
      </span>
      {/* Later we will get the icon from WeatherStatus service */}
      <span className="icon">{weather_code}</span>
      <span className="temp_range">
        From
        <span className="temp_range_blocks">{Math.round(temp_ranges.min)}</span>
        to
        <span className="temp_range_blocks">{Math.round(temp_ranges.max)}</span>
        {temp_ranges_unit}
      </span>
    </>
  );
}

export default ForecastDayItem;
