import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '26ed0f55a7aa9d8f8812479cf50eb221';

@Injectable({
  providedIn: 'root'
})
export class OpenweathermapService {
  weatherData = {
    'Warsaw': {
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
        'dt': 1537866000, 'main': {
          'temp': 11.69, 'temp_min': 11.69, 'temp_max': 11.69, 'pressure': 1028.92,
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
    },
    'London': {
    'cod': '200',
    'message': 0.007,
    'cnt': 40,
    'list': [{
      'dt': 1537693200,
      'main': {
        'temp': 9.5,
        'temp_min': 9.13,
        'temp_max': 9.5,
        'pressure': 1020.3,
        'sea_level': 1028.03,
        'grnd_level': 1020.3,
        'humidity': 100,
        'temp_kf': 0.36
      },
      'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 5.36, 'deg': 4.00159},
      'rain': {'3h': 7.645},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 09:00:00'
    }, {
      'dt': 1537704000,
      'main': {
        'temp': 8.75,
        'temp_min': 8.48,
        'temp_max': 8.75,
        'pressure': 1023.91,
        'sea_level': 1031.59,
        'grnd_level': 1023.91,
        'humidity': 100,
        'temp_kf': 0.27
      },
      'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 5.41, 'deg': 342.5},
      'rain': {'3h': 4.4725},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 12:00:00'
    }, {
      'dt': 1537714800,
      'main': {
        'temp': 10.99,
        'temp_min': 10.81,
        'temp_max': 10.99,
        'pressure': 1027.14,
        'sea_level': 1034.71,
        'grnd_level': 1027.14,
        'humidity': 91,
        'temp_kf': 0.18
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 5.92, 'deg': 323.505},
      'rain': {'3h': 0.0024999999999995},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 15:00:00'
    }, {
      'dt': 1537725600,
      'main': {
        'temp': 9.2,
        'temp_min': 9.11,
        'temp_max': 9.2,
        'pressure': 1031.36,
        'sea_level': 1039.1,
        'grnd_level': 1031.36,
        'humidity': 89,
        'temp_kf': 0.09
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 44},
      'wind': {'speed': 5.71, 'deg': 340.003},
      'rain': {'3h': 0.0075000000000003},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-23 18:00:00'
    }, {
      'dt': 1537736400,
      'main': {
        'temp': 6.87,
        'temp_min': 6.87,
        'temp_max': 6.87,
        'pressure': 1035.67,
        'sea_level': 1043.42,
        'grnd_level': 1035.67,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 3.16, 'deg': 337.504},
      'rain': {'3h': 0.0024999999999995},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-23 21:00:00'
    }, {
      'dt': 1537747200,
      'main': {
        'temp': 4.07,
        'temp_min': 4.07,
        'temp_max': 4.07,
        'pressure': 1038.54,
        'sea_level': 1046.44,
        'grnd_level': 1038.54,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.42, 'deg': 293.004},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 00:00:00'
    }, {
      'dt': 1537758000,
      'main': {
        'temp': 3.34,
        'temp_min': 3.34,
        'temp_max': 3.34,
        'pressure': 1040.27,
        'sea_level': 1048.11,
        'grnd_level': 1040.27,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.52, 'deg': 294.006},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 03:00:00'
    }, {
      'dt': 1537768800,
      'main': {
        'temp': 2.67,
        'temp_min': 2.67,
        'temp_max': 2.67,
        'pressure': 1041.71,
        'sea_level': 1049.79,
        'grnd_level': 1041.71,
        'humidity': 99,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.52, 'deg': 314.001},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 06:00:00'
    }, {
      'dt': 1537779600,
      'main': {
        'temp': 8.4,
        'temp_min': 8.4,
        'temp_max': 8.4,
        'pressure': 1043.54,
        'sea_level': 1051.28,
        'grnd_level': 1043.54,
        'humidity': 99,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.21, 'deg': 318},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 09:00:00'
    }, {
      'dt': 1537790400,
      'main': {
        'temp': 12,
        'temp_min': 12,
        'temp_max': 12,
        'pressure': 1044.1,
        'sea_level': 1051.82,
        'grnd_level': 1044.1,
        'humidity': 92,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.67, 'deg': 324.5},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 12:00:00'
    }, {
      'dt': 1537801200,
      'main': {
        'temp': 12.98,
        'temp_min': 12.98,
        'temp_max': 12.98,
        'pressure': 1043.68,
        'sea_level': 1051.35,
        'grnd_level': 1043.68,
        'humidity': 73,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.87, 'deg': 336.506},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 15:00:00'
    }, {
      'dt': 1537812000,
      'main': {
        'temp': 9.28,
        'temp_min': 9.28,
        'temp_max': 9.28,
        'pressure': 1043.31,
        'sea_level': 1051.25,
        'grnd_level': 1043.31,
        'humidity': 74,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.6, 'deg': 337.5},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 18:00:00'
    }, {
      'dt': 1537822800,
      'main': {
        'temp': 4.39,
        'temp_min': 4.39,
        'temp_max': 4.39,
        'pressure': 1044.35,
        'sea_level': 1052.32,
        'grnd_level': 1044.35,
        'humidity': 88,
        'temp_kf': 0
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n'}],
      'clouds': {'all': 12},
      'wind': {'speed': 1.12, 'deg': 352.504},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 21:00:00'
    }, {
      'dt': 1537833600,
      'main': {
        'temp': 2.65,
        'temp_min': 2.65,
        'temp_max': 2.65,
        'pressure': 1044.62,
        'sea_level': 1052.67,
        'grnd_level': 1044.62,
        'humidity': 88,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.16, 'deg': 263.006},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 00:00:00'
    }, {
      'dt': 1537844400,
      'main': {
        'temp': 1.39,
        'temp_min': 1.39,
        'temp_max': 1.39,
        'pressure': 1044.49,
        'sea_level': 1052.46,
        'grnd_level': 1044.49,
        'humidity': 87,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.15, 'deg': 322.001},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 03:00:00'
    }, {
      'dt': 1537855200,
      'main': {
        'temp': 0.56,
        'temp_min': 0.56,
        'temp_max': 0.56,
        'pressure': 1044.29,
        'sea_level': 1052.46,
        'grnd_level': 1044.29,
        'humidity': 87,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.2, 'deg': 30.0003},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 06:00:00'
    }, {
      'dt': 1537866000,
      'main': {
        'temp': 10.64,
        'temp_min': 10.64,
        'temp_max': 10.64,
        'pressure': 1044.87,
        'sea_level': 1052.65,
        'grnd_level': 1044.87,
        'humidity': 79,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.71, 'deg': 144.005},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 09:00:00'
    }, {
      'dt': 1537876800,
      'main': {
        'temp': 14.58,
        'temp_min': 14.58,
        'temp_max': 14.58,
        'pressure': 1043.97,
        'sea_level': 1051.63,
        'grnd_level': 1043.97,
        'humidity': 73,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.97, 'deg': 193.508},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 12:00:00'
    }, {
      'dt': 1537887600,
      'main': {
        'temp': 14.94,
        'temp_min': 14.94,
        'temp_max': 14.94,
        'pressure': 1042.15,
        'sea_level': 1049.72,
        'grnd_level': 1042.15,
        'humidity': 64,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.7, 'deg': 211},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 15:00:00'
    }, {
      'dt': 1537898400,
      'main': {
        'temp': 11.21,
        'temp_min': 11.21,
        'temp_max': 11.21,
        'pressure': 1040.83,
        'sea_level': 1048.63,
        'grnd_level': 1040.83,
        'humidity': 69,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.21, 'deg': 188.007},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 18:00:00'
    }, {
      'dt': 1537909200,
      'main': {
        'temp': 7.12,
        'temp_min': 7.12,
        'temp_max': 7.12,
        'pressure': 1040.85,
        'sea_level': 1048.68,
        'grnd_level': 1040.85,
        'humidity': 84,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.77, 'deg': 196.5},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 21:00:00'
    }, {
      'dt': 1537920000,
      'main': {
        'temp': 3.96,
        'temp_min': 3.96,
        'temp_max': 3.96,
        'pressure': 1040.01,
        'sea_level': 1047.93,
        'grnd_level': 1040.01,
        'humidity': 92,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.77, 'deg': 180.504},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 00:00:00'
    }, {
      'dt': 1537930800,
      'main': {
        'temp': 2.52,
        'temp_min': 2.52,
        'temp_max': 2.52,
        'pressure': 1038.63,
        'sea_level': 1046.55,
        'grnd_level': 1038.63,
        'humidity': 86,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.96, 'deg': 191.002},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 03:00:00'
    }, {
      'dt': 1537941600,
      'main': {
        'temp': 3.12,
        'temp_min': 3.12,
        'temp_max': 3.12,
        'pressure': 1037.71,
        'sea_level': 1045.65,
        'grnd_level': 1037.71,
        'humidity': 82,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.5, 'deg': 199.004},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 06:00:00'
    }, {
      'dt': 1537952400,
      'main': {
        'temp': 13.15,
        'temp_min': 13.15,
        'temp_max': 13.15,
        'pressure': 1038.2,
        'sea_level': 1045.88,
        'grnd_level': 1038.2,
        'humidity': 72,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02d'}],
      'clouds': {'all': 8},
      'wind': {'speed': 2.42, 'deg': 238.502},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 09:00:00'
    }, {
      'dt': 1537963200,
      'main': {
        'temp': 17.23,
        'temp_min': 17.23,
        'temp_max': 17.23,
        'pressure': 1037.3,
        'sea_level': 1044.86,
        'grnd_level': 1037.3,
        'humidity': 65,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 4.21, 'deg': 240.001},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 12:00:00'
    }, {
      'dt': 1537974000,
      'main': {
        'temp': 18.67,
        'temp_min': 18.67,
        'temp_max': 18.67,
        'pressure': 1035.85,
        'sea_level': 1043.38,
        'grnd_level': 1035.85,
        'humidity': 54,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 4.11, 'deg': 241.501},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 15:00:00'
    }, {
      'dt': 1537984800,
      'main': {
        'temp': 15.71,
        'temp_min': 15.71,
        'temp_max': 15.71,
        'pressure': 1035.3,
        'sea_level': 1042.93,
        'grnd_level': 1035.3,
        'humidity': 57,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 3.12, 'deg': 238.5},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 18:00:00'
    }, {
      'dt': 1537995600,
      'main': {
        'temp': 11.65,
        'temp_min': 11.65,
        'temp_max': 11.65,
        'pressure': 1035.92,
        'sea_level': 1043.63,
        'grnd_level': 1035.92,
        'humidity': 73,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.96, 'deg': 237.503},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 21:00:00'
    }, {
      'dt': 1538006400,
      'main': {
        'temp': 9.29,
        'temp_min': 9.29,
        'temp_max': 9.29,
        'pressure': 1035.89,
        'sea_level': 1043.59,
        'grnd_level': 1035.89,
        'humidity': 85,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 2.65, 'deg': 241.506},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 00:00:00'
    }, {
      'dt': 1538017200,
      'main': {
        'temp': 6.51,
        'temp_min': 6.51,
        'temp_max': 6.51,
        'pressure': 1034.95,
        'sea_level': 1042.76,
        'grnd_level': 1034.95,
        'humidity': 95,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.32, 'deg': 219.002},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 03:00:00'
    }, {
      'dt': 1538028000,
      'main': {
        'temp': 6.02,
        'temp_min': 6.02,
        'temp_max': 6.02,
        'pressure': 1034.12,
        'sea_level': 1041.97,
        'grnd_level': 1034.12,
        'humidity': 90,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.77, 'deg': 215.001},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 06:00:00'
    }, {
      'dt': 1538038800,
      'main': {
        'temp': 14.87,
        'temp_min': 14.87,
        'temp_max': 14.87,
        'pressure': 1033.61,
        'sea_level': 1041.25,
        'grnd_level': 1033.61,
        'humidity': 64,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.77, 'deg': 223.002},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 09:00:00'
    }, {
      'dt': 1538049600,
      'main': {
        'temp': 19.54,
        'temp_min': 19.54,
        'temp_max': 19.54,
        'pressure': 1031.91,
        'sea_level': 1039.46,
        'grnd_level': 1031.91,
        'humidity': 55,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 3.32, 'deg': 230.5},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 12:00:00'
    }, {
      'dt': 1538060400,
      'main': {
        'temp': 20.42,
        'temp_min': 20.42,
        'temp_max': 20.42,
        'pressure': 1029.83,
        'sea_level': 1037.24,
        'grnd_level': 1029.83,
        'humidity': 45,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 4.01, 'deg': 246.001},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 15:00:00'
    }, {
      'dt': 1538071200,
      'main': {
        'temp': 16.79,
        'temp_min': 16.79,
        'temp_max': 16.79,
        'pressure': 1028.89,
        'sea_level': 1036.36,
        'grnd_level': 1028.89,
        'humidity': 48,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 3.25, 'deg': 260.501},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 18:00:00'
    }, {
      'dt': 1538082000,
      'main': {
        'temp': 12.86,
        'temp_min': 12.86,
        'temp_max': 12.86,
        'pressure': 1029.36,
        'sea_level': 1036.95,
        'grnd_level': 1029.36,
        'humidity': 55,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 3.47, 'deg': 287},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 21:00:00'
    }, {
      'dt': 1538092800,
      'main': {
        'temp': 10.83,
        'temp_min': 10.83,
        'temp_max': 10.83,
        'pressure': 1030.2,
        'sea_level': 1037.88,
        'grnd_level': 1030.2,
        'humidity': 77,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 3.41, 'deg': 332.503},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-28 00:00:00'
    }, {
      'dt': 1538103600,
      'main': {
        'temp': 10.03,
        'temp_min': 10.03,
        'temp_max': 10.03,
        'pressure': 1031.15,
        'sea_level': 1038.93,
        'grnd_level': 1031.15,
        'humidity': 99,
        'temp_kf': 0
      },
      'weather': [{'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n'}],
      'clouds': {'all': 44},
      'wind': {'speed': 3.66, 'deg': 348.502},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-28 03:00:00'
    }, {
      'dt': 1538114400,
      'main': {
        'temp': 10.37,
        'temp_min': 10.37,
        'temp_max': 10.37,
        'pressure': 1033.67,
        'sea_level': 1041.33,
        'grnd_level': 1033.67,
        'humidity': 94,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 36},
      'wind': {'speed': 4.12, 'deg': 22.5},
      'rain': {'3h': 0.0099999999999998},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-28 06:00:00'
    }],
    'city': {'id': 2643743, 'name': 'London', 'coord': {'lat': 51.5073, 'lon': -0.1277}, 'country': 'GB', 'population': 1000000}
  },
    'New York': {
    'cod': '200',
    'message': 0.0027,
    'cnt': 40,
    'list': [{
      'dt': 1537693200,
      'main': {
        'temp': 15.74,
        'temp_min': 15.74,
        'temp_max': 17.03,
        'pressure': 1033.35,
        'sea_level': 1036.71,
        'grnd_level': 1033.35,
        'humidity': 90,
        'temp_kf': -1.29
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n'}],
      'clouds': {'all': 80},
      'wind': {'speed': 2.61, 'deg': 31.5016},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-23 09:00:00'
    }, {
      'dt': 1537704000,
      'main': {
        'temp': 16.51,
        'temp_min': 16.51,
        'temp_max': 17.48,
        'pressure': 1033.31,
        'sea_level': 1036.66,
        'grnd_level': 1033.31,
        'humidity': 93,
        'temp_kf': -0.97
      },
      'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 2.66, 'deg': 35},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 12:00:00'
    }, {
      'dt': 1537714800,
      'main': {
        'temp': 17.86,
        'temp_min': 17.86,
        'temp_max': 18.51,
        'pressure': 1034.36,
        'sea_level': 1037.75,
        'grnd_level': 1034.36,
        'humidity': 89,
        'temp_kf': -0.65
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 2.12, 'deg': 35.0046},
      'rain': {'3h': 0.005},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 15:00:00'
    }, {
      'dt': 1537725600,
      'main': {
        'temp': 18.94,
        'temp_min': 18.94,
        'temp_max': 19.26,
        'pressure': 1033.87,
        'sea_level': 1037.27,
        'grnd_level': 1033.87,
        'humidity': 88,
        'temp_kf': -0.32
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 1.66, 'deg': 71.0029},
      'rain': {'3h': 0.025},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 18:00:00'
    }, {
      'dt': 1537736400,
      'main': {
        'temp': 18.62,
        'temp_min': 18.62,
        'temp_max': 18.62,
        'pressure': 1033.57,
        'sea_level': 1036.78,
        'grnd_level': 1033.57,
        'humidity': 93,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 1.61, 'deg': 104.504},
      'rain': {'3h': 0.14},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-23 21:00:00'
    }, {
      'dt': 1537747200,
      'main': {
        'temp': 17.92,
        'temp_min': 17.92,
        'temp_max': 17.92,
        'pressure': 1034.33,
        'sea_level': 1037.73,
        'grnd_level': 1034.33,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 80},
      'wind': {'speed': 1.07, 'deg': 122.504},
      'rain': {'3h': 0.035},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 00:00:00'
    }, {
      'dt': 1537758000,
      'main': {
        'temp': 16.49,
        'temp_min': 16.49,
        'temp_max': 16.49,
        'pressure': 1035.57,
        'sea_level': 1038.99,
        'grnd_level': 1035.57,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 76},
      'wind': {'speed': 1.12, 'deg': 113.506},
      'rain': {'3h': 0.005},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 03:00:00'
    }, {
      'dt': 1537768800,
      'main': {
        'temp': 15.37,
        'temp_min': 15.37,
        'temp_max': 15.37,
        'pressure': 1036.52,
        'sea_level': 1039.94,
        'grnd_level': 1036.52,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n'}],
      'clouds': {'all': 68},
      'wind': {'speed': 1.32, 'deg': 66.5008},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 06:00:00'
    }, {
      'dt': 1537779600,
      'main': {
        'temp': 15.4,
        'temp_min': 15.4,
        'temp_max': 15.4,
        'pressure': 1037.7,
        'sea_level': 1041.14,
        'grnd_level': 1037.7,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 3.56, 'deg': 29.0001},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-24 09:00:00'
    }, {
      'dt': 1537790400,
      'main': {
        'temp': 15.55,
        'temp_min': 15.55,
        'temp_max': 15.55,
        'pressure': 1039.81,
        'sea_level': 1043.27,
        'grnd_level': 1039.81,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d'}],
      'clouds': {'all': 0},
      'wind': {'speed': 4.22, 'deg': 51.5004},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 12:00:00'
    }, {
      'dt': 1537801200,
      'main': {
        'temp': 19.88,
        'temp_min': 19.88,
        'temp_max': 19.88,
        'pressure': 1041,
        'sea_level': 1044.58,
        'grnd_level': 1041,
        'humidity': 83,
        'temp_kf': 0
      },
      'weather': [{'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02d'}],
      'clouds': {'all': 12},
      'wind': {'speed': 4.62, 'deg': 75.5063},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 15:00:00'
    }, {
      'dt': 1537812000,
      'main': {
        'temp': 20.08,
        'temp_min': 20.08,
        'temp_max': 20.08,
        'pressure': 1041.61,
        'sea_level': 1044.92,
        'grnd_level': 1041.61,
        'humidity': 80,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 76},
      'wind': {'speed': 5.45, 'deg': 99.5005},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 18:00:00'
    }, {
      'dt': 1537822800,
      'main': {
        'temp': 19.49,
        'temp_min': 19.49,
        'temp_max': 19.49,
        'pressure': 1041.43,
        'sea_level': 1044.78,
        'grnd_level': 1041.43,
        'humidity': 81,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 64},
      'wind': {'speed': 5.82, 'deg': 102.504},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-24 21:00:00'
    }, {
      'dt': 1537833600,
      'main': {
        'temp': 18.2,
        'temp_min': 18.2,
        'temp_max': 18.2,
        'pressure': 1042.03,
        'sea_level': 1045.33,
        'grnd_level': 1042.03,
        'humidity': 86,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04n'}],
      'clouds': {'all': 80},
      'wind': {'speed': 6.01, 'deg': 100.506},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 00:00:00'
    }, {
      'dt': 1537844400,
      'main': {
        'temp': 17.89,
        'temp_min': 17.89,
        'temp_max': 17.89,
        'pressure': 1042.14,
        'sea_level': 1045.57,
        'grnd_level': 1042.14,
        'humidity': 88,
        'temp_kf': 0
      },
      'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 6.05, 'deg': 99.5008},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 03:00:00'
    }, {
      'dt': 1537855200,
      'main': {
        'temp': 16.01,
        'temp_min': 16.01,
        'temp_max': 16.01,
        'pressure': 1041.37,
        'sea_level': 1044.8,
        'grnd_level': 1041.37,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 100},
      'wind': {'speed': 5.8, 'deg': 92.0003},
      'rain': {'3h': 2.43},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 06:00:00'
    }, {
      'dt': 1537866000,
      'main': {
        'temp': 15.94,
        'temp_min': 15.94,
        'temp_max': 15.94,
        'pressure': 1039.52,
        'sea_level': 1042.96,
        'grnd_level': 1039.52,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10n'}],
      'clouds': {'all': 100},
      'wind': {'speed': 6.36, 'deg': 92.5046},
      'rain': {'3h': 3.48},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-25 09:00:00'
    }, {
      'dt': 1537876800,
      'main': {
        'temp': 16.98,
        'temp_min': 16.98,
        'temp_max': 16.98,
        'pressure': 1039.03,
        'sea_level': 1042.31,
        'grnd_level': 1039.03,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 4.67, 'deg': 95.508},
      'rain': {'3h': 7.745},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 12:00:00'
    }, {
      'dt': 1537887600,
      'main': {
        'temp': 18.89,
        'temp_min': 18.89,
        'temp_max': 18.89,
        'pressure': 1037.2,
        'sea_level': 1040.44,
        'grnd_level': 1037.2,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 4.35, 'deg': 105},
      'rain': {'3h': 4.82},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 15:00:00'
    }, {
      'dt': 1537898400,
      'main': {
        'temp': 20.51,
        'temp_min': 20.51,
        'temp_max': 20.51,
        'pressure': 1034.43,
        'sea_level': 1037.69,
        'grnd_level': 1034.43,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 502, 'main': 'Rain', 'description': 'heavy intensity rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 4.11, 'deg': 166.507},
      'rain': {'3h': 23.945},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 18:00:00'
    }, {
      'dt': 1537909200,
      'main': {
        'temp': 20.62,
        'temp_min': 20.62,
        'temp_max': 20.62,
        'pressure': 1032.99,
        'sea_level': 1036.32,
        'grnd_level': 1032.99,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 502, 'main': 'Rain', 'description': 'heavy intensity rain', 'icon': '10d'}],
      'clouds': {'all': 92},
      'wind': {'speed': 4.52, 'deg': 183},
      'rain': {'3h': 14.62},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-25 21:00:00'
    }, {
      'dt': 1537920000,
      'main': {
        'temp': 21.21,
        'temp_min': 21.21,
        'temp_max': 21.21,
        'pressure': 1031.9,
        'sea_level': 1035.21,
        'grnd_level': 1031.9,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 4.22, 'deg': 177.004},
      'rain': {'3h': 0.24},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 00:00:00'
    }, {
      'dt': 1537930800,
      'main': {
        'temp': 21.62,
        'temp_min': 21.62,
        'temp_max': 21.62,
        'pressure': 1030.77,
        'sea_level': 1034.14,
        'grnd_level': 1030.77,
        'humidity': 99,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 3.46, 'deg': 188.502},
      'rain': {'3h': 0.039999999999999},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 03:00:00'
    }, {
      'dt': 1537941600,
      'main': {
        'temp': 21.72,
        'temp_min': 21.72,
        'temp_max': 21.72,
        'pressure': 1029.2,
        'sea_level': 1032.48,
        'grnd_level': 1029.2,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 3.65, 'deg': 183.504},
      'rain': {'3h': 0.32},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 06:00:00'
    }, {
      'dt': 1537952400,
      'main': {
        'temp': 21.65,
        'temp_min': 21.65,
        'temp_max': 21.65,
        'pressure': 1026.52,
        'sea_level': 1029.87,
        'grnd_level': 1026.52,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 3.72, 'deg': 179.502},
      'rain': {'3h': 0.48},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-26 09:00:00'
    }, {
      'dt': 1537963200,
      'main': {
        'temp': 21.38,
        'temp_min': 21.38,
        'temp_max': 21.38,
        'pressure': 1025.31,
        'sea_level': 1028.65,
        'grnd_level': 1025.31,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 100},
      'wind': {'speed': 2.46, 'deg': 192.001},
      'rain': {'3h': 0.63},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 12:00:00'
    }, {
      'dt': 1537974000,
      'main': {
        'temp': 22.92,
        'temp_min': 22.92,
        'temp_max': 22.92,
        'pressure': 1024.33,
        'sea_level': 1027.7,
        'grnd_level': 1024.33,
        'humidity': 99,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 48},
      'wind': {'speed': 2.71, 'deg': 212.001},
      'rain': {'3h': 0.36},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 15:00:00'
    }, {
      'dt': 1537984800,
      'main': {
        'temp': 24.51,
        'temp_min': 24.51,
        'temp_max': 24.51,
        'pressure': 1022.57,
        'sea_level': 1025.86,
        'grnd_level': 1022.57,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 76},
      'wind': {'speed': 3.87, 'deg': 200.5},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 18:00:00'
    }, {
      'dt': 1537995600,
      'main': {
        'temp': 24.2,
        'temp_min': 24.2,
        'temp_max': 24.2,
        'pressure': 1020.6,
        'sea_level': 1023.97,
        'grnd_level': 1020.6,
        'humidity': 96,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 80},
      'wind': {'speed': 3.81, 'deg': 199.503},
      'rain': {'3h': 0.11},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-26 21:00:00'
    }, {
      'dt': 1538006400,
      'main': {
        'temp': 23.34,
        'temp_min': 23.34,
        'temp_max': 23.34,
        'pressure': 1019.76,
        'sea_level': 1023.16,
        'grnd_level': 1019.76,
        'humidity': 97,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 88},
      'wind': {'speed': 3.8, 'deg': 183.006},
      'rain': {'3h': 0.030000000000001},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 00:00:00'
    }, {
      'dt': 1538017200,
      'main': {
        'temp': 22.71,
        'temp_min': 22.71,
        'temp_max': 22.71,
        'pressure': 1018.98,
        'sea_level': 1022.65,
        'grnd_level': 1018.98,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 76},
      'wind': {'speed': 4.37, 'deg': 199.002},
      'rain': {'3h': 0.049999999999997},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 03:00:00'
    }, {
      'dt': 1538028000,
      'main': {
        'temp': 20.62,
        'temp_min': 20.62,
        'temp_max': 20.62,
        'pressure': 1019.69,
        'sea_level': 1023,
        'grnd_level': 1019.69,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 501, 'main': 'Rain', 'description': 'moderate rain', 'icon': '10n'}],
      'clouds': {'all': 88},
      'wind': {'speed': 1.42, 'deg': 281.001},
      'rain': {'3h': 8.22},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 06:00:00'
    }, {
      'dt': 1538038800,
      'main': {
        'temp': 19.92,
        'temp_min': 19.92,
        'temp_max': 19.92,
        'pressure': 1021.29,
        'sea_level': 1024.59,
        'grnd_level': 1021.29,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n'}],
      'clouds': {'all': 92},
      'wind': {'speed': 3.72, 'deg': 276.002},
      'rain': {'3h': 1.11},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-27 09:00:00'
    }, {
      'dt': 1538049600,
      'main': {
        'temp': 19.74,
        'temp_min': 19.74,
        'temp_max': 19.74,
        'pressure': 1023.97,
        'sea_level': 1027.34,
        'grnd_level': 1023.97,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d'}],
      'clouds': {'all': 88},
      'wind': {'speed': 4.12, 'deg': 327},
      'rain': {'3h': 0.34},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 12:00:00'
    }, {
      'dt': 1538060400,
      'main': {
        'temp': 19.62,
        'temp_min': 19.62,
        'temp_max': 19.62,
        'pressure': 1026.18,
        'sea_level': 1029.54,
        'grnd_level': 1026.18,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 68},
      'wind': {'speed': 3.51, 'deg': 333.501},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 15:00:00'
    }, {
      'dt': 1538071200,
      'main': {
        'temp': 19.79,
        'temp_min': 19.79,
        'temp_max': 19.79,
        'pressure': 1026.46,
        'sea_level': 1029.88,
        'grnd_level': 1026.46,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d'}],
      'clouds': {'all': 76},
      'wind': {'speed': 2.65, 'deg': 329.001},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 18:00:00'
    }, {
      'dt': 1538082000,
      'main': {
        'temp': 20.66,
        'temp_min': 20.66,
        'temp_max': 20.66,
        'pressure': 1027.09,
        'sea_level': 1030.42,
        'grnd_level': 1027.09,
        'humidity': 96,
        'temp_kf': 0
      },
      'weather': [{'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d'}],
      'clouds': {'all': 88},
      'wind': {'speed': 1.52, 'deg': 320},
      'rain': {},
      'sys': {'pod': 'd'},
      'dt_txt': '2018-09-27 21:00:00'
    }, {
      'dt': 1538092800,
      'main': {
        'temp': 18.78,
        'temp_min': 18.78,
        'temp_max': 18.78,
        'pressure': 1028.66,
        'sea_level': 1032.13,
        'grnd_level': 1028.66,
        'humidity': 98,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.06, 'deg': 246.503},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-28 00:00:00'
    }, {
      'dt': 1538103600,
      'main': {
        'temp': 17.03,
        'temp_min': 17.03,
        'temp_max': 17.03,
        'pressure': 1029.78,
        'sea_level': 1033.13,
        'grnd_level': 1029.78,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.56, 'deg': 227.002},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-28 03:00:00'
    }, {
      'dt': 1538114400,
      'main': {
        'temp': 16.07,
        'temp_min': 16.07,
        'temp_max': 16.07,
        'pressure': 1029.78,
        'sea_level': 1033.18,
        'grnd_level': 1029.78,
        'humidity': 100,
        'temp_kf': 0
      },
      'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n'}],
      'clouds': {'all': 0},
      'wind': {'speed': 1.42, 'deg': 255},
      'rain': {},
      'sys': {'pod': 'n'},
      'dt_txt': '2018-09-28 06:00:00'
    }],
    'city': {'id': 5128581, 'name': 'New York', 'coord': {'lat': 40.7306, 'lon': -73.9867}, 'country': 'US', 'population': 8175133}
  }};

  constructor(private http: HttpClient) {
  }

  fetchWeatherForecast(city) {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    return this.http.get(url);
  }

  fakeFetchWeatherForecast(city) {
    return of(this.weatherData[city]);
  }
}
