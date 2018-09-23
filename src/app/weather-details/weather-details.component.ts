import {Component, Input} from '@angular/core';
import {OpenWeatherMapService} from '../open-weather-map.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html'
})
export class WeatherDetailsComponent {
  @Input() weatherDetails;

  constructor(private weatherService: OpenWeatherMapService) {
  }

  getIconUrl(iconId) {
    return this.weatherService.getWeatherIconUrl(iconId);
  }
}
