import {Component, Input} from '@angular/core';
import {OpenWeatherMapService} from '../open-weather-map.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html'
})
export class CurrentWeatherComponent {
  @Input() currentWeather;
  @Input() currentDay;

  constructor(private weatherService: OpenWeatherMapService) {
  }

  getIconUrl(iconId) {
    return this.weatherService.getWeatherIconUrl(iconId);
  }

}
