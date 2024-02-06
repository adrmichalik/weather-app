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
