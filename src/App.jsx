import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import WeatherCard from "./components/WeatherCard";
import GeolocationWeatherCard from "./components/GeolocationWeatherCard";
import {
  loadLocations,
  addLocation,
  deleteLocation,
} from "./services/locations";
import ModalAddNewLocation from "./components/ModalAddNewLocation";
import CircleButton from "./components/CircleButton";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import WeatherCardError from "./components/WeatherCardError";
import Button from "react-bootstrap/Button";
import AlertBar from "./components/AlertBar";
import { useAddAlert } from "./hooks/AlertProvider";

function App() {
  const [index, setIndex] = useState(0);
  const [usingGeolocation, setUsingGeolocation] = useState(true);
  const [locations, setLocations] = useState([]);
  const [showAddNewLocationModal, setShowAddNewLocationModal] = useState(false);

  const addAlert = useAddAlert();

  function handleSelect(selectedId) {
    setIndex(selectedId);
  }

  function handleGeoloacationError() {
    setUsingGeolocation(false);
    addAlert({
      text: "To use geolocation card, you must turn on geolocalization.",
      type: "info",
    });
  }

  function handleAddLocation(locationName, latitude, longitude) {
    setLocations(addLocation(locationName, latitude, longitude));
    addAlert({ text: "Location added successfully.", type: "success" });
  }

  function handleDeleteLocation(locationId) {
    try {
      setLocations(deleteLocation(locationId));
    } catch (error) {
      addAlert({
        text: "Something went wrong while deleting location. Try later.",
        type: "danger",
      });
      console.error(error);
      return;
    }
    addAlert({ text: "Location deleted successfully.", type: "info" });
    if (index == 0) return;
    setIndex((previousValue) => previousValue - 1);
  }

  useEffect(() => {
    setLocations(loadLocations());
  }, []);

  return (
    <>
      <AlertBar />
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={
          usingGeolocation ? `weather_cards using_geolocation` : "weather_cards"
        }
        touch={false}
        variant="dark"
        interval={null}
        indicators={true}
        controls={usingGeolocation + locations.length > 1}
      >
        {usingGeolocation == false && locations.length == 0 && (
          <Carousel.Item>
            <WeatherCardError>
              <div>
                <Button onClick={() => setShowAddNewLocationModal(true)}>
                  Add a new location
                </Button>
                <br />
                or turn on geolocation and refresh the page.
              </div>
            </WeatherCardError>
          </Carousel.Item>
        )}
        {usingGeolocation && (
          <Carousel.Item>
            <GeolocationWeatherCard handleError={handleGeoloacationError} />
          </Carousel.Item>
        )}
        {locations.map((location) => {
          return (
            <Carousel.Item key={location.id}>
              <WeatherCard
                locationName={location.locationName}
                coordinates={location.coordinates}
                handleDelete={() => handleDeleteLocation(location.id)}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <ModalAddNewLocation
        show={showAddNewLocationModal}
        handleClose={() => setShowAddNewLocationModal(false)}
        handleAdd={handleAddLocation}
      />
      <CircleButton
        icon={<MdOutlineAddLocationAlt />}
        additionalClasses="button_open_modal"
        onClickHandler={() => {
          setShowAddNewLocationModal(true);
        }}
      />
    </>
  );
}

export default App;
