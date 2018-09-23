import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.scss']
})
export class WeatherTileComponent {
  @Input() singleWeatherDay;
  @Input() isActive = false;

}
