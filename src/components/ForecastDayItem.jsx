function ForecastDayItem({
  date,
  weather_code,
  temp_ranges,
  temp_ranges_unit,
}) {
  return (
    <>
      <span>
        {new Date(date).toLocaleDateString("en", { weekday: "long" })}
      </span>
      {/* Later we will get the icon from WeatherStatus service */}
      <span>{weather_code}</span>
      <span>
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
