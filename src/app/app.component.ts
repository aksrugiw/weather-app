import {Component, OnInit} from '@angular/core';
import {OpenweathermapService} from './openweathermap.service';

const DAY_NUMBER_FORECAST = 5;
const AVERAGE_DAY_INDEX = 3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherDataFromServer;

  currentDay = 0;
  averageDayIndex = 0;
  hourlyWeatherPerDay: any[];
  currentWeather;

  constructor(private weatherService: OpenweathermapService) {
  }

  ngOnInit() {
    this.weatherService.fakeFetchWeatherForecast().subscribe((res) => {
      this.weatherDataFromServer = res;
      this.hourlyWeatherPerDay = this.chunkWeatherData(this.weatherDataFromServer.cnt / DAY_NUMBER_FORECAST);
      this.setCurrentWeather();
      this.setAverageDayIndex();
    });
  }

  chunkWeatherData(chunkSize) {
    return this.weatherDataFromServer.list.map((item, index) => {
      if (index % chunkSize === 0) {
        return this.weatherDataFromServer.list.slice(index, index + chunkSize);
      } else {
        return null;
      }
    }).filter((item) => {
      return item !== null;
    });
  }

  setCurrentDay(index) {
    this.currentDay = index;
    this.setCurrentWeather();
  }

  setCurrentWeather() {
    this.currentWeather = this.hourlyWeatherPerDay[this.currentDay][AVERAGE_DAY_INDEX];
  }

  setAverageDayIndex() {
    this.averageDayIndex = AVERAGE_DAY_INDEX;
  }
}
