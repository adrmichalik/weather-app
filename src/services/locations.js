import { addToArray, add, loadArray, load } from "./localStorageServices";
import { v4 as uuid } from "uuid";

class Location {
  constructor(locationName, latitude, longitude) {
    this.id = uuid();
    this.locationName = locationName;
    this.coordinates = {
      latitude: latitude,
      longitude: longitude,
    };
  }
}
const SAVED_LOCATIONS_KEY = "locations";

/**
 * Loads `Locations` from localStorage
 * - If `Locations` are not present in localStorage returns empty Array and sets empty Array in localStorage
 * @returns {Array<Location>}
 */
//
export function loadLocations() {
  const locationsFromLocalStorage = load(SAVED_LOCATIONS_KEY);

  if (
    locationsFromLocalStorage == null ||
    locationsFromLocalStorage == undefined
  ) {
    // Locations item are not present in local storage, set it to default empty array
    // For development
    console.warn(
      "Locations from local storage is null. Setting default value."
    );
    add(SAVED_LOCATIONS_KEY, []); // Set default value in localStorage
    return [];
  }

  return JSON.parse(locationsFromLocalStorage);
}

/**
 * Adds new location to display weather card and returns updated array
 * @param {string} locationName
 * @param {number} latitude
 * @param {number} longitude
 * @returns {Array<Location>}
 */
//
export function addLocation(locationName, latitude, longitude) {
  const newLocationInfo = new Location(locationName, latitude, longitude);

  const locationsToUpdate = addToArray(SAVED_LOCATIONS_KEY, newLocationInfo);

  return locationsToUpdate;
}

/**
 * Delete location based on id and returns updated array
 * - If `locationId` is not valid throws "No such ID."
 * @param {string} locationId
 * @returns {Array<Location>}
 */
//
export function deleteLocation(locationId) {
  let locationsToUpdate = loadArray(SAVED_LOCATIONS_KEY);

  let newLocations = locationsToUpdate.filter(
    (location) => location.id != locationId
  );

  if (locationsToUpdate.length === newLocations.length) throw "No such ID.";

  add(SAVED_LOCATIONS_KEY, newLocations);

  return newLocations;
}
