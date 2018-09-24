import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTileComponent } from './weather-tile.component';

describe('WeatherTileComponent', () => {
  let component: WeatherTileComponent;
  let fixture: ComponentFixture<WeatherTileComponent>;
  const data: any = require('../../testing/mock-data-per-day.json');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTileComponent);
    component = fixture.componentInstance;
    component.singleWeatherDay = data.data[0][0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Render properly', () => {
    it('should render proper name of week', () => {
      const el = fixture.nativeElement.querySelector('h3');
      expect(el.innerText).toContain('Monday');
    });
    it('should render formatted date', () => {
      const el = fixture.nativeElement.querySelector('h4');
      expect(el.innerText).toContain('24/09');
    });
    it('should render weather icon', () => {
      const el = fixture.nativeElement.querySelector('p>img');
      expect(el.src).toContain('https://openweathermap.org/img/w/10n.png');
    });
  });
});
