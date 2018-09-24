import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {CurrentWeatherComponent} from './current-weather.component';
import {OpenWeatherMapService} from '../open-weather-map.service';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let openWeatherMapService;
  const data: any = require('../../testing/mock-data-per-day.json');


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CurrentWeatherComponent],
      providers: [OpenWeatherMapService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    openWeatherMapService = TestBed.get(OpenWeatherMapService);
    component.currentWeather = data.data[0][0];
    component.currentDay = 0;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getIconUrl function', () => {
    it('should return icon url for iconId = 10d', () => {
      expect(component.getIconUrl('10d')).toEqual('https://openweathermap.org/img/w/10d.png');
    });

    it('should return empty string for iconId = null', () => {
      expect(component.getIconUrl(null)).toEqual('');
    });
  });

  describe('Render properly', () => {
    it('should display \'Today\' if currentDay is 0', () => {
      const el = fixture.nativeElement.querySelector('p');
      expect(el.innerText).toContain('Today');
    });
    it('should display main temperature', () => {
      const el = fixture.nativeElement.querySelector('h2');
      expect(el.innerText).toContain('7.87');
    });
    it('should render weather icon', () => {
      const el = fixture.nativeElement.querySelector('img');
      expect(el.src).toContain('https://openweathermap.org/img/w/10n.png');
    });
    it('should display weather description', () => {
      const el = fixture.nativeElement.querySelector('h4');
      expect(el.innerText).toContain('light rain');
    });
  });
});
