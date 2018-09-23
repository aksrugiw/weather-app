import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '26ed0f55a7aa9d8f8812479cf50eb221';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {
  constructor(private http: HttpClient) {
  }

  fetchWeatherForecast(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    return this.http.get(url);
  }

  getWeatherIconUrl(iconId) {
    return iconId ? `http://openweathermap.org/img/w/${iconId}.png` : '';
  }
}
