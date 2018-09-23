import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.scss']
})
export class WeatherTileComponent implements OnInit {
  @Input() singleWeatherDay;

  constructor() { }

  ngOnInit() {
  }

}
