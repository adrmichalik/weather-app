import { useState, useEffect } from "react";

/**
 * Returns array with:
 * - loadingGeolocation: location is being loaded (true/false)
 * - errorGeolocation: error was ecountered (true/false)
 * - coordinants: object with latitude and longitude based on window.navigator.geolocation
 */
function useGeolocation() {
  const [loadingGeolocation, setLoadingGeolocation] = useState(true);
  const [errorGeolocation, setErrorGeolocation] = useState(false);
  const [coordinants, setCoordinants] = useState({});

  function handleSuccess(geolocationPosition) {
    setCoordinants({
      latitude: geolocationPosition.coords.latitude,
      longitude: geolocationPosition.coords.longitude,
    });
    setLoadingGeolocation(false);
  }

  function handleError(error) {
    console.error(error);
    setErrorGeolocation(true);
    setLoadingGeolocation(false);
  }

  useEffect(() => {
    // For development purposes
    console.log("Using geolocation.");
    window.navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return [loading, error, coordinants];
}

export default useGeolocation;
