import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

import {WeatherComponent} from './weather.component';
import {OpenWeatherMapService} from '../open-weather-map.service';
import {RouterTestingModule} from '@angular/router/testing';
import {CurrentWeatherComponent} from '../current-weather/current-weather.component';
import {WeatherDetailsComponent} from '../weather-details/weather-details.component';
import {WeatherTileComponent} from '../weather-tile/weather-tile.component';
import {of} from 'rxjs';
import {appRoutes} from '../app.module';
import {ErrorComponent} from '../error/error.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let location: Location;
  let router: Router;
  let openWeatherMapService: OpenWeatherMapService;
  const route = ({data: of({city: 'warsaw'})} as any) as ActivatedRoute;
  const data: any = require('../../testing/mock-data.json');
  const dataPerDay: any = require('../../testing/mock-data-per-day.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes(appRoutes)],
      declarations: [WeatherComponent, CurrentWeatherComponent, WeatherDetailsComponent, WeatherTileComponent, ErrorComponent],
      providers: [
        OpenWeatherMapService,
        {provide: ActivatedRoute, useValue: route}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    router.initialNavigation();
    openWeatherMapService = TestBed.get(OpenWeatherMapService);

    component.currentWeather = dataPerDay.data[0][0];
    component.hourlyWeatherPerDay = dataPerDay.data;
    component.weatherDataFromServer = data;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Weather Router', () => {
    it('should set city to "warsaw"', () => {
      expect(component.city).toBe('warsaw');
    });

    it('navigate to "" redirects you to /warsaw', () => {
      router.navigate(['']).then(() => {
        expect(location.path()).toBe('/warsaw');
      });
    });

    it('should navigate to error page if catch error', () => {
      component.catchError('error').then(() => {
        expect(location.path()).toBe('/error');
      });
    });
  });

  describe('Weather Controller', () => {
    it('should chunked weather data into 5 pieces', () => {
      component.chunkWeatherData(8);
      expect(component.hourlyWeatherPerDay.length).toBe(5);
    });

    it('should set current day to passed value', () => {
      component.setCurrentDay(1);
      expect(component.currentDay).toBe(1);
    });
  });


});
