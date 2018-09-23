import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OpenweathermapService} from './openweathermap.service';
import {HttpClientModule} from '@angular/common/http';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTileComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OpenweathermapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
