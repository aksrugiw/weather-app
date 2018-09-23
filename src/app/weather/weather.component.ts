import { Component, OnInit } from '@angular/core';
import {OpenweathermapService} from '../openweathermap.service';
import {ActivatedRoute} from '@angular/router';

const DAY_NUMBER_FORECAST = 5;
const AVERAGE_DAY_INDEX = 3;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city = 'New York';
  weatherDataFromServer;

  currentDay = 0;
  averageDayIndex = 0;
  hourlyWeatherPerDay: any[];
  currentWeather;

  constructor(private weatherService: OpenweathermapService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((param) => {
      this.city = param.city;
    });
    this.weatherService.fakeFetchWeatherForecast(this.city).subscribe((res) => {
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
