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

function App() {
  const [index, setIndex] = useState(0);
  const [usingGeolocation, setUsingGeolocation] = useState(true);
  const [locations, setLocations] = useState();
  const [showAddNewLocationModal, setShowAddNewLocationModal] = useState(false);

  function handleSelect(selectedId) {
    setIndex(selectedId);
  }

  function handleGeoloacationError() {
    setUsingGeolocation(false);
  }

  function handleAddLocation(locationName, latitude, longitude) {
    setLocations(addLocation(locationName, latitude, longitude));
  }

  function handleDeleteLocation(locationId) {
    setLocations(deleteLocation(locationId));
    setIndex((previousValue) => previousValue - 1);
  }

  useEffect(() => {
    setLocations(loadLocations());
  }, []);

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={
          usingGeolocation ? `weather_cards using_geolocation` : "weather_cards"
        }
        touch={false}
        variant="dark"
        interval={null}
        // TODO:
        // In the future it will depends on card numbers
        indicators={true}
        controls={true}
      >
        {usingGeolocation && (
          <Carousel.Item>
            <GeolocationWeatherCard handleError={handleGeoloacationError} />
          </Carousel.Item>
        )}
        <Carousel.Item>
          <WeatherCard
            locationName="Cracow"
            coordinates={{ latitude: 50.049683, longitude: 19.944544 }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <WeatherCard
            locationName="Warsaw"
            coordinates={{ latitude: 52.237049, longitude: 21.017532 }}
          />
        </Carousel.Item>
        {locations != undefined &&
          locations.map((location) => {
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
