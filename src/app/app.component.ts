import {Component, OnInit} from '@angular/core';
import {OpenweathermapService} from './openweathermap.service';

const DAY_NUMBER_FORECAST = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // weatherData;

  weatherData = {
    'cod': '200',
    'message': 0.0032,
    'cnt': 40,
    'list': [{
      'dt': 1537660800,
      'main': {
        'temp': 8.57,
        'temp_min': 8.57,
        'temp_max': 10.81,
        'pressure': 1017.99,
        'sea_level': 1030.26,
        'grnd_level': 1017.99,
        'humidity': 64,
        'temp_kf': -2.24
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n'}],
      'clouds': {'all': 12},
      'wind': {'speed': 4.66, 'deg': 240.506},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-23 00:00:00'
    }, {
      'dt': 1537671600,
      'main': {
        'temp': 8.28,
        'temp_min': 8.28,
        'temp_max': 9.97,
        'pressure': 1017.31,
        'sea_level': 1029.6,
        'grnd_level': 1017.31,
        'humidity': 66,
        'temp_kf': -1.68
      },
      'weather': [{'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n'}],
      'clouds': {'all': 32},
      'wind': {'speed': 5.02, 'deg': 234.506},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-23 03:00:00'
    }, {
      'dt': 1537682400,
      'main': {
        'temp': 10.4,
        'temp_min': 10.4,
        'temp_max': 11.52,
        'pressure': 1016.52,
        'sea_level': 1028.83,
        'grnd_level': 1016.52,
        'humidity': 61,
        'temp_kf': -1.12
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 4.81, 'deg': 247.5},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 06:00:00'
    }, {
      'dt': 1537693200,
      'main': {
        'temp': 13.95,
        'temp_min': 13.95,
        'temp_max': 14.51,
        'pressure': 1016.55,
        'sea_level': 1028.56,
        'grnd_level': 1016.55,
        'humidity': 61,
        'temp_kf': -0.56
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 64},
      'wind': {'speed': 5.61, 'deg': 259.001},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 09:00:00'
    }, {
      'dt': 1537704000,
      'main': {
        'temp': 15.67,
        'temp_min': 15.67,
        'temp_max': 15.67,
        'pressure': 1014.81,
        'sea_level': 1026.86,
        'grnd_level': 1014.81,
        'humidity': 60,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 80},
      'wind': {'speed': 5.97, 'deg': 246.001},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 12:00:00'
    }, {
      'dt': 1537714800,
      'main': {
        'temp': 14.31,
        'temp_min': 14.31,
        'temp_max': 14.31,
        'pressure': 1012.37,
        'sea_level': 1024.39,
        'grnd_level': 1012.37,
        'humidity': 62,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 100},
      'wind': {'speed': 4.4, 'deg': 225.005},
      'rain': {'3h': 0.09},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 15:00:00'
    }, {
      'dt': 1537725600,
      'main': {
        'temp': 10.92,
        'temp_min': 10.92,
        'temp_max': 10.92,
        'pressure': 1008.54,
        'sea_level': 1020.63,
        'grnd_level': 1008.54,
        'humidity': 96,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 3.21, 'deg': 166.501},
      'rain': {'3h': 2.09},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-23 18:00:00'
    }, {
      'dt': 1537736400,
      'main': {
        'temp': 10.1,
        'temp_min': 10.1,
        'temp_max': 10.1,
        'pressure': 1002.97,
        'sea_level': 1014.9,
        'grnd_level': 1002.97,
        'humidity': 99,
        'temp_kf': 0
      },
      'weather': [{'id': 502, 'main': 'Rain', 'description': 'heavy intensity rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 5.68, 'deg': 88.0038},
      'rain': {'3h': 18.44},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-23 21:00:00'
    }, {
      'dt': 1537747200,
      'main': {
        'temp': 10.09,
        'temp_min': 10.09,
        'temp_max': 10.09,
        'pressure': 998.45,
        'sea_level': 1010.48,
        'grnd_level': 998.45,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10n'}],
      'clouds': {'all': 100},
      'wind': {'speed': 5.86, 'deg': 34.0001},
      'rain': {'3h': 10.8},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 00:00:00'
    }, {
      'dt': 1537758000,
      'main': {
        'temp': 9.73,
        'temp_min': 9.73,
        'temp_max': 9.73,
        'pressure': 1004.03,
        'sea_level': 1016.15,
        'grnd_level': 1004.03,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 88},
      'wind': {'speed': 7.66, 'deg': 317.501},
      'rain': {'3h': 2.52},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 03:00:00'
    }, {
      'dt': 1537768800,
      'main': {
        'temp': 9.47,
        'temp_min': 9.47,
        'temp_max': 9.47,
        'pressure': 1008.12,
        'sea_level': 1020.26,
        'grnd_level': 1008.12,
        'humidity': 96,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 9.52, 'deg': 299},
      'rain': {'3h': 0.45},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 06:00:00'
    }, {
      'dt': 1537779600,
      'main': {
        'temp': 10.54,
        'temp_min': 10.54,
        'temp_max': 10.54,
        'pressure': 1012.07,
        'sea_level': 1024.23,
        'grnd_level': 1012.07,
        'humidity': 92,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 9.76, 'deg': 291.501},
      'rain': {'3h': 0.13},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 09:00:00'
    }, {
      'dt': 1537790400,
      'main': {
        'temp': 9.75,
        'temp_min': 9.75,
        'temp_max': 9.75,
        'pressure': 1014.02,
        'sea_level': 1026.13,
        'grnd_level': 1014.02,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 10.01, 'deg': 284.002},
      'rain': {'3h': 1.6},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 12:00:00'
    }, {
      'dt': 1537801200,
      'main': {
        'temp': 9.28,
        'temp_min': 9.28,
        'temp_max': 9.28,
        'pressure': 1015.09,
        'sea_level': 1027.3,
        'grnd_level': 1015.09,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 9.82, 'deg': 281.501},
      'rain': {'3h': 1.66},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 15:00:00'
    }, {
      'dt': 1537812000,
      'main': {
        'temp': 9.09,
        'temp_min': 9.09,
        'temp_max': 9.09,
        'pressure': 1017.37,
        'sea_level': 1029.76,
        'grnd_level': 1017.37,
        'humidity': 95,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 7.91, 'deg': 310.015},
      'rain': {'3h': 1.36},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 18:00:00'
    }, {
      'dt': 1537822800,
      'main': {
        'temp': 8.42,
        'temp_min': 8.42,
        'temp_max': 8.42,
        'pressure': 1021.09,
        'sea_level': 1033.42,
        'grnd_level': 1021.09,
        'humidity': 88,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 76},
      'wind': {'speed': 8.31, 'deg': 305.005},
      'rain': {'3h': 0.2},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 21:00:00'
    }, {
      'dt': 1537833600,
      'main': {
        'temp': 7.05,
        'temp_min': 7.05,
        'temp_max': 7.05,
        'pressure': 1023.14,
        'sea_level': 1035.67,
        'grnd_level': 1023.14,
        'humidity': 88,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 7.16, 'deg': 295.004},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 00:00:00'
    }, {
      'dt': 1537844400,
      'main': {
        'temp': 6.05,
        'temp_min': 6.05,
        'temp_max': 6.05,
        'pressure': 1024.91,
        'sea_level': 1037.47,
        'grnd_level': 1024.91,
        'humidity': 89,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 6.61, 'deg': 295.501},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 03:00:00'
    }, {
      'dt': 1537855200,
      'main': {
        'temp': 6.92,
        'temp_min': 6.92,
        'temp_max': 6.92,
        'pressure': 1027.07,
        'sea_level': 1039.51,
        'grnd_level': 1027.07,
        'humidity': 89,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 6.26, 'deg': 299.006},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 06:00:00'
    }, {
      'dt': 1537866000,
      'main': {
        'temp': 11.69,
        'temp_min': 11.69,
        'temp_max': 11.69,
        'pressure': 1028.92,
        'sea_level': 1041.4,
        'grnd_level': 1028.92,
        'humidity': 79,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 7.02, 'deg': 305.505},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 09:00:00'
    }, {
      'dt': 1537876800,
      'main': {
        'temp': 13.31,
        'temp_min': 13.31,
        'temp_max': 13.31,
        'pressure': 1030.22,
        'sea_level': 1042.59,
        'grnd_level': 1030.22,
        'humidity': 67,
        'temp_kf': 0
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02d'}],
      'clouds': {'all': 24},
      'wind': {'speed': 8.06, 'deg': 315.501},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 12:00:00'
    }, {
      'dt': 1537887600,
      'main': {
        'temp': 12.24,
        'temp_min': 12.24,
        'temp_max': 12.24,
        'pressure': 1030.94,
        'sea_level': 1043.27,
        'grnd_level': 1030.94,
        'humidity': 62,
        'temp_kf': 0
      },
      'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 6.73, 'deg': 306},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 15:00:00'
    }, {
      'dt': 1537898400,
      'main': {
        'temp': 9.9,
        'temp_min': 9.9,
        'temp_max': 9.9,
        'pressure': 1031.41,
        'sea_level': 1043.85,
        'grnd_level': 1031.41,
        'humidity': 65,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 56},
      'wind': {'speed': 5.82, 'deg': 291.018},
      'rain': {'3h': 0.009999999999998},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 18:00:00'
    }, {
      'dt': 1537909200,
      'main': {
        'temp': 8.19,
        'temp_min': 8.19,
        'temp_max': 8.19,
        'pressure': 1031.26,
        'sea_level': 1043.71,
        'grnd_level': 1031.26,
        'humidity': 76,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02n'}],
      'clouds': {'all': 8},
      'wind': {'speed': 6.18, 'deg': 272.019},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 21:00:00'
    }, {
      'dt': 1537920000,
      'main': {
        'temp': 7.71,
        'temp_min': 7.71,
        'temp_max': 7.71,
        'pressure': 1029.94,
        'sea_level': 1042.47,
        'grnd_level': 1029.94,
        'humidity': 72,
        'temp_kf': 0
      },
      'weather': [{'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n'}],
      'clouds': {'all': 32},
      'wind': {'speed': 7.45, 'deg': 269.5},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 00:00:00'
    }, {
      'dt': 1537930800,
      'main': {
        'temp': 8.22,
        'temp_min': 8.22,
        'temp_max': 8.22,
        'pressure': 1029.46,
        'sea_level': 1042,
        'grnd_level': 1029.46,
        'humidity': 78,
        'temp_kf': 0
      },
      'weather': [{'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n'}],
      'clouds': {'all': 36},
      'wind': {'speed': 9.06, 'deg': 279.502},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 03:00:00'
    }, {
      'dt': 1537941600,
      'main': {
        'temp': 9.69,
        'temp_min': 9.69,
        'temp_max': 9.69,
        'pressure': 1029.58,
        'sea_level': 1042.11,
        'grnd_level': 1029.58,
        'humidity': 82,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 68},
      'wind': {'speed': 8.71, 'deg': 282.5},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 06:00:00'
    }, {
      'dt': 1537952400,
      'main': {
        'temp': 12.52,
        'temp_min': 12.52,
        'temp_max': 12.52,
        'pressure': 1030.12,
        'sea_level': 1042.45,
        'grnd_level': 1030.12,
        'humidity': 76,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 80},
      'wind': {'speed': 8.31, 'deg': 287},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 09:00:00'
    }, {
      'dt': 1537963200,
      'main': {
        'temp': 13.34,
        'temp_min': 13.34,
        'temp_max': 13.34,
        'pressure': 1029.64,
        'sea_level': 1041.91,
        'grnd_level': 1029.64,
        'humidity': 70,
        'temp_kf': 0
      },
      'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 7.87, 'deg': 284.002},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 12:00:00'
    }, {
      'dt': 1537974000,
      'main': {
        'temp': 12.41,
        'temp_min': 12.41,
        'temp_max': 12.41,
        'pressure': 1029.11,
        'sea_level': 1041.38,
        'grnd_level': 1029.11,
        'humidity': 69,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 7.76, 'deg': 281.501},
      'rain': {'3h': 0.049999999999997},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 15:00:00'
    }, {
      'dt': 1537984800,
      'main': {
        'temp': 10.7,
        'temp_min': 10.7,
        'temp_max': 10.7,
        'pressure': 1028.64,
        'sea_level': 1041.02,
        'grnd_level': 1028.64,
        'humidity': 73,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 6.56, 'deg': 272.003},
      'rain': {'3h': 0.050000000000004},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 18:00:00'
    }, {
      'dt': 1537995600,
      'main': {
        'temp': 10.78,
        'temp_min': 10.78,
        'temp_max': 10.78,
        'pressure': 1027.17,
        'sea_level': 1039.51,
        'grnd_level': 1027.17,
        'humidity': 72,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 88},
      'wind': {'speed': 6.56, 'deg': 260.004},
      'rain': {'3h': 0.039999999999999},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 21:00:00'
    }, {
      'dt': 1538006400,
      'main': {
        'temp': 10.95,
        'temp_min': 10.95,
        'temp_max': 10.95,
        'pressure': 1024.36,
        'sea_level': 1036.73,
        'grnd_level': 1024.36,
        'humidity': 71,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 100},
      'wind': {'speed': 7.81, 'deg': 255.001},
      'rain': {'3h': 0.089999999999996},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 00:00:00'
    }, {
      'dt': 1538017200,
      'main': {
        'temp': 11.59,
        'temp_min': 11.59,
        'temp_max': 11.59,
        'pressure': 1021.98,
        'sea_level': 1034.29,
        'grnd_level': 1021.98,
        'humidity': 68,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 76},
      'wind': {'speed': 8.4, 'deg': 262.004},
      'rain': {'3h': 0.11000000000001},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 03:00:00'
    }, {
      'dt': 1538028000,
      'main': {
        'temp': 12.14,
        'temp_min': 12.14,
        'temp_max': 12.14,
        'pressure': 1020.69,
        'sea_level': 1032.9,
        'grnd_level': 1020.69,
        'humidity': 65,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 56},
      'wind': {'speed': 9.16, 'deg': 265.5},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 06:00:00'
    }, {
      'dt': 1538038800,
      'main': {
        'temp': 14.72,
        'temp_min': 14.72,
        'temp_max': 14.72,
        'pressure': 1020.01,
        'sea_level': 1032.12,
        'grnd_level': 1020.01,
        'humidity': 66,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 80},
      'wind': {'speed': 9.72, 'deg': 269.002},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 09:00:00'
    }, {
      'dt': 1538049600,
      'main': {
        'temp': 16.29,
        'temp_min': 16.29,
        'temp_max': 16.29,
        'pressure': 1018.64,
        'sea_level': 1030.73,
        'grnd_level': 1018.64,
        'humidity': 65,
        'temp_kf': 0
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02d'}],
      'clouds': {'all': 24},
      'wind': {'speed': 9.61, 'deg': 269.003},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 12:00:00'
    }, {
      'dt': 1538060400,
      'main': {
        'temp': 17.46,
        'temp_min': 17.46,
        'temp_max': 17.46,
        'pressure': 1017.23,
        'sea_level': 1029.28,
        'grnd_level': 1017.23,
        'humidity': 64,
        'temp_kf': 0
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02d'}],
      'clouds': {'all': 20},
      'wind': {'speed': 8.81, 'deg': 267.508},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 15:00:00'
    }, {
      'dt': 1538071200,
      'main': {
        'temp': 15.91,
        'temp_min': 15.91,
        'temp_max': 15.91,
        'pressure': 1016.3,
        'sea_level': 1028.38,
        'grnd_level': 1016.3,
        'humidity': 65,
        'temp_kf': 0
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n'}],
      'clouds': {'all': 24},
      'wind': {'speed': 7.06, 'deg': 257},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 18:00:00'
    }, {
      'dt': 1538082000,
      'main': {
        'temp': 14.34,
        'temp_min': 14.34,
        'temp_max': 14.34,
        'pressure': 1013.86,
        'sea_level': 1025.93,
        'grnd_level': 1013.86,
        'humidity': 59,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02n'}],
      'clouds': {'all': 8},
      'wind': {'speed': 7.36, 'deg': 246.501},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 21:00:00'
    }],
    'city': {'id': 756135, 'name': 'Warsaw', 'coord': {'lat': 52.2319, 'lon': 21.0067}, 'country': 'PL', 'population': 1000000}
  };

  parsedWeatherData: any[][];
  currentWeather;

  constructor(private weatherService: OpenweathermapService) {
  }

  ngOnInit() {
    // this.weatherService.fetchWeatherForecast().subscribe((res) => {
    //   console.log(res);
    //   this.weatherData = res;
    // });
    if (this.weatherData.list) {
      this.currentWeather = this.weatherData.list[4];
      this.parsedWeatherData = this.chunkWeatherData();
    }
    console.log(this.parsedWeatherData);
  }

  chunkWeatherData() {
    const chunkSize = this.weatherData.cnt / DAY_NUMBER_FORECAST;
    return this.weatherData.list.map((item, index) => {
      return index % chunkSize === 0 ? this.weatherData.list.slice(index, index + chunkSize) : null;
    }).filter(e => e);
  }

  getAverageData(data: any[], dataKey: string) {
    // data.forEach()
  }
}
