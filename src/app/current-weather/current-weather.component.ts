import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather;
  @Input() currentDay;

  constructor() { }

  ngOnInit() {
  }

}
