import {Component, OnInit} from '@angular/core';
import {OpenweathermapService} from './openweathermap.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData = {
    'cod': '200',
    'message': 0.0042,
    'cnt': 40,
    'list': [
      {
        'dt': 1537315200,
        'main': {
          'temp': 14.13,
          'temp_min': 14.13,
          'temp_max': 16.64,
          'pressure': 1020.23,
          'sea_level': 1032.33,
          'grnd_level': 1020.23,
          'humidity': 67,
          'temp_kf': -2.51
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 4.38,
          'deg': 206.004
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-19 00:00:00'
      },
      {
        'dt': 1537326000,
        'main': {
          'temp': 13.37,
          'temp_min': 13.37,
          'temp_max': 15.25,
          'pressure': 1020.12,
          'sea_level': 1032.28,
          'grnd_level': 1020.12,
          'humidity': 74,
          'temp_kf': -1.88
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 4.32,
          'deg': 210.001
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-19 03:00:00'
      },
      {
        'dt': 1537336800,
        'main': {
          'temp': 16.04,
          'temp_min': 16.04,
          'temp_max': 17.3,
          'pressure': 1020.36,
          'sea_level': 1032.43,
          'grnd_level': 1020.36,
          'humidity': 59,
          'temp_kf': -1.25
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '02d'
          }
        ],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 5.11,
          'deg': 217.002
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-19 06:00:00'
      },
      {
        'dt': 1537347600,
        'main': {
          'temp': 24.15,
          'temp_min': 24.15,
          'temp_max': 24.78,
          'pressure': 1020.36,
          'sea_level': 1032.34,
          'grnd_level': 1020.36,
          'humidity': 46,
          'temp_kf': -0.63
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 4.91,
          'deg': 221.5
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-19 09:00:00'
      },
      {
        'dt': 1537358400,
        'main': {
          'temp': 27.59,
          'temp_min': 27.59,
          'temp_max': 27.59,
          'pressure': 1019.6,
          'sea_level': 1031.53,
          'grnd_level': 1019.6,
          'humidity': 39,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 5.7,
          'deg': 224.503
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-19 12:00:00'
      },
      {
        'dt': 1537369200,
        'main': {
          'temp': 27.8,
          'temp_min': 27.8,
          'temp_max': 27.8,
          'pressure': 1018.98,
          'sea_level': 1030.99,
          'grnd_level': 1018.98,
          'humidity': 38,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 3.63,
          'deg': 234.004
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-19 15:00:00'
      },
      {
        'dt': 1537380000,
        'main': {
          'temp': 21.24,
          'temp_min': 21.24,
          'temp_max': 21.24,
          'pressure': 1019.26,
          'sea_level': 1031.24,
          'grnd_level': 1019.26,
          'humidity': 54,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '02n'
          }
        ],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 2.56,
          'deg': 187.502
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-19 18:00:00'
      },
      {
        'dt': 1537390800,
        'main': {
          'temp': 19.14,
          'temp_min': 19.14,
          'temp_max': 19.14,
          'pressure': 1019.71,
          'sea_level': 1031.71,
          'grnd_level': 1019.71,
          'humidity': 63,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02n'
          }
        ],
        'clouds': {
          'all': 24
        },
        'wind': {
          'speed': 2.37,
          'deg': 205.503
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-19 21:00:00'
      },
      {
        'dt': 1537401600,
        'main': {
          'temp': 15.82,
          'temp_min': 15.82,
          'temp_max': 15.82,
          'pressure': 1020.01,
          'sea_level': 1032.22,
          'grnd_level': 1020.01,
          'humidity': 81,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.18,
          'deg': 221.504
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-20 00:00:00'
      },
      {
        'dt': 1537412400,
        'main': {
          'temp': 14.71,
          'temp_min': 14.71,
          'temp_max': 14.71,
          'pressure': 1020.57,
          'sea_level': 1032.64,
          'grnd_level': 1020.57,
          'humidity': 81,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02n'
          }
        ],
        'clouds': {
          'all': 12
        },
        'wind': {
          'speed': 1.16,
          'deg': 230.504
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-20 03:00:00'
      },
      {
        'dt': 1537423200,
        'main': {
          'temp': 18.49,
          'temp_min': 18.49,
          'temp_max': 18.49,
          'pressure': 1020.84,
          'sea_level': 1032.95,
          'grnd_level': 1020.84,
          'humidity': 74,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 1.42,
          'deg': 181.01
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-20 06:00:00'
      },
      {
        'dt': 1537434000,
        'main': {
          'temp': 27.5,
          'temp_min': 27.5,
          'temp_max': 27.5,
          'pressure': 1020.89,
          'sea_level': 1032.87,
          'grnd_level': 1020.89,
          'humidity': 48,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 2.07,
          'deg': 198.001
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-20 09:00:00'
      },
      {
        'dt': 1537444800,
        'main': {
          'temp': 29.33,
          'temp_min': 29.33,
          'temp_max': 29.33,
          'pressure': 1019.89,
          'sea_level': 1031.8,
          'grnd_level': 1019.89,
          'humidity': 42,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 3.11,
          'deg': 215.501
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-20 12:00:00'
      },
      {
        'dt': 1537455600,
        'main': {
          'temp': 28.7,
          'temp_min': 28.7,
          'temp_max': 28.7,
          'pressure': 1018.82,
          'sea_level': 1030.73,
          'grnd_level': 1018.82,
          'humidity': 38,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 3.66,
          'deg': 218
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-20 15:00:00'
      },
      {
        'dt': 1537466400,
        'main': {
          'temp': 22.36,
          'temp_min': 22.36,
          'temp_max': 22.36,
          'pressure': 1018.53,
          'sea_level': 1030.43,
          'grnd_level': 1018.53,
          'humidity': 52,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 3.02,
          'deg': 191.5
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-20 18:00:00'
      },
      {
        'dt': 1537477200,
        'main': {
          'temp': 19.06,
          'temp_min': 19.06,
          'temp_max': 19.06,
          'pressure': 1017.74,
          'sea_level': 1029.75,
          'grnd_level': 1017.74,
          'humidity': 67,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 2.67,
          'deg': 157
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-20 21:00:00'
      },
      {
        'dt': 1537488000,
        'main': {
          'temp': 17.35,
          'temp_min': 17.35,
          'temp_max': 17.35,
          'pressure': 1016.97,
          'sea_level': 1028.97,
          'grnd_level': 1016.97,
          'humidity': 69,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '02n'
          }
        ],
        'clouds': {
          'all': 8
        },
        'wind': {
          'speed': 2.21,
          'deg': 169.5
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-21 00:00:00'
      },
      {
        'dt': 1537498800,
        'main': {
          'temp': 17.66,
          'temp_min': 17.66,
          'temp_max': 17.66,
          'pressure': 1016.36,
          'sea_level': 1028.42,
          'grnd_level': 1016.36,
          'humidity': 68,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'clouds': {
          'all': 44
        },
        'wind': {
          'speed': 3.87,
          'deg': 188.001
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-21 03:00:00'
      },
      {
        'dt': 1537509600,
        'main': {
          'temp': 20.64,
          'temp_min': 20.64,
          'temp_max': 20.64,
          'pressure': 1015.5,
          'sea_level': 1027.61,
          'grnd_level': 1015.5,
          'humidity': 56,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 4.91,
          'deg': 182.005
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-21 06:00:00'
      },
      {
        'dt': 1537520400,
        'main': {
          'temp': 26.85,
          'temp_min': 26.85,
          'temp_max': 26.85,
          'pressure': 1014.81,
          'sea_level': 1026.65,
          'grnd_level': 1014.81,
          'humidity': 45,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 5.47,
          'deg': 196.502
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-21 09:00:00'
      },
      {
        'dt': 1537531200,
        'main': {
          'temp': 28.41,
          'temp_min': 28.41,
          'temp_max': 28.41,
          'pressure': 1012.73,
          'sea_level': 1024.48,
          'grnd_level': 1012.73,
          'humidity': 41,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 6.25,
          'deg': 206
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-21 12:00:00'
      },
      {
        'dt': 1537542000,
        'main': {
          'temp': 27.64,
          'temp_min': 27.64,
          'temp_max': 27.64,
          'pressure': 1010.48,
          'sea_level': 1022.26,
          'grnd_level': 1010.48,
          'humidity': 34,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'clouds': {
          'all': 0
        },
        'wind': {
          'speed': 7.22,
          'deg': 204.008
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-21 15:00:00'
      },
      {
        'dt': 1537552800,
        'main': {
          'temp': 23.74,
          'temp_min': 23.74,
          'temp_max': 23.74,
          'pressure': 1009.8,
          'sea_level': 1021.63,
          'grnd_level': 1009.8,
          'humidity': 37,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02n'
          }
        ],
        'clouds': {
          'all': 12
        },
        'wind': {
          'speed': 5.81,
          'deg': 199.001
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-21 18:00:00'
      },
      {
        'dt': 1537563600,
        'main': {
          'temp': 22,
          'temp_min': 22,
          'temp_max': 22,
          'pressure': 1009.75,
          'sea_level': 1021.74,
          'grnd_level': 1009.75,
          'humidity': 43,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ],
        'clouds': {
          'all': 80
        },
        'wind': {
          'speed': 5.26,
          'deg': 217.5
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-21 21:00:00'
      },
      {
        'dt': 1537574400,
        'main': {
          'temp': 19.1,
          'temp_min': 19.1,
          'temp_max': 19.1,
          'pressure': 1009.38,
          'sea_level': 1021.42,
          'grnd_level': 1009.38,
          'humidity': 63,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ],
        'clouds': {
          'all': 68
        },
        'wind': {
          'speed': 2.77,
          'deg': 252.504
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-22 00:00:00'
      },
      {
        'dt': 1537585200,
        'main': {
          'temp': 16.82,
          'temp_min': 16.82,
          'temp_max': 16.82,
          'pressure': 1009.71,
          'sea_level': 1021.88,
          'grnd_level': 1009.71,
          'humidity': 88,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 4.51,
          'deg': 341.505
        },
        'rain': {
          '3h': 0.13
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-22 03:00:00'
      },
      {
        'dt': 1537596000,
        'main': {
          'temp': 11.84,
          'temp_min': 11.84,
          'temp_max': 11.84,
          'pressure': 1013.03,
          'sea_level': 1024.92,
          'grnd_level': 1013.03,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 100
        },
        'wind': {
          'speed': 8.06,
          'deg': 318.5
        },
        'rain': {
          '3h': 2.21
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-22 06:00:00'
      },
      {
        'dt': 1537606800,
        'main': {
          'temp': 11.81,
          'temp_min': 11.81,
          'temp_max': 11.81,
          'pressure': 1014.86,
          'sea_level': 1026.92,
          'grnd_level': 1014.86,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 6.26,
          'deg': 304.009
        },
        'rain': {
          '3h': 5.09
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-22 09:00:00'
      },
      {
        'dt': 1537617600,
        'main': {
          'temp': 11.58,
          'temp_min': 11.58,
          'temp_max': 11.58,
          'pressure': 1015.91,
          'sea_level': 1028.04,
          'grnd_level': 1015.91,
          'humidity': 99,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 6.61,
          'deg': 301.005
        },
        'rain': {
          '3h': 4.25
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-22 12:00:00'
      },
      {
        'dt': 1537628400,
        'main': {
          'temp': 12.07,
          'temp_min': 12.07,
          'temp_max': 12.07,
          'pressure': 1016.48,
          'sea_level': 1028.67,
          'grnd_level': 1016.48,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 92
        },
        'wind': {
          'speed': 5.15,
          'deg': 272
        },
        'rain': {
          '3h': 1.985
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-22 15:00:00'
      },
      {
        'dt': 1537639200,
        'main': {
          'temp': 10.67,
          'temp_min': 10.67,
          'temp_max': 10.67,
          'pressure': 1017.36,
          'sea_level': 1029.55,
          'grnd_level': 1017.36,
          'humidity': 100,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 5.47,
          'deg': 291
        },
        'rain': {
          '3h': 0.875
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-22 18:00:00'
      },
      {
        'dt': 1537650000,
        'main': {
          'temp': 9.93,
          'temp_min': 9.93,
          'temp_max': 9.93,
          'pressure': 1017.73,
          'sea_level': 1030.03,
          'grnd_level': 1017.73,
          'humidity': 95,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 24
        },
        'wind': {
          'speed': 4.7,
          'deg': 278.504
        },
        'rain': {
          '3h': 0.285
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-22 21:00:00'
      },
      {
        'dt': 1537660800,
        'main': {
          'temp': 9.49,
          'temp_min': 9.49,
          'temp_max': 9.49,
          'pressure': 1018.36,
          'sea_level': 1030.62,
          'grnd_level': 1018.36,
          'humidity': 95,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 5.21,
          'deg': 272.501
        },
        'rain': {
          '3h': 0.06
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-23 00:00:00'
      },
      {
        'dt': 1537671600,
        'main': {
          'temp': 9.04,
          'temp_min': 9.04,
          'temp_max': 9.04,
          'pressure': 1018.85,
          'sea_level': 1031.26,
          'grnd_level': 1018.85,
          'humidity': 96,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 20
        },
        'wind': {
          'speed': 5.74,
          'deg': 281.5
        },
        'rain': {
          '3h': 0.1
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-23 03:00:00'
      },
      {
        'dt': 1537682400,
        'main': {
          'temp': 8.88,
          'temp_min': 8.88,
          'temp_max': 8.88,
          'pressure': 1019.92,
          'sea_level': 1032.2,
          'grnd_level': 1019.92,
          'humidity': 97,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 88
        },
        'wind': {
          'speed': 6.31,
          'deg': 280.004
        },
        'rain': {
          '3h': 0.075000000000001
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-23 06:00:00'
      },
      {
        'dt': 1537693200,
        'main': {
          'temp': 12.2,
          'temp_min': 12.2,
          'temp_max': 12.2,
          'pressure': 1020.87,
          'sea_level': 1033.13,
          'grnd_level': 1020.87,
          'humidity': 90,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 36
        },
        'wind': {
          'speed': 6.56,
          'deg': 292.503
        },
        'rain': {
          '3h': 0.235
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-23 09:00:00'
      },
      {
        'dt': 1537704000,
        'main': {
          'temp': 14.61,
          'temp_min': 14.61,
          'temp_max': 14.61,
          'pressure': 1021.08,
          'sea_level': 1033.17,
          'grnd_level': 1021.08,
          'humidity': 75,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'clouds': {
          'all': 56
        },
        'wind': {
          'speed': 7.81,
          'deg': 287.505
        },
        'rain': {},
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-23 12:00:00'
      },
      {
        'dt': 1537714800,
        'main': {
          'temp': 13.93,
          'temp_min': 13.93,
          'temp_max': 13.93,
          'pressure': 1021.4,
          'sea_level': 1033.65,
          'grnd_level': 1021.4,
          'humidity': 73,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'clouds': {
          'all': 68
        },
        'wind': {
          'speed': 6.76,
          'deg': 294
        },
        'rain': {
          '3h': 0.245
        },
        'sys': {
          'pod': 'd'
        },
        'dt_txt': '2018-09-23 15:00:00'
      },
      {
        'dt': 1537725600,
        'main': {
          'temp': 11.64,
          'temp_min': 11.64,
          'temp_max': 11.64,
          'pressure': 1021.98,
          'sea_level': 1034.32,
          'grnd_level': 1021.98,
          'humidity': 83,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'clouds': {
          'all': 36
        },
        'wind': {
          'speed': 3.53,
          'deg': 290.501
        },
        'rain': {
          '3h': 0.16
        },
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-23 18:00:00'
      },
      {
        'dt': 1537736400,
        'main': {
          'temp': 8.95,
          'temp_min': 8.95,
          'temp_max': 8.95,
          'pressure': 1021.6,
          'sea_level': 1033.88,
          'grnd_level': 1021.6,
          'humidity': 90,
          'temp_kf': 0
        },
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02n'
          }
        ],
        'clouds': {
          'all': 24
        },
        'wind': {
          'speed': 2.71,
          'deg': 242.001
        },
        'rain': {},
        'sys': {
          'pod': 'n'
        },
        'dt_txt': '2018-09-23 21:00:00'
      }
    ],
    'city': {
      'id': 756135,
      'name': 'Warsaw',
      'coord': {
        'lat': 52.2319,
        'lon': 21.0067
      },
      'country': 'PL',
      'population': 1000000
    }
  };

  constructor(private weatherService: OpenweathermapService) {
  }

  ngOnInit() {
    // this.weatherService.fetchWeatherForecast().subscribe((res) => {
    //   console.log(res);
    // });
  }
}
