import WeatherCard from "./WeatherCard";
import useGeolocation from "../hooks/useGeolocation";
import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCardLoading from "./WeatherCardLoading";

function GeolocationWeatherCard({ handleError }) {
  const [geoloactionCityName, setGeolocationCityName] = useState();
  const [loadingGeolocation, errorGeolocation, coordinates] = useGeolocation();

  useEffect(() => {
    if (loadingGeolocation == true || errorGeolocation == true) return;

    let { latitude, longitude } = coordinates;

    // API to get actual position as town name
    const geoLoactionUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    axios
      .get(geoLoactionUrl)
      .then((res) => {
        setGeolocationCityName(res.data.city);
      })
      .catch((error) => {
        console.error(error);
        setGeolocationCityName("--");
        handleError();
        // In the future alert
      });
  }, [coordinates]);

  if (errorGeolocation) {
    handleError();
    return;
  }
  if (loadingGeolocation || geoloactionCityName == undefined)
    return <WeatherCardLoading />;

  return (
    <WeatherCard locationName={geoloactionCityName} coordinates={coordinates} />
  );
}

export default GeolocationWeatherCard;
