import {
  WiRain,
  WiDaySleet,
  WiNightAltSleet,
  WiNightAltRain,
  WiShowers,
  WiCloud,
  WiDayCloudy,
  WiDayHail,
  WiDayRain,
  WiDayShowers,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiNightAltCloudy,
  WiNightAltPartlyCloudy,
  WiNightAltShowers,
  WiDayFog,
  WiNightFog,
  WiDaySnow,
  WiNightAltSnow,
  WiSnow,
  WiDayRainMix,
  WiNightAltRainMix,
  WiRainMix,
  WiThunderstorm,
  WiDayThunderstorm,
  WiNightAltThunderstorm,
  WiSnowWind,
} from "react-icons/wi";
import { IoMoonOutline } from "react-icons/io5";

// *****************************
// WeatherStatus require code to determine resources
//
// WeatherStatus provides:
// weather description such as "clear sky", "rainy", etc
// weather icon that represents descrption
//
// *****************************

// WeatherInfo
// Object represents particular WeatherStatus based on code

class WeatherInfo {
  constructor(description, icon, icon_night) {
    this.description = description;
    this.icon = icon;

    // With no night icon passed, we just use universal one
    if (icon_night == undefined) this.icon_night = this.icon;
    else this.icon_night = icon_night;
  }
}

const WeatherStatus = {
  0: new WeatherInfo("Clear sky", WiDaySunny, IoMoonOutline),
  1: new WeatherInfo(
    "Mainly clear",
    WiDaySunnyOvercast,
    WiNightAltPartlyCloudy
  ),
  2: new WeatherInfo("Partly cloudy", WiDayCloudy, WiNightAltCloudy),
  3: new WeatherInfo("Overcast", WiCloud),
  45: new WeatherInfo("Fog", WiDayFog, WiNightFog),
  48: new WeatherInfo("Depositing time fog", WiDayFog, WiNightFog),
  51: new WeatherInfo("Drizzle slight", WiDaySleet, WiNightAltSleet),
  53: new WeatherInfo("Drizzle moderate", WiDayShowers, WiNightAltShowers),
  55: new WeatherInfo("Dense intensity drizzle", WiShowers),
  56: new WeatherInfo("Freezing drizzle light intensity", WiShowers),
  57: new WeatherInfo("Freezing drizzle heavy intensity", WiShowers),
  61: new WeatherInfo("Rain slight", WiDaySleet, WiNightAltSleet),
  63: new WeatherInfo("Rain moderate", WiDayRain, WiNightAltRain),
  65: new WeatherInfo("Rain heavy", WiRain),
  66: new WeatherInfo("Light freezing rain", WiDaySleet, WiNightAltSleet),
  67: new WeatherInfo("Heavy freezing rain", WiRain),
  71: new WeatherInfo("Snow fall slight", WiDaySnow, WiNightAltSnow),
  73: new WeatherInfo("Snow fall moderate", WiDaySnow, WiNightAltSnow),
  75: new WeatherInfo("Snow fall heavy", WiSnow),
  77: new WeatherInfo("Snow grain", WiSnowWind),
  80: new WeatherInfo("Showers slight", WiDaySleet, WiNightAltSleet),
  81: new WeatherInfo("Showers moderate", WiDayShowers, WiNightAltShowers),
  82: new WeatherInfo("Showers heavy", WiShowers),
  85: new WeatherInfo("Snow showers slight", WiDayRainMix, WiNightAltRainMix),
  86: new WeatherInfo("Snow showers heavy", WiRainMix),
  95: new WeatherInfo(
    "Thunderstorm slight or moderate",
    WiDayThunderstorm,
    WiNightAltThunderstorm
  ),
  96: new WeatherInfo("Thunderstorm with slight hail", WiThunderstorm),
  97: new WeatherInfo("Thunderstorm with heavy hail", WiThunderstorm),
};

/**
 * Returs object with:
 * - description : string
 * - icon : IconType
 * - icon_night : IconType
 * @param {Number} code - code provided by API
 */
export function getWeatherStatus(code) {
  if (WeatherStatus[code] == undefined) return new WeatherInfo("Unknown", "?");

  return WeatherStatus[code];
}

/**
 * Returns WeatherStatus' icon of provided code that need to be executed
 * @param {Number} code - code provided by API
 */
export function getWeatherIcon(code) {
  const weatherStatus = getWeatherStatus(code);

  return weatherStatus.icon;
}

/**
 * Returns WeatherStatus' description of provided code
 * @param {Number} code - code provided by API
 */
export function getWeatherDescription(code) {
  const weatherStatus = getWeatherStatus(code);

  return weatherStatus.description;
}
