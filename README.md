# WeatherApp
This app show 5 day forecast weather for three different localization: Warsaw, London and New York. Weather data is provided by OpenWeather API. 


## How to run
You need to have `angular-cli` installed globally to run this project in dev mode.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Details

Used in this project:
 - [Angular CLI](https://github.com/angular/angular-cli) - generate the project
 - [OpenWeather API](https://openweathermap.org/forecast5) - retrieve weather forecast data
 - [Bootstrap](https://getbootstrap.com/) - create responsive grid
 - [Bootswatch theme](https://bootswatch.com/) - customize styles
 
#### Problems/tradeoffs 
5 days weather forecast response includes weather data every 3 hours. In my opinion the best way to show user current weather is to get all information per day and compute average data for all parameters (humidity, temperature etc). Unfortunatelly I don't have time to this, so I simplify this problem and get data for first item.

Error handling - OpenWeather API doesn't have error specification so I have to add general error page and redirect user there when any error occured.

Testing - unfortunatelly I didn't add unit tests for this project, but if I had more time I would have started from that.

#### Future plans
 - add unit tests
 - add search engine - user will be able to see weather from any other city
 - solve problem with current weather - create some logic to compute curernt data or call another endpoint from OpenWeather API
 - use geolocalization to show user weather for his current position
 - error handling - create specific messages for each error which can occure
