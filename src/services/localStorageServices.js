export const APP_PREFIX = "weather_app_";

/**
 * Returns clear (not parsed) string from localStorage
 * @param {string} itemName - item name stored in localStorage
 * @returns {Array | null}
 */
//
export function load(itemName) {
  const stringFromLocalStorage = localStorage.getItem(APP_PREFIX + itemName);

  return stringFromLocalStorage;
}

/**
 * Adds item to localStorage
 * @param {string} itemName - item name stored in localStorage
 * @param {string} notParsedValue - not parsed value to add
 * @returns {void}
 */
//
export function add(itemName, notParsedValue) {
  localStorage.setItem(APP_PREFIX + itemName, JSON.stringify(notParsedValue));
}

/**
 * Adds item to array in localStorage and return that array
 * @param {string} arrayName - array name stored in localStorage
 * @param {string} itemToAdd - value we want to add
 * @returns {Array}
 */
//
export function addToArray(arrayName, itemToAdd) {
  const locationsFromLocalStorage = localStorage.getItem(
    APP_PREFIX + arrayName
  );

  let locationsToUpdate = JSON.parse(locationsFromLocalStorage);
  locationsToUpdate.push(itemToAdd);

  localStorage.setItem(
    APP_PREFIX + arrayName,
    JSON.stringify(locationsToUpdate)
  );

  return locationsToUpdate;
}

/**
 * Returns JSON parsed array from localStorage
 * @param {string} arrayName - array name stored in localStorage
 * @returns {Array}
 */
//
export function loadArray(arrayName) {
  const stringFromLocalStorage = localStorage.getItem(APP_PREFIX + arrayName);

  const parsedArray = JSON.parse(stringFromLocalStorage);

  return parsedArray;
}
