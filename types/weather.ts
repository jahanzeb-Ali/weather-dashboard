export interface WeatherData {
  location: {
    name: string
    region: string
    country: string
    localtime: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    feelslike_c: number
    humidity: number
    wind_kph: number
    pressure_mb: number
    precip_mm: number
    uv: number
  }
}

export interface WeatherError {
  message: string
}

