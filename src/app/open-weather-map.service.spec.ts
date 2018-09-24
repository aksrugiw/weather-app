import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import {OpenWeatherMapService} from './open-weather-map.service';

describe('OpenWeatherMapService', () => {
  let service: OpenWeatherMapService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [OpenWeatherMapService]
    });

    service = TestBed.get(OpenWeatherMapService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch the data succesful', () => {
    service.fetchWeatherForecast('Warsaw').subscribe((data: any) => {
      expect(data.city.name).toBe('Warsaw');
    });
  });

  it('should return icon url', () => {
    expect(service.getWeatherIconUrl('10d')).toBe('https://openweathermap.org/img/w/10d.png');
  });

  it('should return empty string for iconId = null', () => {
    expect(service.getWeatherIconUrl(null)).toEqual('');
  });
});
