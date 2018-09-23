import { Component, OnInit } from '@angular/core';
import {OpenWeatherMapService} from '../open-weather-map.service';
import {ActivatedRoute, Router} from '@angular/router';

const DAY_NUMBER_FORECAST = 5;
const AVERAGE_DAY_INDEX = 0;

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city = '';
  weatherDataFromServer: any;

  currentDay = 0;
  averageDayIndex = 0;
  hourlyWeatherPerDay = [];
  currentWeather;

  constructor(private weatherService: OpenWeatherMapService, private activatedRoute: ActivatedRoute, private router: Router ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((param) => {
      this.city = param.city;
    });
    this.weatherService.fetchWeatherForecast(this.city).subscribe((res) => {
      this.weatherDataFromServer = res;
      this.hourlyWeatherPerDay = this.chunkWeatherData(this.weatherDataFromServer['cnt'] / DAY_NUMBER_FORECAST);
      this.setCurrentWeather();
      this.setAverageDayIndex();
    },(error) => this.catchError(error));
  }

  chunkWeatherData(chunkSize) {
    return this.weatherDataFromServer['list'].map((item, index) => {
      if (index % chunkSize === 0) {
        return this.weatherDataFromServer['list'].slice(index, index + chunkSize);
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

  catchError(error) {
    this.router.navigate(['/error']);
  }

}
