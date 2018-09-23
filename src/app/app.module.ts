import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {OpenweathermapService} from './openweathermap.service';
import {HttpClientModule} from '@angular/common/http';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherComponent } from './weather/weather.component';

const appRoutes: Routes = [
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
  { path: '',   redirectTo: '/warsaw', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherTileComponent,
    WeatherDetailsComponent,
    CurrentWeatherComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OpenweathermapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
