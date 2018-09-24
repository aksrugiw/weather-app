import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { WeatherDetailsComponent } from './weather-details.component';
import {OpenWeatherMapService} from '../open-weather-map.service';

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  const data: any = require('../../testing/mock-data.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ WeatherDetailsComponent ],
      providers: [OpenWeatherMapService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;
    component.weatherDetails = data.list;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render properly', () => {
    it('should render weather icon', () => {
      const el = fixture.nativeElement.querySelector('tr>td>img');
      expect(el.src).toContain('https://openweathermap.org/img/w/10n.png');
    });
  });
});
