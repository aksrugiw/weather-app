import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {OpenWeatherMapService} from './open-weather-map.service';
import {HttpClientModule} from '@angular/common/http';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherComponent } from './weather/weather.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Routes = [
  {
    path: 'warsaw',
    component: WeatherComponent,
    data: { city: 'Warsaw' }
  },
  {
    path: 'london',
    component: WeatherComponent,
    data: { city: 'London' }
  },
  {
    path: 'new-york',
    component: WeatherComponent,
    data: { city: 'New York' }
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '', redirectTo: '/warsaw', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherTileComponent,
    WeatherDetailsComponent,
    CurrentWeatherComponent,
    WeatherComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OpenWeatherMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
