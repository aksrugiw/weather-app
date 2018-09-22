import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '26ed0f55a7aa9d8f8812479cf50eb221';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {

  constructor(private http: HttpClient) { }

  fetchWeatherForecast() {
    const url = `${BASE_URL}?q=Warsaw&appid=${API_KEY}&units=metric`;
    return this.http.get(url);
  }
}
