export interface WeatherInfo {
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  city: {
    name: string
  };
  main: {
    humidity: number;
    pressure: number;
  };
  weather: Array<WeatherInfo>;
}
